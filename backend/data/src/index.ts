import {setupGraphQLServer} from './graphql/server';

const app = setupGraphQLServer();
app.listen(3000, () => {
  console.log('Go to http://localhost:3000/graphiql to run queries!');
});
