const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

export const backupDatabase = async (strapi) => {
  const dbConfig = strapi.config.get("database.connection");
  const backupDir = path.join(__dirname, "..", "backups");

  // Create a backup directory if it doesn't exist
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir);
  }

  const backupFile = path.join(
    backupDir,
    `backup_${new Date().toISOString()}.sql`
  );

  const command = `pg_dump --host=${dbConfig.host} --port=${dbConfig.port} --username=${dbConfig.user} --dbname=${dbConfig.database} --file=${backupFile}`;

  return new Promise((resolve, reject) => {
    exec(
      command,
      { env: { PGPASSWORD: dbConfig.password } },
      (error, stdout, stderr) => {
        if (error) {
          strapi.log.error("Database backup failed:", error);
          return reject(error);
        }
        strapi.log.info("Database backup completed successfully.");
        resolve(stdout);
      }
    );
  });
};
