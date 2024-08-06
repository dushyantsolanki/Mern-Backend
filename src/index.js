import { DBConnection } from "./db/index.js";
import { app } from "./App.js";
import dotenv from "dotenv";
dotenv.config();

DBConnection().then(() => {
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Development server start at ${process.env.PORT || 5000} `);
  });
});
