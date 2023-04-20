// Database connections
const { Client } = require('pg');

// const { HOSTNAME, PORT, DATABASE, USERNAME, PASSWORD } = process.env;

const client = new Client({
  HOSTNAME: 'dpg-ch034hrh4hstquodonlg-a',
  PORT: 5432,
  DATABASE: 'animepomosql',
  USERNAME: 'animepomosql_user',
  PASSWORD: 'jKDK8oEkwl1Q8JibFKbMj9sLPL7716KM',


})

client.connect().then(() => {
  console.log("Database connection established.")
}).catch(e => {
  console.error(e)
})

module.exports = client;
