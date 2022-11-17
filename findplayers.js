/*
Install the KNEX Module

$ npm install knex --save
 Then add one of the following (adding a --save) flag:

$ npm install pg
$ npm install sqlite3
$ npm install mysql
$ npm install mysql2
$ npm install oracledb
$ npm install mssql */

// plug in all of the info to this

const express = require("express");
const app = express();

const db = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "root",
    database: "Hollywood",
    port: 5432,
  },
});

app.set("db", db);

app.listen(3000, () => console.log("Example app listening on port 3000!"));

app.get("/", (req, res) => {
  db.select("first_name", "last_name")
    .from("actors")
    .then((actors) => res.send(actors));
});
