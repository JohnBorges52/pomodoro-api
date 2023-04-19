// Database connections
const { Client } = require('pg');

const { HOSTNAME, PORT, DATABASE, USERNAME, PASSWORD } = process.env;

const client = new Client({
  HOSTNAME: HOSTNAME,
  PORT: PORT,
  DATABASE: DATABASE,
  USERNAME: USERNAME,
  PASSWORD: PASSWORD,


})

client.connect().then(() => {
  console.log("Database connection established.")
}).catch(e => {
  console.error(e)
  throw new Error(e);
})

module.exports = client;
