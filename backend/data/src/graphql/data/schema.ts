import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const schema = `
type Person {
  id: Int!
  firstName: String
  lastName: String
  twitterHandle: String
  avatarUrl: String,
  episodes: [Episode]
}
type CurrentHosts {
  hostIds: [Int]
}
type CurrentPanelists {
  panelistIds: [Int]
}
type Episode {
  id: String!
  title: String
  dateTime: String
  videoUrl: String
  hosts: [Int]
  panelists: [Int]
  guests: [Int]
}
# the schema allows the following query:
type Query {
  episodes: [Episode]
  people: [Person]
  person(id: Int!): Person
}
`;

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers
});
