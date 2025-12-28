import express from 'express';
import { routeEntry } from './routers/index.js';
import { notFound } from './shared/utils/notFound.js';
import { errorHandeler } from './shared/utils/errorHandeler.js';
export const app = express();
// middleware
app.use(express.json());
// health check route
app.get("/", (req, res) => res.send("Wellcome to parcel bd server"));
//api routes
app.use("/api/v1", routeEntry);
app.use(notFound);
app.use(errorHandeler);
// global error handeling
//# sourceMappingURL=app.js.map