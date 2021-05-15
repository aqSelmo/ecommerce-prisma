import { ApolloServer } from 'apollo-server';
import { resolve } from 'path';
import { buildSchema } from 'type-graphql';

import { customAuthChecker } from './auth/vaildation.auth';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [resolve(__dirname, 'resolvers', '*.resolver.ts')],
    authChecker: customAuthChecker,
  });

  const server = new ApolloServer({
    schema,
    cors: true,
  });

  const { url } = await server.listen(process.env.PORT || 4000);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
