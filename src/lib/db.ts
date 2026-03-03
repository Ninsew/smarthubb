import Database from 'better-sqlite3';
import path from 'path';

// Database path in the root directory
const dbPath = path.resolve(process.cwd(), 'smarthubb.db');

export const db = new Database(dbPath);

// Initialize tables
db.exec(`
  CREATE TABLE IF NOT EXISTS generation_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    title TEXT,
    keyword TEXT,
    status TEXT,
    tokens INTEGER,
    error TEXT
  );

  CREATE TABLE IF NOT EXISTS article_queue (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    keyword TEXT NOT NULL,
    status TEXT DEFAULT 'pending', -- pending, generating, failed, completed
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS rss_feeds (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    url TEXT NOT NULL,
    category TEXT DEFAULT 'nyheter',
    active INTEGER DEFAULT 1,
    last_checked DATETIME
  );

  CREATE TABLE IF NOT EXISTS prompts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE NOT NULL,
    description TEXT,
    content TEXT NOT NULL
  );
`);

export function logGeneration(data: { title: string, keyword: string, status: string, tokens: number, error?: string }) {
  const stmt = db.prepare('INSERT INTO generation_logs (title, keyword, status, tokens, error) VALUES (?, ?, ?, ?, ?)');
  return stmt.run(data.title, data.keyword, data.status, data.tokens, data.error || null);
}

export function getLatestLogs(limit = 10) {
  return db.prepare('SELECT * FROM generation_logs ORDER BY timestamp DESC LIMIT ?').all(limit);
}

export function getPrompts() {
  return db.prepare('SELECT * FROM prompts').all();
}

export function getPromptByName(name: string) {
  return db.prepare('SELECT content FROM prompts WHERE name = ?').get(name) as { content: string } | undefined;
}

export function updatePrompt(name: string, content: string, description?: string) {
  const stmt = db.prepare('INSERT INTO prompts (name, content, description) VALUES (?, ?, ?) ON CONFLICT(name) DO UPDATE SET content=excluded.content, description=excluded.description');
  return stmt.run(name, content, description);
}

export function getRssFeeds() {
  return db.prepare('SELECT * FROM rss_feeds').all();
}

export function addRssFeed(name: string, url: string, category: string) {
  return db.prepare('INSERT INTO rss_feeds (name, url, category) VALUES (?, ?, ?)').run(name, url, category);
}

export function deleteRssFeed(id: number) {
  return db.prepare('DELETE FROM rss_feeds WHERE id = ?').run(id);
}

export function updateRssLastChecked(id: number) {
  return db.prepare('UPDATE rss_feeds SET last_checked = CURRENT_TIMESTAMP WHERE id = ?').run(id);
}

// Seed default prompts if missing
const defaultPrompts = [
  {
    name: 'writer_agent',
    description: 'Skriver det initiala utkastet (huvudprompt)',
    content: `Du är en svensk expert på Home Assistant, Zigbee och smarta hem. Ditt mål är att skriva en extremt högkvalitativ, tekniskt korrekt och engagerande artikel.
Instruktioner:
1. Skriv minst 1200 ord.
2. Använd professionell men lättförståelig ton.
3. Strukturera med H2 och H3 rubriker.
4. Om det är en guide, inkludera YAML-kodexempel eller steg-för-steg instruktioner.
5. Inkludera aldrig slutsats/sammanfattning med rubriken "Sammanfattning", låt texten flyta naturligt till ett avslut.`
  },
  {
    name: 'humanize_agent',
    description: 'Gör texten mer mänsklig och tar bort AI-mönster',
    content: `Du är en redaktör specialiserad på att göra AI-genererat innehåll mer mänskligt.
Din uppgift är att skriva om texten så den känns skriven av en passionerad svensk teknikbloggare.
Regler:
1. Variation i meningslängd: Blanda korta (2-5 ord) och långa meningar.
2. Ta bort typiska AI-ord: "Sammanfattningsvis", "Viktigt att komma ihåg", "Dessutom", "Å andra sidan".
3. Använd direkt tilltal ("du", "vi").
4. Gör punktlistor asymmetriska (inte lika långa punkter).
5. Svara ENDAST med den förbättrade Markdown-texten, inga kommentarer.`
  }
];

const existingPrompts = getPrompts();
if ((existingPrompts as any[]).length === 0) {
  defaultPrompts.forEach(p => updatePrompt(p.name, p.content, p.description));
}
