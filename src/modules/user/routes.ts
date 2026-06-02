import { Router } from "express";
import { UserController } from "./user.controller.js";

const userRota = Router();
const userController = new UserController();

userRota.post('/create', userController.create);
userRota.post('/login', userController.login);
userRota.get('/', userController.get);

export { userRota };