import React from "react";
import { Img } from "react-image";
import Navbar from "@/components/shared/Navbar";
import Footer from "./../shared/Footer";
const skills = ["Frontend", "Backend", "Full-Stack", "DeveOps", "Designing"];
const UserPublicProfile = () => {
  const isResume = true;
  return (
    
    <div>
      <Navbar />
      <div className="bg-white">
        {/* Header section */}

        {/* Profile content */}
        <div className="flex p-5 gap-4">
          {/* profile left section */}
          <div className="flex bg-green-600 basis-2/3 flex-col gap-4 text-center items-center justify-center">
            {/* Profile Sections */}
            <div className="flex-1 flex-col w-full">
              {/* profile photo and images section */}
              <div className="relative  w-full bg-black h-[140px]">
                <div className="absolute top-16 border-8 border-white left-10 bg-red-600 w-40 h-40 rounded-full"></div>
              </div>
              <div className="flex">
                <div className="basis-2/5 bg-blue-600 justify-center items-center text-center"></div>
                <div className="relative basis-4/5 p-4 text-start items-start justify-start flex-col flex gap-2 bg-yellow-700">
                  {/* Static profile display */}
                  <div>
                    <div>John Doe</div>
                    <div>Software Engineer at Tech Company</div>
                    <div>San Francisco, CA</div>
                    <div>Available for work</div>
                  </div>
                </div>
              </div>
            </div>
            {/* about me  */}
            <div className="flex-1 text-start flex-col w-full">
              {/* Static profile display */}
              <div className="bg-amber-500">
                <h1 className="font-bold">My bio</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  voluptatem nostrum obcaecati quod consequatur, reprehenderit
                  odit suscipit corporis facere. Architecto, ab sint quidem
                  quibusdam vero suscipit fuga ipsam facere nobis.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Officiis illo asperiores incidunt quasi consequuntur ratione
                  laborum provident, corporis praesentium possimus modi dolore
                  placeat molestias iure illum laboriosam facere. Unde, maxime!
                </p>
              </div>
            </div>
            {/* skills  */}
            <div className="flex-1 text-start flex-col w-full">
              {/* Static profile display */}
              <div className="bg-amber-200">
                <h1 className="font-bold">My Skills</h1>
                <ul className="flex flex-cols-2 gap-4">
                  {skills.length >= 0 ? (skills.map((items, index) => (
                    <li key={index} className="bg-cyan-400">
                      {items}
                    </li>
                  ))): (<span> skills Not found</span>)}
                </ul>
              </div>
            </div>
            {/* resume  */}
            <div className="flex-1 text-start flex-col w-full">
              {/* Static profile display */}
              <div className="bg-pink-300">
                <h1 className="font-bold">Resume</h1>
                {isResume == true ? (<a>Please Check your resume</a>):(<div>Please add Resume</div>)}
              </div>
            </div>
          </div>

          {/* profile right section */}
          <div className=" basis-1/3 flex gap-4 flex-col bg-purple-500  justify-start items-center">
            <div className="bg-indigo-600 w-full flex  flex-col  gap-4">
              <h1 className="font-bold">Additional Information</h1>
              <div className="bg-amber-300 items-center justify-center flex flex-between gap-4">
                icon
                <div className="flex flex-col ">
                  <h3>Email</h3>
                  <p>abubakerasifdar100@gmail.com</p>
                </div>
              </div>
              <div className="bg-amber-300 items-center justify-center flex flex-between gap-4">
                icon
                <div className="flex flex-col ">
                  <h3>Email</h3>
                  <p>abubakerasifdar100@gmail.com</p>
                </div>
              </div>
              <div className="bg-amber-300 items-center justify-center flex flex-between gap-4">
                icon
                <div className="flex flex-col ">
                  <h3>Email</h3>
                  <p>abubakerasifdar100@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="bg-amber-600 w-full flex flex-col gap-4">
              <h1 className="font-bold">Social Informations</h1>
              <div className="bg-red-500 items-center justify-center flex flex-between gap-4">
                icon
                <div className="flex flex-col ">
                  <h3>Email</h3>
                  <p>abubakerasifdar100@gmail.com</p>
                </div>
              </div>
              <div className="bg-red-500 items-center justify-center flex flex-between gap-4">
                icon
                <div className="flex flex-col ">
                  <h3>Email</h3>
                  <p>abubakerasifdar100@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserPublicProfile;
