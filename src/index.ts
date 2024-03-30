//Importing project dependancies that we installed earlier
import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { indexRouter } from './routes';
import 'reflect-metadata';
import { DatabaseConnection } from './configurations/index';
import Logger from './libs/logger';
//App Varaibles
dotenv.config();

//intializing the express app
const app = express();

//using the dependancies
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/', indexRouter);

DatabaseConnection.initialize()
  .then(async () =>
    app.listen(process.env.PORT, async () => {
      Logger.info(`Server is up and running on port ${process.env.APP_PORT}`);
    })
  )
  .catch((error) => Logger.error(error));
