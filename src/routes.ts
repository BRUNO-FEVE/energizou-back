import { Router } from "express";
import userRouteController from "./controllers/User/index";

const routes = Router();

routes.post("/user", (req, res) => {
  userRouteController.create(req, res);
});

export default routes;
