const express = require("express");
const cors = require("cors");
const path = require("path");
const { graphqlHTTP } = require("express-graphql");
const { bodyParserGraphQL } = require("body-parser-graphql");
const bodyParser    = require('body-parser'); 
const schema = require("./graphQl/schema.ts");
const resolver = require("./graphQl/resolver.ts");
const sequelize = require("./utils/database.ts");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParserGraphQL());
app.use(
  graphqlHTTP({
    schema,
    rootValue: resolver,
    graphiql: true,
  })
);

app.use((req, res, next) => {
  res.sendFile("/index.html");
});

const start = async () => {
  try {
    await sequelize.sync();
    app.listen(PORT);
  } catch (e) {
    console.log(e);
  }
};

start();
