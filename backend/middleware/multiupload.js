import multer from "multer";

const storage = multer.memoryStorage(); // Using memory storage

// Configure Multer for multiple fields
const multiUpload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit per file
    files: 3 // Maximum 3 files
  }
}).fields([
  { name: "coverPhoto", maxCount: 1 },
  { name: "profilePhoto", maxCount: 1 },
  { name: "additionalFile", maxCount: 1 }
]);

export default multiUpload;