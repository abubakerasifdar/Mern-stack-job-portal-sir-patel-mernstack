"use client";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { Loader2 } from "lucide-react";
import { setLoading } from "../redux/slice/authslice.js";

const Register = () => {
  const [isRegister, setIsRegister] = useState(true);
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "",
  });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleCompany = (e) => {
    e.preventDefault();
    setIsRegister(true);
    setInput((prev) => ({ ...prev, role: "recruiter" }));
  };

  const handleJobSeeker = (e) => {
    e.preventDefault();
    setIsRegister(false);
    setInput((prev) => ({ ...prev, role: "customer" }));
  };
  const submithandler = async (e) => {
    e.preventDefault();

    // 1. Create FormData and append all fields
    const formData = new FormData();
    formData.append("fullName", input.fullName);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("role", input.role);
    formData.append("password", input.password);

    // 2. Debug: Log FormData contents
    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }
    console.log(input);
    try {
      dispatch(setLoading(true));

      // 3. Send request (let Axios set Content-Type automatically)
      const res = await axios.post(
        "http://localhost:8000/api/user/register",
        input,
        {
          withCredentials: true,
          // Don't set Content-Type header manually when using FormData
          // Axios will automatically set it to multipart/form-data
        }
      );

      console.log(res);
      // 4. Handle success
      if (res?.data?.success == true) {
        toast.success(res?.data?.message);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      // 5. Proper error handling
      toast.error(error?.response?.data?.massage);
      // Check for different error response structures
      const errorMessage =
        error.response?.data?.error ||
        error.response?.data?.message ||
        error.message ||
        "Registration failed";

      toast.error(errorMessage);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <div className="flex bg-white items-center justify-center">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={handleJobSeeker}
            className={`px-2  border-1 border-gray my-3 py-2 rounded ${
              !isRegister ? "bg-slate-400 text-white" : "text-indigo-500"
            }`}
          >
            Job Seeker
          </button>
          <button
            onClick={handleCompany}
            className={`px-2  border-1 border-gray my-3 py-2 rounded ${
              isRegister ? "bg-slate-400 text-white" : "text-indigo-500"
            }`}
          >
            Company
          </button>
        </div>

        {isRegister ? (
          <form onSubmit={submithandler} className="p-2 w-[50%] bg-white">
            {/* Company Registration Form */}
            <h2 className="text-3xl font-bold flex text-center justify-center items-center">
              Get more opportunities
            </h2>
            <button
              type="button"
              className="w-full font-bold text-indigo-500 border border-1 border-gray my-3 py-2 rounded"
            >
              Sign Up with Google
            </button>
            <span className="mt-4 text-sm text-gray-600 flex justify-center items-center my-3">
              or sign up with email
            </span>

            <div className="mb-4">
              <label className="block mb-2 text-gray-700">User Name</label>
              <Input
                type="text"
                value={input.fullName}
                onChange={handleInputChange}
                id="name"
                name="fullName"
                className="w-full border border-gray-300 rounded p-2"
                placeholder="First Name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Email</label>
              <Input
                type="email"
                value={input.email}
                onChange={handleInputChange}
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Enter Your Email"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-gray-700">
                Create Password
              </label>
              <Input
                type="password"
                value={input.password}
                onChange={handleInputChange}
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Create Password"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Phone Number</label>
              <Input
                type="string"
                value={input.phoneNumber}
                onChange={handleInputChange}
                id="phoneNumber"
                name="phoneNumber"
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Phone Number"
                required
              />
            </div>

            {loading ? (
              <button
                type="submit"
                className=" flex gap-2 items-center justify-evenly w-full bg-indigo-500 text-white py-2 rounded"
              >
                Processing...
                <Loader2 className="mr-2 w-4 h-4 animate-spin" />
              </button>
            ) : (
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-2 rounded"
              >
                Register
              </button>
            )}
          </form>
        ) : (
          <form onSubmit={submithandler} className="p-2 w-[50%] bg-white">
            {/* Company Registration Form */}
            <h2 className="text-3xl font-bold flex text-center justify-center items-center">
              Get more opportunities
            </h2>
            <button
              type="button"
              className="w-full font-bold text-indigo-500 border border-1 border-gray my-3 py-2 rounded"
            >
              Sign Up with Google
            </button>
            <span className="mt-4 text-sm text-gray-600 flex justify-center items-center my-3">
              or sign up with email
            </span>

            <div className="mb-4">
              <label className="block mb-2 text-gray-700">User Name</label>
              <Input
                type="text"
                value={input.fullName}
                onChange={handleInputChange}
                id="name"
                name="fullName"
                className="w-full border border-gray-300 rounded p-2"
                placeholder="First Name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Email</label>
              <Input
                type="email"
                value={input.email}
                onChange={handleInputChange}
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Enter Your Email"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-gray-700">
                Create Password
              </label>
              <Input
                type="password"
                value={input.password}
                onChange={handleInputChange}
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Create Password"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Phone Number</label>
              <Input
                type="string"
                value={input.phoneNumber}
                onChange={handleInputChange}
                id="phoneNumber"
                name="phoneNumber"
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Phone Number"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 rounded"
            >
              Register as student
            </button>
          </form>
        )}

        <p className="mt-4 text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/auth/signup" className="text-indigo-500">
            Sign up
          </a>
        </p>
        <p className="mt-4 text-sm text-gray-600">
          By clicking 'Continue', you acknowledge that you have read and accept
          the{" "}
          <a href="/terms" className="text-indigo-500">
            Terms of Service and Privacy Policy.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
