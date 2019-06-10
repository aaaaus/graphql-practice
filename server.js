const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

//app.use is how middleware is wired up
app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true //development tool that allows us to make queries against our dev server
  })
);

app.listen(4000, () => {
  console.log('Listening');
});
