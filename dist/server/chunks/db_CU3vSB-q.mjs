import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.resolve(process.cwd(), "smarthubb.db");
const db = new Database(dbPath);
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
`);
function logGeneration(data) {
  const stmt = db.prepare("INSERT INTO generation_logs (title, keyword, status, tokens, error) VALUES (?, ?, ?, ?, ?)");
  return stmt.run(data.title, data.keyword, data.status, data.tokens, data.error || null);
}
function getLatestLogs(limit = 10) {
  return db.prepare("SELECT * FROM generation_logs ORDER BY timestamp DESC LIMIT ?").all(limit);
}

export { getLatestLogs as g, logGeneration as l };
