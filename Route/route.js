import express from "express";
import { getTask } from "../controler/controlerTask.js";

const router = express.Router();

router.get("/getTask",getTask);

router.post();


export default router;