import React from "react";
import axios from "axios";
import { Img } from "react-image";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Navbar = () => {
  const [isLogin, setisLogin] = useState(true);
  const navigate = useNavigate();
  const handlelogout = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8000/api/user/logout`,
        {},
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (res?.data?.success == true) {
        toast.success(res?.data?.message);

        navigate("/login");
        setisLogin(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="bg-white border-b-2 border-[#4640DE]  ">
        <div className=" text-black flex justify-between items-center  h-[78px] bg-white container mx-auto px-10">
          {/* this is for logo */}
          <div className="flex space-x-3">
          <Img
              src="/Logo.png"
              width={160}
              height={36}
              alt="Logo"
            />
          </div>
          {/* mobile view toggle */}
          <div className="md:hidden flex">images</div>

          {/* this is for our as */}
          <div className=" hidden md:flex ">
            <ul className="flex space-x-5 ">
              <li>
                <a
                  href="/client/findjobs"
                  className="hover:border-b-2 border-[#4640DE]"
                >
                  Find Job
                </a>
              </li>
              <li>
                <a
                  href="/client/browsecompanies"
                  className="hover:border-b-2 border-[#4640DE]"
                >
                  Browse Companies
                </a>
              </li>
              <li>
                <a
                  href="/client/contact-us"
                  className="hover:border-b-2 border-[#4640DE]"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/client/about"
                  className="hover:border-b-2 border-[#4640DE]"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
          {/* This is for auth */}
          <div className="hidden md:flex items-center  space-x-5">
            {isLogin ? (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="bg-white w-90 text-dark mt-7 me-4 border-0 shadow-gray-400">
                  <ul className="flex flex-col gap-2 ">
                    <li className="flex gap-2 justify-between items-center">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <a
                          href="/client/about"
                          className=" font-bold hover:border-b-1 border-[#4640DE]"
                        >
                          Abubakar Asif Dar
                        </a>
                        <p>I'm a full stack mern stack developer.</p>
                      </div>
                    </li>
                    <hr />

                    <hr className="lg:hidden" />
                    <li className="flex justify-around items-center">
                      <a
                        href="/client/about"
                        className="hover:border-b-2 border-[#4640DE]"
                      >
                        Settings
                      </a>
                      <a
                        onClick={handlelogout}
                        className="hover:border-b-2 border-[#4640DE]"
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </PopoverContent>
              </Popover>
            ) : (
              <>
                <h1 className="bg-[#4640DE] px-3 py-2  font-bold rounded-sm hover:text-[#4640DE] hover:bg-white text-white">
                  <a href="/account/login">Login </a>
                </h1>
                <h1 className="bg-[#4640DE] hover:text-[#4640DE] hover:bg-white  px-3 py-2  font-bold rounded-sm text-white">
                  <a href="/account/register">Register</a>
                </h1>
              </>
            )}
          </div>
        </div>
        {/* for mobile view */}

        <>
          <div className="md:hidden flex ">
            <ul className="flex flex-col  flex-row-5 space-y-5 p-10  ">
              <li>
                <a
                  href="/client/findjobs"
                  className="hover:border-b-2 border-[#4640DE]"
                >
                  Find Jobs
                </a>
              </li>
              <li>
                <a
                  href="/client/browsecompanies"
                  className="hover:border-b-2 border-[#4640DE]"
                >
                  Browse Companies
                </a>
              </li>
              <li>
                <a
                  href="/client/contact-us"
                  className="hover:border-b-2 border-[#4640DE]"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/client/about"
                  className="hover:border-b-2 border-[#4640DE]"
                >
                  About Us
                </a>
              </li>
              <li className="flex flex-row space-x-3">
                {isLogin == false ? (
                  <h1 className="bg-[#4640DE] px-3 py-2  font-bold rounded-sm hover:text-[#4640DE] hover:bg-white text-white">
                    <a href="/user/profile">Profile </a>
                  </h1>
                ) : (
                  <>
                    <h1 className="bg-[#4640DE] px-3 py-2  font-bold rounded-sm hover:text-[#4640DE] hover:bg-white text-white">
                      <a href="/account/login">Login </a>
                    </h1>
                    <h1 className="bg-[#4640DE] hover:text-[#4640DE] hover:bg-white  px-3 py-2  font-bold rounded-sm text-white">
                      <a href="/account/register">Register</a>
                    </h1>
                  </>
                )}
              </li>
            </ul>
          </div>
        </>
      </div>
    </>
  );
};

export default Navbar;
