import dotenv from "dotenv";
dotenv.config();
import UserModel from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class UserController {
  // controller for registering the user
  static register = async (req, res) => {
    try {
      console.log("\n=== REGISTER REQUEST STARTED ===");
      console.log("Request Headers:", req.headers);
      console.log("Request Body:", req.body);
      console.log("Request File:", req.file);

      const { fullName, email, phoneNumber, password, role } = req.body;
      const file = req.file;
      
      console.log("\nExtracted Fields:");
      console.log("fullName:", fullName);
      console.log("email:", email);
      console.log("phoneNumber:", phoneNumber);
      console.log("role:", role);
      console.log("file:", file);

      // Validation checks
      if (!fullName || !email || !phoneNumber || !password || !role || !file) {
        console.log("\nValidation Failed - Missing Fields");
        return res.status(200).json({
          message: "Some fields are missing",
          success: false,
        });
      }

      console.log("\nChecking if user exists...");
      const user = await UserModel.findOne({ email });
      if (user) {
        console.log("User already exists with email:", email);
        return res.status(200).json({
          message: "User already exists",
          success: false,
        });
      }

      console.log("\nHashing password...");
      const hashpassword = await bcrypt.hash(password, 10);
      console.log("Password hashed successfully");

      console.log("\nCreating new user...");
      const newUser = await UserModel.create({
        fullName,
        email,
        phoneNumber,
        password: hashpassword,
        role,
        profilePicture: file,
      });
      console.log("User created successfully:", newUser);

      return res.status(200).json({
        message: "User registered successfully",
        success: true,
      });

    } catch (error) {
      console.log("\n=== REGISTER ERROR ===");
      console.error("Error:", error);
      res.status(400).json({
        message: "Registration failed. Please try again later.",
        success: false,
      });
    }
  };

  // controller for login the user
  static login = async (req, res) => {
    try {
      console.log("\n=== LOGIN REQUEST STARTED ===");
      console.log("Request Body:", req.body);

      const { email, password, role } = req.body;
      console.log("\nExtracted Fields:");
      console.log("email:", email);
      console.log("role:", role);

      if (!email || !password || !role) {
        console.log("\nValidation Failed - Missing Fields");
        return res.status(200).json({
          message: "Required fields are missing",
          success: false,
        });
      }

      console.log("\nFinding user in database...");
      const user = await UserModel.findOne({ email });
      if (!user) {
        console.log("No user found with email:", email);
        return res.status(400).json({
          message: "Invalid email or password",
          success: false,
        });
      }

      console.log("\nComparing passwords...");
      const passwordmatch = await bcrypt.compare(password, user.password);
      if (!passwordmatch) {
        console.log("Password does not match");
        return res.status(400).json({
          message: "Invalid email or password",
          success: false,
        });
      }

      if (role !== user.role) {
        console.log("Role mismatch. User role:", user.role, "Requested role:", role);
        return res.status(400).json({
          message: "User does not exist with this role",
          success: false,
        });
      }

      const userData = {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role,
        profile: user.profile,
      };

      console.log("\nGenerating JWT token...");
      const tokenData = { userId: user._id };
      const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
        expiresIn: "1d",
      });
      console.log("Token generated successfully");

      console.log("\nSetting cookie and sending response...");
      return res
        .status(200)
        .cookie("token", token, {
          maxAge: 1 * 24 * 60 * 60 * 1000,
          httpOnly: true,
          sameSite: "Strict",
        })
        .json({
          message: `Welcome back ${user.fullName}`,
          user: userData,
          success: true,
        });

    } catch (error) {
      console.log("\n=== LOGIN ERROR ===");
      console.error("Error:", error);
      return res.status(500).json({
        message: "Login failed. Please try again later.",
        success: false,
      });
    }
  };

  // controller for logout the user
  static logout = async (req, res) => {
    try {
      console.log("\n=== LOGOUT REQUEST STARTED ===");
      console.log("Request Cookies:", req.cookies);

      console.log("\nClearing token cookie...");
      return res.status(200).cookie("token", "", { maxAge: 0 }).json({
        message: "User logged out successfully",
        success: true,
      });

    } catch (error) {
      console.log("\n=== LOGOUT ERROR ===");
      console.error("Error:", error);
      return res.status(500).json({
        message: "Logout failed. Please try again.",
        success: false,
      });
    }
  };

  // update profile controller of the user
  static updateProfile = async (req, res) => {
    try {
      console.log("\n=== UPDATE PROFILE REQUEST STARTED ===");
      console.log("Request Body:", req.body);
      console.log("Request File:", req.file);
      console.log("Authenticated User ID:", req.id);

      const { fullName, email, phoneNumber, bio, skills } = req.body;
      const file = req.file;
      
      console.log("\nExtracted Fields:");
      console.log("fullName:", fullName);
      console.log("email:", email);
      console.log("phoneNumber:", phoneNumber);
      console.log("bio:", bio);
      console.log("skills:", skills);
      console.log("file:", file);

      let skillsArray;
      if (skills) {
        skillsArray = skills.split(",");
        console.log("Skills array:", skillsArray);
      }

      console.log("\nFinding user in database...");
      const user = await UserModel.findById(req.id);
      if (!user) {
        console.log("User not found with ID:", req.id);
        return res.status(404).json({
          message: "User not found",
          success: false,
        });
      }

      console.log("\nUpdating user fields...");
      if (fullName) user.fullName = fullName;
      if (email) user.email = email;
      if (phoneNumber) user.phoneNumber = phoneNumber;
      if (bio) user.profile.bio = bio;
      if (skills) user.profile.skills = skillsArray;
      // Note: File handling for profile picture would go here

      console.log("\nSaving updated user...");
      await user.save();
      console.log("User updated successfully");

      const userData = {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role,
        profile: user.profile,
      };

      return res.status(200).json({
        message: "Profile updated successfully",
        user: userData,
        success: true,
      });

    } catch (error) {
      console.log("\n=== UPDATE PROFILE ERROR ===");
      console.error("Error:", error);
      return res.status(500).json({
        message: "Profile update failed. Please try again later.",
        success: false,
      });
    }
  };
}

export default UserController;