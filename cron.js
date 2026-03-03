import cron from 'node-cron';
import fetch from 'node-fetch';

console.log('Starting SmartHubb Cron Worker...');

// Run every hour at minute 0
cron.schedule('0 * * * *', async () => {
  try {
    console.log(`[${new Date().toISOString()}] Triggering RSS Cron Job...`);
    const res = await fetch('http://127.0.0.1:4321/api/cron?token=smarthubb-cron-secret');
    if (res.ok) {
      const data = await res.json();
      console.log(`[${new Date().toISOString()}] Cron finished successfully. Processed: ${data.processed}`);
    } else {
      console.error(`[${new Date().toISOString()}] Cron failed with status: ${res.status}`);
    }
  } catch (error) {
    console.error(`[${new Date().toISOString()}] Cron error:`, error);
  }
});
