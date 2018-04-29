# GraphQL Webpack Minimal

A super-simple GraphQL server with a basic configuration for webpack 4.

## Usage

```shell
yarn install
yarn run build  # or yarn run dev
yarn run serve
```

Go to `http://localhost:3000/graphiql` to run queries like this one:

```shell
{
  books {
    title
  }
}
```

The main point of using webpack is to write GraphQL types, queries and mutations in `.graphql` files.

See also:

- [Static GraphQL queries](https://dev-blog.apollodata.com/5-benefits-of-static-graphql-queries-b7fa90b0b69a)
- [Webpack'ing your graphQL Documents](https://dev-blog.apollodata.com/webpacking-your-graphql-documents-bf9697ed259b)
