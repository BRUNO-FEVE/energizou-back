import express from "express";
import { AppDataSource } from "./data-source";
import routes from "./routes";
import cors from "cors";

AppDataSource.initialize().then(() => {
  const app = express();

  const allowedOrigin = [`http://localhost:${process.env.FRONT_PORT}`];

  const options: cors.CorsOptions = {
    origin: allowedOrigin,
  };

  app.use(cors(options));

  app.use(express.json());
  app.use(routes);

  return app.listen(process.env.API_PORT);
});
