import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

// import { env } from '../../src/env';
dotenv.config({ path: '../../.env.test' });

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: process.env.DB_NAME || ':memory:',
  synchronize: true,
  logging: false,
  dropSchema: true,
  entities: [process.env.TYPEORM_ENTITIES || __dirname + './../../src/models/*.entity{.ts,.js}'],
  migrations: [process.env.TYPEORM_MIGRATIONS || __dirname + './../../src/configurations/database/migrations/**.ts']
});
