import express from "express";
const router = express.Router();
import jobController from "../controllers/job.js"
import isAuthenticated from "../middleware/isAuthencate.js"

// admin job routes
router.post("/post" , isAuthenticated, jobController.post);
router.get("/getuser"  , isAuthenticated, jobController.getalluserjobs);
router.get("/getuser/:id" , isAuthenticated, jobController.getsingleuserjobs);
router.post("/update/:id" , isAuthenticated, jobController.update);


// application job routes 
router.get("/get", isAuthenticated, jobController.getAll);
router.get("/get/:id", isAuthenticated, jobController.single);
export default router; 