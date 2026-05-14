// import the expression application and type defnition 
import express, { Express } from "express";


// initialize the express application
const app: Express = express();

// Interface for helath check response
interface HealthCheckResponse {
    status: string;
    uptime: number;
    timestamp: string;
    version: string:

// respond to GET request at endpoint "/" with message
app.get("/", (req, res) => {
    res.send("This is working!");
});

/** Health check endpoint */
app.get("/api/v1/health", (req, res) => {
    const healthData: HealthCheckResponse = {
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(), 
        version: "1.0.0",
    };

    res.json(healthData);
});

// export app and server for testing
export default app;


