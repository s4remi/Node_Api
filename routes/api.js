import express from "express";

import { myDB } from "../db/MyDB.js";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("should return result in here");
  const prompts = myDB.getPrompts();
  res.json(prompts);
});

export default router;
