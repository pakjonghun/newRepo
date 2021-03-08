import { makeExecutableSchema } from "apollo-server-express";
import { loadFilesSync, mergeResolvers, mergeTypeDefs } from "graphql-tools";

const type = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);
const query = loadFilesSync(`${__dirname}/**/*.{queries,mutations}.js`);

const typeDefs = mergeTypeDefs(type);
const resolvers = mergeResolvers(query);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
