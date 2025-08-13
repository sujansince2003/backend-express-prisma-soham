import { Router } from "express";
import GetAllUsers, { RegisterUser, LoginUser } from "../controllers/auth.controller";


const userRouter = Router();

userRouter.get("/", GetAllUsers);
userRouter.post("/register", RegisterUser);
userRouter.post("/login", LoginUser);

export default userRouter;