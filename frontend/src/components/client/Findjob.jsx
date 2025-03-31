"use client"; // Ensure this is a client component if using App Router
import React from "react";
import { Img } from "react-image";
import Navbar from "@/components/shared/Navbar";
import { useState } from "react";
import Hero2 from "./../shared/Hero2";

export default function Findjob() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDown, setIsDropDown] = useState();
  const jobs = ["1", "1"];
  const filterdata = [
    {
      filterType: "Location",
      array: ["Lahore", "Islamabad", "Fsd", "Karachi", "Kamoke", "Gujranwala"],
    },
    {
      filterType: "Location",
      array: ["Lahore", "Islamabad", "Fsd", "Karachi", "Kamoke", "Gujranwala"],
    },
    {
      filterType: "Location",
      array: ["Lahore", "Islamabad", "Fsd", "Karachi", "Kamoke", "Gujranwala"],
    },
    {
      filterType: "Location",
      array: ["Lahore", "Islamabad", "Fsd", "Karachi", "Kamoke", "Gujranwala"],
    },
    
    {
      filterType: "Industry",
      array: ["gaming", "design", "development", "automobiles"],
    },
    {
      filterType: "Salary",
      array: ["0-40k", "40-80k", "80-150k"],
    },
  ];
  const searchresult = [1, 2, 3];
  const handledropdownOpener = (e) => {
    e.preventDefault();
    setIsDropDown(true);
  };
  const handleDropDownCloser = (e) => {
    e.preventDefault();
    setIsDropDown(false);
  };

  return (
    <div>
      <Navbar />
      <Hero2 />
      {/*  mobile view filter section ended  */}
      {/* 1 hero section ended  */}
      {/* responsiveness left for filter  */}
      {/* 2 section filter and jobs search start   */}
      <section className=" container mx-auto lg:p-10 p-4">
        <div className="flex gap-4 justify-between items-start">
          {/* filter section  */}
          <div className="hidden lg:flex lg:flex-col lg:basis-1/4 gap-4">
          {/* converting the filter to dynamic filters  */}
          {filterdata.map((items, index)=><div key={index} className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <span className="text-[#25324B] font-bold  ">
                  {items?.filterType}
                </span>
                {isDropDown == true ? (
                  <div onClick={handleDropDownCloser}>Close</div>
                ) : (
                  <svg
                    onClick={handledropdownOpener}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_53253)">
                      <path
                        d="M6 15L12 9L18 15"
                        stroke="#25324B"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_53253">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                )}
              </div>
              {isDropDown && (
                <div>
                  <ul className="flex flex-col text-sm gap-4">
                    {items.array.map((item, index)=>{ return <li  className="flex gap-2 items-center">
                      <input type="checkbox" className="" name="" id="" />
                      <span className="text-[#515B6F]">{item} (3)</span>
                    </li>})}
                    
                    <li className="flex gap-2 items-center">
                      <input type="checkbox" className="" name="" id="" />
                      <span className="text-[#515B6F]">Part-Time (5)</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <input type="checkbox" className="" name="" id="" />
                      <span className="text-[#515B6F]">Remote (2)</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <input type="checkbox" className="" name="" id="" />
                      <span className="text-[#515B6F]">Internship (24)</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <input type="checkbox" className="" name="" id="" />
                      <span className="text-[#515B6F]">Contract (3)</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>)}
            
            {/* 1 filter options  */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <span className="text-[#25324B] font-bold  ">
                  Type of Employment
                </span>
                {isDropDown == true ? (
                  <div onClick={handleDropDownCloser}>Close</div>
                ) : (
                  <svg
                    onClick={handledropdownOpener}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_53253)">
                      <path
                        d="M6 15L12 9L18 15"
                        stroke="#25324B"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_53253">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                )}
              </div>
              {isDropDown && (
                <div>
                  <ul className="flex flex-col text-sm gap-4">
                    <li className="flex gap-2 items-center">
                      <input type="checkbox" className="" name="" id="" />
                      <span className="text-[#515B6F]">Full Time (3)</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <input type="checkbox" className="" name="" id="" />
                      <span className="text-[#515B6F]">Part-Time (5)</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <input type="checkbox" className="" name="" id="" />
                      <span className="text-[#515B6F]">Remote (2)</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <input type="checkbox" className="" name="" id="" />
                      <span className="text-[#515B6F]">Internship (24)</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <input type="checkbox" className="" name="" id="" />
                      <span className="text-[#515B6F]">Contract (3)</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {/* 1 filter options  */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <span className="text-[#25324B] font-bold  ">Categories</span>
                {isDropDown == true ? (
                  <div onClick={handleDropDownCloser}>Close</div>
                ) : (
                  <svg
                    onClick={handledropdownOpener}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_53253)">
                      <path
                        d="M6 15L12 9L18 15"
                        stroke="#25324B"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_53253">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                )}
              </div>
              {isDropDown && (
                <div>
                  <ul className="flex flex-col text-sm gap-4">
                    <li className="flex gap-2 items-center">
                      <input type="checkbox" className="" name="" id="" />
                      <span className="text-[#515B6F]">Design (24)</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <input type="checkbox" className="" name="" id="" />
                      <span className="text-[#515B6F]">Sales (3)</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <input type="checkbox" className="" name="" id="" />
                      <span className="text-[#515B6F]">Marketing (3)</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <input type="checkbox" className="" name="" id="" />
                      <span className="text-[#515B6F]">Business (3)</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <input type="checkbox" className="" name="" id="" />
                      <span className="text-[#515B6F]">Human Resource (6)</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <input type="checkbox" className="" name="" id="" />
                      <span className="text-[#515B6F]">Finance (4)</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <input type="checkbox" className="" name="" id="" />
                      <span className="text-[#515B6F]">Engineering (4)</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <input type="checkbox" className="" name="" id="" />
                      <span className="text-[#515B6F]">Technology (5)</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {/* 1 filter options  */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <span className="text-[#25324B] font-bold  ">Job Level</span>
                {isDropDown == true ? (
                  <div onClick={handleDropDownCloser}>Close</div>
                ) : (
                  <svg
                    onClick={handledropdownOpener}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_53253)">
                      <path
                        d="M6 15L12 9L18 15"
                        stroke="#25324B"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_53253">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                )}
              </div>
              {isDropDown && (
                <div>
                  <ul className="flex flex-col text-sm gap-4">
                    <li className="flex gap-2 items-center">
                      <input type="checkbox" className="" name="" id="" />
                      <span className="text-[#515B6F]">Entry Level (57)</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <input type="checkbox" className="" name="" id="" />
                      <span className="text-[#515B6F]">Mid Level (3)</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <input type="checkbox" className="" name="" id="" />
                      <span className="text-[#515B6F]">Senior Level (5)</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <input type="checkbox" className="" name="" id="" />
                      <span className="text-[#515B6F]">Director (12)</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <input type="checkbox" className="" name="" id="" />
                      <span className="text-[#515B6F]">Human Resource (6)</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <input type="checkbox" className="" name="" id="" />
                      <span className="text-[#515B6F]">VP or Above (8)</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {/* 1 filter options  */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <span className="text-[#25324B] font-bold  ">Salary Range</span>
                {isDropDown == true ? (
                  <div onClick={handleDropDownCloser}>Close</div>
                ) : (
                  <svg
                    onClick={handledropdownOpener}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_53253)">
                      <path
                        d="M6 15L12 9L18 15"
                        stroke="#25324B"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_53253">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                )}
              </div>
              {isDropDown && (
                <div>
                  <ul className="flex flex-col text-sm gap-4">
                    <li className="flex gap-2 items-center">
                      <input type="checkbox" className="" name="" id="" />
                      <span className="text-[#515B6F]">$700 - $1000 (4)</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <input type="checkbox" className="" name="" id="" />
                      <span className="text-[#515B6F]">
                        {" "}
                        <span className="text-[#515B6F]">$700 - $1000 (4)</span>
                      </span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <input type="checkbox" className="" name="" id="" />
                      <span className="text-[#515B6F]">$1500 - $2000 (10)</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <input type="checkbox" className="" name="" id="" />
                      <span className="text-[#515B6F]">$3000 or above (4)</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          {/* job listing section  */}
          <div className="w-full lg:basis-3/4 flex flex-col gap-4 ">
            {/* header section  */}
            <div class="flex flex-row justify-between lg:items-center items-end">
              <div class="flex flex-col gap-1">
                <span class="text-[#25324B] text-3xl font-bold">All Jobs</span>
                <span class="text-[#7C8493] text-sm ">
                  Showing {searchresult} Results
                </span>
              </div>
              <select
                class="lg:hidden flex focus:outline-none py-2 text-[#25324B] text-sm font-bold "
                name=""
                id=""
              >
                <option class="text-[#25324B]  text-sm " value="">
                  Most Relevant
                </option>
              </select>
              <div class="hidden lg:flex gap-4 justify-between items-center">
                <div class="flex gap-1 justify-between items-center">
                  <span class="text-[#7C8493] text-sm ">Sort by:</span>
                  <select
                    class="focus:outline-none py-2 text-[#25324B] text-sm font-bold "
                    name=""
                    id=""
                  >
                    <option class="text-[#25324B]  text-sm " value="">
                      Most Relevant
                    </option>
                  </select>
                </div>
                <div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_53158)">
                      <path
                        d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z"
                        stroke="#515B6F"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z"
                        stroke="#515B6F"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z"
                        stroke="#515B6F"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z"
                        stroke="#515B6F"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_53158">
                        <rect width="24" height="24" fill="#4640DE"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div class="px-1 bg-[#e4e2e2]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#4640DE"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_53079)">
                      <path
                        d="M18 4H6C4.89543 4 4 4.89543 4 6V8C4 9.10457 4.89543 10 6 10H18C19.1046 10 20 9.10457 20 8V6C20 4.89543 19.1046 4 18 4Z"
                        stroke="#4640DE"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M18 14H6C4.89543 14 4 14.8954 4 16V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V16C20 14.8954 19.1046 14 18 14Z"
                        stroke="#4640DE"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_53079">
                        <rect width="24" height="24" fill="#640DE"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            {/* Job listing  */}
            <div className="flex flex-col gap-2  w-full ">
              {/* user test  */}
              {jobs.map((items, index) => (
                <div className="flex flex-col lg:flex-row p-4 items-center border-[#D6DDEB] gap-2 w-full   border justify-between">
                  {/* companies detail section  */}
                  {/* 2 users  */}
                  <div
                    className="lg:flex grid lg:basis-3/4 grid-cols-1   lg:grid-rows-1   justify-start
                  items-start  gap-2 w-full   h-auto  "
                  >
                    {items}
                    <div className="flex flex-col items-start gap-3">
                      <div className="font-bold from-neutral-700">{items}</div>
                      <div className="text-gray-500">
                        {items} . {items} , {items}
                      </div>
                      <div className="grid text-center lg:grid-cols-3 grid-cols-3 gap-2">
                        <div className="bg-[rgba(86,205,173,10%)] rounded-2xl px-2 py-1 text-[rgba(86,205,173,100%)]">
                          {items}
                        </div>
                        <div className="border font-bold rounded-2xl px-2 py-1 border-[rgba(255,184,54,100%)] fond-bold text-[rgba(255,184,54,100%)]">
                          {items}
                        </div>
                        <div className="border font-bold rounded-2xl px-2 py-1 border-[#4640DE] text-[#4640DE]">
                          {items}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Apply section  */}
                  <div className="w-full flex lg:basis-1/4 flex-col gap-2 justify-stretch ">
                    <div className="bg-[#4640DE] text-white w-auto p-3 text-center font-bold ">
                      Apply
                    </div>
                    <div className="bg-[#D6DDEB] w-full h-[6px]">
                      <div className="bg-[#56CDAD] w-[40%] h-[6px] "></div>
                    </div>
                    <div className="text-[#7C8493]">
                      <span className="text-[#25324B]">{items} applied</span>{" "}
                      {items}
                    </div>
                  </div>
                </div>
              ))}
              {/* user 1 */}
              <div className="flex flex-col lg:flex-row p-4 items-center border-[#D6DDEB] gap-2 w-full   border justify-between">
                {/* companies detail section  */}
                {/* 2 users  */}
                <div
                  className="lg:flex grid lg:basis-3/4 grid-cols-1   lg:grid-rows-1   justify-start
                  items-start  gap-2 w-full   h-auto  "
                >
                  <Img
                    className=""
                    src="/images/Company Logo/Property 1=Nomad.png"
                    width={64}
                    height={64}
                  />
                  <div className="flex flex-col items-start gap-3">
                    <div className="font-bold from-neutral-700">
                      Social Media Assistant
                    </div>
                    <div className="text-gray-500">Nomad . Paris , France</div>
                    <div className="grid text-center lg:grid-cols-3 grid-cols-3 gap-2">
                      <div className="bg-[rgba(86,205,173,10%)] rounded-2xl px-2 py-1 text-[rgba(86,205,173,100%)]">
                        Full-Time
                      </div>
                      <div className="border font-bold rounded-2xl px-2 py-1 border-[rgba(255,184,54,100%)] fond-bold text-[rgba(255,184,54,100%)]">
                        Marketing
                      </div>
                      <div className="border font-bold rounded-2xl px-2 py-1 border-[#4640DE] text-[#4640DE]">
                        Design
                      </div>
                    </div>
                  </div>
                </div>
                {/* Apply section  */}
                <div className="w-full flex lg:basis-1/4 flex-col gap-2 justify-stretch ">
                  <div className="bg-[#4640DE] text-white w-auto p-3 text-center font-bold ">
                    Apply
                  </div>
                  <div className="bg-[#D6DDEB] w-full h-[6px]">
                    <div className="bg-[#56CDAD] w-[40%] h-[6px] "></div>
                  </div>
                  <div className="text-[#7C8493]">
                    <span className="text-[#25324B]">5 applied</span> of 10
                    capacity
                  </div>
                </div>
              </div>
              {/* user 2  */}
              <div className="flex flex-col lg:flex-row p-4 items-center border-[#D6DDEB] gap-2 w-full   border justify-between">
                {/* companies detail section  */}
                {/* 2 users  */}
                <div
                  className="lg:flex grid lg:basis-3/4 grid-cols-1   lg:grid-rows-1   justify-start
                  items-start  gap-2 w-full   h-auto  "
                >
                  <Img
                    className=""
                    src="/images/Company Logo/Property 1=Nomad.png"
                    width={64}
                    height={64}
                  />
                  <div className="flex flex-col items-start gap-3">
                    <div className="font-bold from-neutral-700">
                      Social Media Assistant
                    </div>
                    <div className="text-gray-500">Nomad . Paris , France</div>
                    <div className="grid text-center lg:grid-cols-3 grid-cols-3 gap-2">
                      <div className="bg-[rgba(86,205,173,10%)] rounded-2xl px-2 py-1 text-[rgba(86,205,173,100%)]">
                        Full-Time
                      </div>
                      <div className="border font-bold rounded-2xl px-2 py-1 border-[rgba(255,184,54,100%)] fond-bold text-[rgba(255,184,54,100%)]">
                        Marketing
                      </div>
                      <div className="border font-bold rounded-2xl px-2 py-1 border-[#4640DE] text-[#4640DE]">
                        Design
                      </div>
                    </div>
                  </div>
                </div>
                {/* Apply section  */}
                <div className="w-full flex lg:basis-1/4 flex-col gap-2 justify-stretch ">
                  <div className="bg-[#4640DE] text-white w-auto p-3 text-center font-bold ">
                    Apply
                  </div>
                  <div className="bg-[#D6DDEB] w-full h-[6px]">
                    <div className="bg-[#56CDAD] w-[40%] h-[6px] "></div>
                  </div>
                  <div className="text-[#7C8493]">
                    <span className="text-[#25324B]">5 applied</span> of 10
                    capacity
                  </div>
                </div>
              </div>
            </div>
            {/* pagination  */}
            <div className=" flex gap-1 lg:gap-4 justify-center items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_53259)">
                  <path
                    d="M15 6L9 12L15 18"
                    stroke="#25324B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_53259">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <ul className="flex justify-center items-center  gap-1 lg:gap-2">
                <li className=" py-2 px-4 rounded-lg bg-[#4640DE] text-white">
                  1
                </li>
                <li className="py-2 px-4 rounded-lg  text-[#515B6F]">2</li>
                <li className="py-2  px-4 rounded-lg  text-[#515B6F]">3</li>
                <li className="py-2 hidden lg:flex px-4 rounded-lg  text-[#515B6F]">
                  4
                </li>
                <li className="py-2 hidden lg:flex px-4 rounded-lg  text-[#515B6F]">
                  5
                </li>
                <li className="py-2  px-4 rounded-lg  text-[#515B6F]">...</li>
                <li className="py-2  px-4 rounded-lg  text-[#515B6F]">33</li>
              </ul>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_53256)">
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="#25324B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_53256">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
