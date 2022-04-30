import { Router } from "express";
import * as Controller from "./controller";

const authRouter = Router();

authRouter.route("/login").post(Controller.signIn);
authRouter.route("/register").post(Controller.signUp);

export default authRouter;