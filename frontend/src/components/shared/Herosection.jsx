import React from 'react'
import { Img } from "react-image";
const Herosection = () => {
  return (
    <> {/* 1 hero section of pages */}
    <div className="bg-[#F8F8FD]">
      <div className=" flex container justify-between p-10 mx-auto   max-h-[720] ">
        {/* contend section  */}
        <div className="flex flex-col space-x-5  justify-center content-center items-center ">
          <div>
            <Img
              src="/images/FrontPages/Title.png"
              alt="discover "
              width={400}
              height={250.58}
            />

            <div>
              Great platform for the job seeker that searching for new career
              heights and passionate about startups.
            </div>
            <div className=" lg:absolute  flex flex-col lg:flex-row flex-wrap justify-start  items-start lg:justify-center lg:items-center  bg-white rounded-lg p-3 shadow-md lg:space-x-4 space-y-4 ">
              <div className="flex justify-between items-center lg:w-auto w-full   ">
                <Img
                  className="hidden lg:flex"
                  src="/images/Icons/Name=Search.png"
                  width={24}
                  height={24}
                  alt="search images"
                />
                <div>
                  <input
                    placeholder="Job title or keyword"
                    className="p-3 w-full border-b-2 border-black"
                    type="text"
                  />
                </div>
              </div>
              
              <div className="flex flex-row justify-center lg:w-auto w-auto text-white bg-blue-600 p-2 ">
                Search my job
              </div>
            </div>
            <div className="lg:mt-28">
              Popular: UI Designer, UX Researcher, Android, Admin
            </div>
          </div>
        </div>

        {/* Content Section */}
        {/* background images  */}
        <div className="lg:flex hidden  justify-end">
          <Img
            className=" lg:flex  justify-end
             items-end"
            src="/images/FrontPages/Pattern.png"
            alt="pattern "
            width={997}
            height={695}
          />
          <Img
            className=" hidden absolute  lg:flex justify-start
             items-end"
            src="/images/FrontPages/heropic.png"
            alt="heropic "
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
    {/* hero section of page ended */}</>
  )
}

export default Herosection