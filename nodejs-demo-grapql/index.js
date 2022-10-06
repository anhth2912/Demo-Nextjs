const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const mongoMethod = require("./data/service");

const app = express();
//Load schema and resolver
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");

async function apolloServerStart() {
  try {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: () => ({ mongoMethod }),
    });
    await server.start();
    server.applyMiddleware({ app });
    console.log(`apolloserver started`);
  } catch (error) {
    console.log(error);
  }
}

function connectMongodb() {
  try {
    mongoose.connect(
      "mongodb+srv://anhth2912:hoanganh2000@cluster0.uumtgyt.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log("Connected tomongodb");
      }
    );
  } catch (error) {
    console.log(error);
  }
}

apolloServerStart();
connectMongodb();

app.listen(5000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connect to port 5000");
  }
});
