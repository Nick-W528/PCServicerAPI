import express from "express";
import {
    createJob,
    getJob,
    getAllJobs,
    updateJob,
    deleteJob,
    getJobsByUser,    
} from "../controllers/jobs.js";
import { isLoggedIn } from "../middleware/auth.js";

const router = express.Router();

//CREATE
router.post("/", createJob)
//UPDATE
router.put("/:id", updateJob)
//DELETE
router.delete("/:id", deleteJob)
//GET
router.get("/find/:id", getJob )
//GET ALL 
router.get("/", getAllJobs)
//GET JOBS BY ID
router.get("/:id", isLoggedIn, getJobsByUser)

export default router