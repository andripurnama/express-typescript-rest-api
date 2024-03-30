import express from 'express';
import { userRoutes } from './UserRoutes';

export const indexRouter = express.Router();
indexRouter.use(userRoutes);
