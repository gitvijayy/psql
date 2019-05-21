const pg = require("pg");
const settings = require("./settings"); // settings.json

// const client = new pg.Client({
//   user     : settings.user,
//   password : settings.password,
//   database : settings.database,
//   host     : settings.hostname,
//   port     : settings.port,
//   ssl      : settings.ssl
// });

var knex = require('knex')({
  client: 'pg',
  connection: {
    user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
  }
});

// var pg = require('knex')({
//   client: 'pg',
//   connection: process.env.PG_CONNECTION_STRING,
//   searchPath: ['knex', 'public'],
// });

knex.select().from('famous_people').where("first_name","123456").then(function(rows) {
  //console.log(rows)
  return rows;
  
}).then(function(rows) {
  console.log(rows)
  knex.destroy();
})
.catch(function(error) {
  console.error(error)
})

knex('famous_people').insert([{first_name: "123456",last_name: "Srinivasan"}])
.then( function (result) {
  //res.json({ success: true, message: 'ok' });     // respond back to request
 // console.log(result.rows)
})


// });