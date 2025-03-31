import multer from "multer";
const SingleUpload = (fieldConfig) => {
    return multer({
      storage: multer.memoryStorage(),
    }).fields(fieldConfig || [
      { name: "file", maxCount: 1 } // Default fallback
    ]);
  };
  
export default SingleUpload;  
  // Usage Examples:
  // 1. Single file: flexibleUpload()
  // 2. Multiple fields: flexibleUpload([{ name: "cover", maxCount: 1 }, { name: "profile", maxCount: 1 }])