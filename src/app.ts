// import the expression application and type defnition 
import express, { Express } from "express";

// initialize the express application
const app: Express = express();

// respond to GET request at endpoint "/" with message
app.get("/", (req, res) => {
    res.send("This is working!");
});

// export app and server for testing
export default app;