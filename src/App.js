import express from "express";
import cors from "cors";
import { studentRouter } from "./routes/user.router.js";
import { userRouter } from "./routes/register.route.js";
import { authMiddleware } from "./middlewares/auth.middlewares.js";
const app = express();

app.use(express.json());
app.use(cors());

// Fix the route path
app.use("/api/data", authMiddleware, studentRouter);
app.use("/api/user", userRouter);

export { app };
