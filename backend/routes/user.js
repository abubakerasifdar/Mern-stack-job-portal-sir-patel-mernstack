import express from "express";
const router = express.Router();
import UserController from "../controllers/user.js";
import CompanyController from "../controllers/company.js";
import isAuthenticated from "../middleware/isAuthencate.js";
import SingleUpload from "../middleware/multer.js";
// user routes
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.post(
  "/updateprofile",
  SingleUpload([
    { name: "file", maxCount: 1 },
    { name: "coverPicture", maxCount: 1 },
    { name: "profilePicture", maxCount: 1 },
  ]),
  isAuthenticated,
  UserController.updateProfile
);
router.post("/logout", UserController.logout);
export default router;
