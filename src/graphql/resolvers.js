import { getMovie, getMovies } from "./db";

const resolvers = {
  Query: {
    Movie: (_, { id }) => getMovie(id),
    Movies: (_, { limit, rating }) => getMovies(limit, rating),
  },
};

export default resolvers;
