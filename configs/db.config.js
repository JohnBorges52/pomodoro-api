// Database connections
const { Client } = require('pg');

const { connectionString } = process.env;

const client = new Client({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect().then(() => {
  console.log("Database connection established.")
}).catch((err) => console.error('Error connecting to database', err));

module.exports = client;
