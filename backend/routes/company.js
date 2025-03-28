import express from "express";
const router = express.Router();
import CompanyController from "../controllers/company.js"
import isAuthenticated from "../middleware/isAuthencate.js"

// company routes
router.post("/create" ,isAuthenticated, CompanyController.createCompany);
router.get("/get" ,isAuthenticated, CompanyController.getAllCompany);
router.get("/get/:id", isAuthenticated, CompanyController.getSingleCompany);
router.post("/update/:id" ,isAuthenticated, CompanyController.updateCompany);
export default router; 