import { Router } from "express";
import userRouteController from "./controllers/User/index";
import { companyController } from "./controllers/Company";
import { UserController } from "./controllers/User/user-controller";

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

routes.get("/company/:companyCnpj", (req, res) => {
  companyController.get(req, res);
});

routes.get("/companies/:userId", (req, res) => {
  companyController.getAllByUserId(req, res);
});

routes.delete("/user/:userId/company/:companyCnpj", (req, res) => {
  companyController.delete(req, res);
});

routes.put("/user/:userId/company/:currentCnpj", (req, res) => {
  companyController.update(req, res);
});

routes.post("/user/:username/validate/:password", (req, res) => {
  userRouteController.validate(req, res);
});

export default routes;
