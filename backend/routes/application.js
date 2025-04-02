
import express from "express";
const router = express.Router();
import Application from "../controllers/application.js"
import isAuthenticated from "../middleware/isAuthencate.js"

// company routes
router.get("/apply/:id" ,isAuthenticated, Application.applyJob);
router.get("/get" ,isAuthenticated, Application.getalluserapplication);
router.get("/get/:id", isAuthenticated, Application.getapplicants);
router.post("/update/:id" ,isAuthenticated, Application.updateStatus);
export default router; 