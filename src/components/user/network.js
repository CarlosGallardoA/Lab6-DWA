import { Router } from "express";
import * as controller from "./controller";
// import { index, login } from "./controller.js";

const userRouter = Router();

userRouter.route("/").get(controller.index);
userRouter.route("/store").post(controller.store);
userRouter.route("/update/:id").put(controller.upsert);
userRouter.route("/delete/:id").delete(controller.destroy);
// que variable exportamos aqui?
export default userRouter;
