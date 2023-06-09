import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from "cors"
import path from 'path';

const stockRoutes = require('./routes/stockDataRoutes')

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;


  app.use(express.static(path.join(__dirname, "client/build")))
  // app.use(express.static(path.join(__dirname + "public")))


app.use(cors({
    origin: "*",
    credentials: true,
    methods: ['GET'],
    allowedHeaders: ['Content-Type']
}))

app.use('/', stockRoutes)

export const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
