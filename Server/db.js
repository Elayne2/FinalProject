const Pool = require('pg').Pool


const pool = new Pool({
  user: "postgres",
  password:"Elayne1234",
  host: "localhost",
  port: "5432",
  database: 'TS'
})

module.exports = pool