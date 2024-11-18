import 'dotenv/config';
import express from "express";
import {sessionStarter} from "puzzle-host-data-layer";
import authorization from "./authorization";
import setupServer from "./serverSetup";

const port = 8888;
const app = express();
/*
  todo: Change from the above express app to the one below when you want to implement the web socket part of the API
  Consider using EventEmitter from Node for the implementation
*/
// const app = websocketExpress(express()).app;

(async function() {
  /*
    NOTE: This CORS setup will get you started, but should not be considered secure.
    Keep in mind that your endpoints will get a request of method OPTIONS that can be responded to with a 204
  */
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", ["*"]);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  // The following creates the database client to be used in the puzzle-host-data-layer API
  let dbClient = null;
  try {
    /*
      NOTE: you can create a .env file in the root of this directory with a "DB_CONNECTION" key
      if you'd prefer to read the database connection string from there
    */
    const dbConnection = process.argv.length > 2 ? process.argv[process.argv.length - 1] : undefined;
    dbClient = await sessionStarter(dbConnection);
  }
  catch(e) {
    console.log("error connecting to database:", e);
    return;
  }

  // This function does all the server setup - you should set up your routes in here.
  setupServer(app, authorization, dbClient);

  // Start the server on the expected port
  app.listen(port, () => {
    console.log(`Server started on port: ${port}\nctrl+c to quit`);
  });
})();
