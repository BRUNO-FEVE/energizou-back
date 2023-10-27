import "dotenv/config";
import "reflect-metadata";
import "mysql2";
import { DataSource } from "typeorm";

const PORT = process.env.DATABASE_PORT as number | undefined;

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DATABASE_HOST,
  port: PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});
