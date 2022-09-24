import express from "express";
import catRoutes from "./routes/cat.routes";
import path from "path";

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Node Postgres API",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    apis: [`${path.join(__dirname, "./routes/*.ts")}`],
}
const app = express();

app.use(express.json()); //middleware que tranforma el req.body a un json
app.use("/api", catRoutes);
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))

export default app;
