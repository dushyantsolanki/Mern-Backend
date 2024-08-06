import { Router } from "express";
import { registerData } from "../controllers/register.controller.js";
import { loginData } from "../controllers/login.controller.js";

const router = Router();

// Define a route.

router.route("/register").post(registerData);
router.route("/login").post(loginData);

// create a studentRouter for export.
const userRouter = router;

export { userRouter };
