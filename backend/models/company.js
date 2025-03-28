import mongoose from "mongoose";
const CompanySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    website: { type: String },
    location: { type: String },
    logo: { type: String }, // url to company logo
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    description: { type: String },
  },
  { timestamps: true }
);
const CompanyModel = mongoose.model("company", CompanySchema);
export default CompanyModel;
