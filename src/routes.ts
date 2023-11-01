import { Router } from "express";
import userRouteController from "./controllers/User/index";
import { companyController } from "./controllers/Company";

const routes = Router();

routes.post("/user", (req, res) => {
  userRouteController.create(req, res);
});

routes.get("/user/:userId", (req, res) => {
  userRouteController.get(req, res);
});

routes.post("/company/:userId", (req, res) => {
  companyController.create(req, res);
});

export default routes;
