module.exports = {
  apps: [
    {
      name: "smarthubb",
      script: "dist/server/entry.mjs",
      env: {
        NODE_ENV: "production",
        PORT: 4321,
        HOST: "0.0.0.0"
      }
    },
    {
      name: "smarthubb-cron",
      script: "cron.js",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
