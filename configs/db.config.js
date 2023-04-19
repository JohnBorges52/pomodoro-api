// Database connections
const { Pool } = require('pg');

const { HOSTNAME, PORT, DATABASE, USERNAME, PASSWORD } = process.env;

const pool = new Pool({
  HOSTNAME: HOSTNAME,
  PORT: PORT,
  DATABASE: DATABASE,
  USERNAME: USERNAME,
  PASSWORD: PASSWORD,


})

pool.connect().then(() => {
  console.log("Database connection established.")
}).catch(e => {
  throw new Error(e);
})

module.exports = pool;
