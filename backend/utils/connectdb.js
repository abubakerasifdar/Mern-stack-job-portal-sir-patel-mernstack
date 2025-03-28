import mongoose from "mongoose";
const ConnectDB = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: "SirPatelJobPortal",
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("Database Connect Successfully");
    } catch (error) {
        console.log(error);
        
    }
}
export default ConnectDB;