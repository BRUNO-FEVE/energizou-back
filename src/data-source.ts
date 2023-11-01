import "dotenv/config";
import "reflect-metadata";
import "mysql2";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import { MainSeeder } from "./seeds/MainSeeder";

const PORT = process.env.DATABASE_PORT as number | undefined;

const options: DataSourceOptions & SeederOptions = {
  type: "mysql",
  host: process.env.DATABASE_HOST,
  port: PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [`${__dirname}/**/entities/*.{ts,js}`],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
  seeds: [MainSeeder],
};

export const AppDataSource = new DataSource(options);
