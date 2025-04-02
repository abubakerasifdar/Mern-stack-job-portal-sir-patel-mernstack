import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    phoneNumber: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    role: {
      type: String,
      enum: ["student", "recruiter"],
      required: true,
      trim: true,
    },
    profile: {
      bio: { type: String },
      skills: [{ type: String }],
      file: { type: String }, // url of string
      fileOriginalName: { type: String },
      company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
      profilePicture: { type: String, default: "" },
      location:{type:String},
      coverPicture:{type:String, default:""},
      profilePictureName: {type:String},
      coverPictureName: {type:String},
      fileName:{type:String}
    },

  },
  { timestamps: true }
);
const UserModel = mongoose.model("user", UserSchema);
export default UserModel;
