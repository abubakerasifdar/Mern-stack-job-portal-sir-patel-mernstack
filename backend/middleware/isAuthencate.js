import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(200).json({
        message: "No token provided!",
        success: false,
      });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) {
      return res.status(200).json({
        message: "invalide token",
        success: false,
      });
    }
    req.id = decoded.userId;
    next();
  } catch (error) {
    console.log(error);
  }
};
export default isAuthenticated;
