import react from "react";
import { Img } from 'react-image';


const Dashboardsidebar = () => {
 
  return (
    // <div className="bg-[#F8F8FD]  text-[#7C8493] h-screen p-4">
    <div className="bg-green-700 text-white h-full p-4">
      <div className="mb-6 bg-pink-900">
        <a className="font-bold text-3xl" href="/"> 
        Dar Solutions
        {/* <Img
              src="/images/Header/Logo Images/ogo.png"
              width={160}
              height={36}
              alt="Logo"
            /> */}
            </a>
      </div>
      <nav>
        <ul className="items-center bg-amber-700  flex flex-col" >

          <li className="mb-1   bg-red-800 hover:text-[#4640DE] font-bold hover:bg-[#E9EBFD] w-full  p-2">
            <a href="/user/profile" className="  w-full   transition duration-300 ease-in-out">Dashboard</a>
          </li>
          <li  className="mb-1   bg-red-800 hover:text-[#4640DE] font-bold hover:bg-[#E9EBFD] w-full  p-2">
            <a href="/user/profile" className="bg-red-800 hover:text-indigo-400 transition duration-300 ease-in-out">My Public Profile</a>
          </li>
          <li className="mb-1   bg-red-800 hover:text-[#4640DE] font-bold hover:bg-[#E9EBFD] w-full  p-2">
            <a href="/user/profile" className="  w-full   transition duration-300 ease-in-out">Message</a>
          </li>
          <li className="mb-1   bg-red-800 hover:text-[#4640DE] font-bold hover:bg-[#E9EBFD] w-full  p-2">
            <a href="/user/profile" className="  w-full   transition duration-300 ease-in-out">My Applications</a>
          </li>
          <li className="mb-1   bg-red-800 hover:text-[#4640DE] font-bold hover:bg-[#E9EBFD] w-full  p-2">
            <a href="/user/profile" className=" w-full   transition duration-300 ease-in-out">Find Jobs</a>
          </li>
          <li className="mb-1   bg-red-800 hover:text-[#4640DE] font-bold hover:bg-[#E9EBFD] w-full  p-2">
            <a href="/user/profile" className="  w-full   transition duration-300 ease-in-out">Browse Companies</a>
          </li>
          <li  className="mb-1   bg-red-800 hover:text-[#4640DE] font-bold hover:bg-[#E9EBFD] w-full  p-2">
            <a href="/user/change-password" className="bg-red-800 hover:text-indigo-400 transition duration-300 ease-in-out">Change Password</a>
          </li>
         <li  className="mb-1   bg-red-800 hover:text-[#4640DE] font-bold hover:bg-[#E9EBFD] w-full  p-2">
            <a href="/user/change-password" className="bg-red-800 hover:text-indigo-400 transition duration-300 ease-in-out">Setting</a>
          </li><li  className="mb-1   bg-red-800 hover:text-[#4640DE] font-bold hover:bg-[#E9EBFD] w-full  p-2">
            <a href="/user/change-password" className="bg-red-800 hover:text-indigo-400 transition duration-300 ease-in-out">Help Center</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboardsidebar;