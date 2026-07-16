const mysql = require('mysql2/promise');

async function initializeDatabase({ host, user, password, database, port }) {
  const rootConnection = await mysql.createConnection({ host, port, user, password });
  const databaseName = String(database || '').trim();

  if (!databaseName || /[`'"\\;\u0000]/.test(databaseName)) {
    throw new Error('Invalid database name provided.');
  }

  await rootConnection.query(`CREATE DATABASE IF NOT EXISTS ${mysql.escapeId(databaseName)}`);
  await rootConnection.end();

  const pool = mysql.createPool({
    host,
    port,
    user,
    password,
    database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  await pool.query(`
    CREATE TABLE IF NOT EXISTS portfolio_items (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      category VARCHAR(100),
      url VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  return pool;
}

module.exports = { initializeDatabase };
