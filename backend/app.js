dotenv.config();
// all imports
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import ConnectDB from "./utils/connectdb.js";
import userRoutes from "./routes/user.js"
import companyRoutes from "./routes/company.js"
import jobRoutes from "./routes/job.js"
import applicationRoutes from "./routes/application.js"


// all variables
const app = express();
const PORT = process.env.PORT || 8000;
const corsOptions = {
  origin: "http://job-portal-mern-stack-project.app.vercel/",
  methods: ["POST" , "GET"],
  credentials: true,
};
const DATABASE_URL = process.env.DATABASE_URL;
// all the useages
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
// server port listening
app.listen(PORT, () => {
  console.log(`app is listing at http://localhost:${PORT}`);
});
// mongodb connections
ConnectDB(DATABASE_URL);

// basic routes only for the testing of the webiste
// all routes is here 
app.use("/api/user",  userRoutes);
app.use("/api/company", companyRoutes);
app.use("/api/job", jobRoutes);
app.use("/api/application", applicationRoutes);
