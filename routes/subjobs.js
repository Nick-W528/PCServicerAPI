import express from "express";
import {
    getSubJobsByJobId, updateSubJob
} from "../controllers/subjobs.js";

const router = express.Router();

//GET SUBJOBS BY JOB ID
router.get("/:id", getSubJobsByJobId)
//UPDATE SUBJOB
router.put("/:id", updateSubJob)

export default router