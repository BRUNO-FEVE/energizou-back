import { Router } from "express";
import userRouteController from "./controllers/User/index";

const routes = Router();

routes.post("/user", (req, res) => {
  userRouteController.create(req, res);
});

routes.get("/user/:userId", (req, res) => {
  userRouteController.get(req, res);
});

routes.post("/user/:userId/create", (req, res) => {});

export default routes;
