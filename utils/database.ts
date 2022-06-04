const Seq = require("sequelize");

const DB_NAME = "node-todo";
const USER_NAME = "root";
const PASSWORD = "38Sk6481";

const seq = new Seq(DB_NAME, USER_NAME, PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = seq;
