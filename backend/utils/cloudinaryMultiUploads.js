import dotenv from "dotenv";
dotenv.config();
import cloudinary from './cloudinary.js';

const cloudinaryuploadFilesParallel = async (filesToUpload) => {
    // Create array of upload promises
    try{
        const uploadPromises = filesToUpload.map(file => 
            cloudinary.uploader.upload(file.content, {
              resource_type: "auto",
              folder: "user_uploads"
            })
          );
          
          // Wait for all uploads to complete
          return await Promise.all(uploadPromises);
    }
    catch (error) {
        console.error("Batch upload failed:", error);
        throw error;
      }
  };
  export default cloudinaryuploadFilesParallel;