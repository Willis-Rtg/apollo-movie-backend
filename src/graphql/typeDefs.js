import { gql } from "apollo-server-core";

export default gql`
  type Query {
    Movie(id: ID): Movie!
    Movies(limit: Int, rating: Float): [Movie]!
    Suggestions(id: ID): [Movie]!
  }

  type Movie {
    id: ID!
    title: String!
    rating: Float!
    genres: String!
    summary: String!
    description_intro: String!
    language: String!
    background_image: String!
    medium_cover_image: String!
  }
`;
