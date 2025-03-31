import React from "react";
import { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { Loader2 } from "lucide-react";
import {setLoading} from "../redux/slice/authslice.js"


const Login = () => {
  const [IsCompany, SetIsCompany] = useState(true);
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "recruiter",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {loading} = useSelector(store=> store.auth)
  

  const handleCompany = (e) => {
    e.preventDefault();
    SetIsCompany(true);
    setInput((prev) => ({ ...prev, role: "recruiter" }));
  };

  const handleJobSeeker = (e) => {
    e.preventDefault();
    SetIsCompany(false);
    setInput((prev) => ({ ...prev, role: "student" }));
  };

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const submithandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", input.email);
    formData.append("role", input.role);
    formData.append("password", input.password);

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`http://localhost:8000/api/user/login`, formData, {
        headers: { "Content-Type": "application/json"},
        withCredentials: true,
      });
      
      if(res?.data?.success == true){
       
        toast.success(res?.data?.message)
        navigate('/')
      }
       
      
      
    } catch (error) {
    toast.error(error?.response?.data?.message)
      
    } finally {
      dispatch(setLoading(false))
    }
  };

  return (
    <div className="flex bg-white items-center justify-center">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={handleJobSeeker}
            className={`px-2  border-1 border-gray my-3 py-2 rounded ${
              !IsCompany ? "bg-slate-400 text-white" : "text-indigo-500"
            }`}
          >
            Job Seeker
          </button>
          <button
            onClick={handleCompany}
            className={`px-2  border-1 border-gray my-3 py-2 rounded ${
              IsCompany ? "bg-slate-400 text-white" : "text-indigo-500"
            }`}
          >
            Company
          </button>
        </div>

        {IsCompany ? (
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
              <label className="block mb-2 text-gray-700">Enter Password</label>
              <Input
                type="password"
                value={input.password}
                onChange={handleInputChange}
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Enter Password"
                required
              />
            </div>
{!loading ? ( <><button 
              type="submit"
              className="w-full flex justify-evenly items-center gap-2 bg-indigo-500 text-white py-2 rounded"
            >
              Login as Company
            </button>  </>   ) : (<><button 
              type="submit"
              className="w-full flex justify-evenly items-center gap-2 bg-indigo-500 text-white py-2 rounded"
            >
              Processing...<Loader2 className="mr-2 w-4 h-4 animate-spin" />
            </button>  </> )}
          
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
              <label className="block mb-2 text-gray-700">Enter Password</label>
              <Input
                type="password"
                value={input.password}
                onChange={handleInputChange}
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Enter Password"
                required
              />
            </div>
            {!loading ? ( <><button 
              type="submit"
              className="w-full flex justify-evenly items-center gap-2 bg-indigo-500 text-white py-2 rounded"
            >
              Login as Student
            </button>  </>   ) : (<><button 
              type="submit"
              className="w-full flex justify-evenly items-center gap-2 bg-indigo-500 text-white py-2 rounded"
            >
              Processing...<Loader2 className="mr-2 w-4 h-4 animate-spin" />
            </button>  </> )}
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

export default Login;
