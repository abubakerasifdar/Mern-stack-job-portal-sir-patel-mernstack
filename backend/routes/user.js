import express from "express";
const router = express.Router();
import UserController from "../controllers/user.js"
import CompanyController from "../controllers/company.js"
import isAuthenticated from "../middleware/isAuthencate.js"
import SingleUpload from '../middleware/multer.js';
// user routes 
router.post("/register" , SingleUpload, UserController.register);
router.post("/login" , UserController.login);
router.post("/updateprofile", isAuthenticated, UserController.updateProfile);
router.post("/logout" , UserController.logout);
export default router; 