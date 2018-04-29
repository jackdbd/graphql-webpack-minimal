require("dotenv").load();
import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
import typeDefs from "../graphql/typeDefs.graphql";
import resolvers from "./resolvers";

if (!process.env.PORT) {
  throw new Error(
    "Please setup PORT in .env file (place .env file in the root of this repo)."
  );
}
const PORT = process.env.PORT;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();

// The GraphQL endpoint
app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

app.listen(PORT, () => {
  console.log(`Go to http://localhost:${PORT}/graphiql to run queries!`);
});
