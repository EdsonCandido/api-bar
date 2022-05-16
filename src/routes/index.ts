import { Router } from "express";
import { userRoutes } from "./user.routes";
const routes = Router();

routes.get("/", (req, res) => res.send('API BAR ONLY'));

routes.use('/users', userRoutes);

export default routes;