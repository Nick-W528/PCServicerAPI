import express from "express";
import { currentUser, loginUser, registerUser } from "../controllers/user.js";
import { isLoggedIn } from "../middleware/auth.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/current", isLoggedIn, currentUser);

export default router