// importing supertest request object and response type
import request from "supertest";
import { Response } from "supertest;
import app from "../src/app";

describe("GET /", () => {
    it("hello", async () => {
        const response: Response = await request(app).get("/");
        
        // assert that response status is OK
        expect(response.status).toBe(200);
        expect(response.text).toBe("hello");
    });
});

describe("GET /api/v1/health", () => {
    it("should return server health status", async () => {
        // create GET request to health endpoint
        const response: Response = await request(app).get("/api/v1/health");

        // asser response status OK and health object to have specified properties
        expect(response.status).toBe(200);
        expect(response.body.status).toBe("OK");
        expect(response.body).toHaveProperty("uptime");
        expect(response.body).toHaveProperty("timestamp");
        expect(response.body).toHaveProperty("version");

    });
});

