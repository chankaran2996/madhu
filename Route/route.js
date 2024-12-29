import express from "express";
import { getTask , testTask, createTask} from "../controler/controlerTask.js";

const router = express.Router();

router.get("/getTask",getTask);

router.post("/test",testTask);

router.post("/create",createTask)

export default router;