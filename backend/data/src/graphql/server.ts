import * as bodyParser from 'body-parser';
import * as express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import schema from './data/schema';
import {printSchema} from "graphql";

export const setupGraphQLServer = () => {
  const app = express();
  app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
  app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
  app.get('/schema', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send(printSchema(schema));
  });
  return app;
};
