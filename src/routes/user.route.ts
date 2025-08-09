import { Router } from "express";
import GetAllUsers, { RegisterUser } from "../controllers/auth.controller";


const userRouter = Router();

userRouter.get("/", GetAllUsers);
userRouter.post("/register", RegisterUser);

export default userRouter;