import * as dotenv from 'dotenv';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
dotenv.config();
const port = parseInt(process.env.DB_PORT || '3306');
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: []
});
