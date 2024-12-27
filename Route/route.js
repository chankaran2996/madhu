import express from "express";
import { getTask } from "../controler/controlerTask.js";

const router = express.Router();

router.get("/getTask",getTask);


export default router;