import express from "express";

import apiRouter from "./routes/api.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`the backend is running on port ${PORT}`);
});
