import express from 'express';
import { routerEntry } from './routers/index.js';
export const app = express();

// middleware
app.use(express.json())

// router
app.use("/api/v1", routerEntry)
// global error handeling



