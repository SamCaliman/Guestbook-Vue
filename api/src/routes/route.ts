import { Router } from "express";
import { UserController } from "../controller/UserController";

export const routes = Router();
const userController = new UserController 

routes.get('/user', userController.index )


routes.post('/user', userController.Create)

export default routes
