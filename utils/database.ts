const Seq = require("sequelize");

const DB_NAME = "heroku_2087d4fc19849bc";
const USER_NAME = "b8b2d681755a97";
const PASSWORD = "b68e811f";

const seq = new Seq(DB_NAME, USER_NAME, PASSWORD, {
  host: "us-cdbr-east-05.cleardb.net",
  dialect: "mysql",
});

module.exports = seq;
