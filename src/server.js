import { ApolloServer, gql } from "apollo-server";
import env from "dotenv";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

env.config();

const server = new ApolloServer({ typeDefs, resolvers, playground: true });

server
  .listen({ port: process.env.PORT })
  .then(console.log("server running http://localhost:4000"));
