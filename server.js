const { ApolloServer, gql } = require(`apollo-server`);

const typeDefs = gql`
  type Query {
    hellow: String
  }
`;

const resolvers = {
  Query: {
    hellow: () => "hellow",
  },
};
const server = new ApolloServer({ resolvers, typeDefs });
server.listen().then(() => console.log("hi"));

console.log(5);
asdfasf;
