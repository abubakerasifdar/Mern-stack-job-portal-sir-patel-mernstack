import DatauriParser from "datauri/parser.js";
import path from "path";

const getUrlData = (file) => {
  if (!file) return null; // Handle undefined file case
  const parser = new DatauriParser();
  const extName = path.extname(file.originalname).toString();
  return parser.format(extName, file.buffer);
};
export default getUrlData;
