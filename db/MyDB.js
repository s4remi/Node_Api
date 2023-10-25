console.log("hi there!");
import e from "express";
import express from "express";

const PORT = 3000;

const app = express();

app.listen(PORT, () => {
  console.log(`the backend is runing on port ${PORT}`);
});
