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
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET'],
    allowedHeaders: ['Content-Type']
}))

app.use('/', stockRoutes)

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname,  "public", "index.html"));
});

export const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
