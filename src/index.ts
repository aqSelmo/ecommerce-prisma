import { ApolloServer } from 'apollo-server';
import { resolve } from 'path';
import { buildSchema } from 'type-graphql';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [resolve(__dirname, 'resolvers', '*.resolver.ts')],
  });

  const server = new ApolloServer({
    schema,
    playground: true,
  });

  const { url } = await server.listen(process.env.PORT || 4000);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
