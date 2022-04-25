const { gql } = require("apollo-server");

const typeDefs = gql`
  # schema defined here
  type Query {
    tracksForHome: [Track!]!
    spaceCats: [SpaceCat!]!
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  type SpaceCat {
    id: ID!
    name: String!
    age: Int
    missions: Mission
  }

  type Mission {
    id: ID!
    name: String!
    description: String!
  }
`;

/**
 * Create a full schema with: a type Query containing a field spaceCats to fetch a List of SpaceCat. A type SpaceCat with its subfields: id of type ID!, name of type String!, age of type Int and missions of type List of Mission. Finally define the Mission type with its subfields: id of type ID!, name of type String!, and description of type String!.
 */

module.exports = typeDefs;
