# graphql-practice

## libraries installed

- express, express-graphql, graphql, lodash, json-server, axios, nodemon

## Notes

- Express is an HTTP server that takes in a request and sends back response
- It will check the request to see if it needs to be passed off to GraphQL first

### Schema

- Schema tells GraphQL what our data looks like

### Root Query

- Allows GraphQL to jump to a very specific node on the graph

### GraphiQL

- Dev tool provided by graphql-express library
- can be used to investigate queries inside the application

### JSON Server

- install json server `npm install --save json-server`
- create 'db.json' in project directory, add data
- add to package.json scripts: `"json:server": "json-server --watch db.json"`
- run with commmand `npm run json:server`

### nodemon

- watches for changes in server code and restarts server
- install with `npm install --save nodemon`
- configure in package.json scripts: `"dev": "nodemon server.js"`

## Correcting circular references

- UserType and CompanyType both reference one another
- Using arrow function within fields object allows the information to be defined but not executed until after the entire file is executed

## Query Fragments

- useful so that your queries don't repeat themselves on the front end
- https://www.udemy.com/graphql-with-react-course/learn/lecture/6523088#overview

## Mutations

- allow the ability to alter db records through GraphQL

## Delete Mutation

- Even if no data is coming back from server, GraphQL expects something back ...

## Edit Mutation

- NOTE: Put request (full on replacement), patch request (replace only properties contained within request body)
