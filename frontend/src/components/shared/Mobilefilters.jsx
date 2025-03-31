import React from 'react'
import { Img } from 'react-image';
const Mobilefilters = () => {
  return (
    <div> {/* mobile  filter section start */}
    <section className="container mx-auto lg:p-10 p-4">
      <div className="d-flex justify-center text-center items-center">
        {/* Button to open modal */}
        <button
          onClick={() => setIsOpen(true)}
          className=" text-center d-flex justify-center items-center"
          type="button"
        >
          <div className="flex lg:hidden justify-center gap-2 items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_53174)">
                <path
                  d="M4 6H20"
                  stroke="#25324B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 12H18"
                  stroke="#25324B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 18H16"
                  stroke="#25324B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_53174">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div className="font-bold text-[#25324B]">More Filter</div>
          </div>
        </button>

        {/* Modal */}
        {isOpen && (
          <div
            className="fixed px-5 inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 "
            onClick={() => setIsOpen(false)} // Close modal when clicking outside
          >
            <div
              className="relative p-4 w-full max-w-2xl bg-white rounded-lg shadow-md dark:bg-gray-700"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  More Filters
                </h3>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-4 md:p-5 space-y-4">
                <div className="overflow-y-auto h-[75vh]   flex flex-col  gap-4">
                  {/* 1 filter options  */}
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[#25324B] font-bold  ">
                        Type of Employment
                      </span>
                      <svg
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
                    </div>
                    <div>
                      <ul className="flex flex-col text-sm gap-4">
                        <li className="flex gap-2 items-center">
                          <input type="checkbox" className="" name="" id="" />
                          <span className="text-[#515B6F]">
                            Full Time (3)
                          </span>
                        </li>
                        <li className="flex gap-2 items-center">
                          <input type="checkbox" className="" name="" id="" />
                          <span className="text-[#515B6F]">
                            Part-Time (5)
                          </span>
                        </li>
                        <li className="flex gap-2 items-center">
                          <input type="checkbox" className="" name="" id="" />
                          <span className="text-[#515B6F]">Remote (2)</span>
                        </li>
                        <li className="flex gap-2 items-center">
                          <input type="checkbox" className="" name="" id="" />
                          <span className="text-[#515B6F]">
                            Internship (24)
                          </span>
                        </li>
                        <li className="flex gap-2 items-center">
                          <input type="checkbox" className="" name="" id="" />
                          <span className="text-[#515B6F]">Contract (3)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* 1 filter options  */}
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[#25324B] font-bold  ">
                        Categories
                      </span>
                      <svg
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
                    </div>
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
                          <span className="text-[#515B6F]">
                            Marketing (3)
                          </span>
                        </li>
                        <li className="flex gap-2 items-center">
                          <input type="checkbox" className="" name="" id="" />
                          <span className="text-[#515B6F]">Business (3)</span>
                        </li>
                        <li className="flex gap-2 items-center">
                          <input type="checkbox" className="" name="" id="" />
                          <span className="text-[#515B6F]">
                            Human Resource (6)
                          </span>
                        </li>
                        <li className="flex gap-2 items-center">
                          <input type="checkbox" className="" name="" id="" />
                          <span className="text-[#515B6F]">Finance (4)</span>
                        </li>
                        <li className="flex gap-2 items-center">
                          <input type="checkbox" className="" name="" id="" />
                          <span className="text-[#515B6F]">
                            Engineering (4)
                          </span>
                        </li>
                        <li className="flex gap-2 items-center">
                          <input type="checkbox" className="" name="" id="" />
                          <span className="text-[#515B6F]">
                            Technology (5)
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* 1 filter options  */}
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[#25324B] font-bold  ">
                        Job Level
                      </span>
                      <svg
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
                    </div>
                    <div>
                      <ul className="flex flex-col text-sm gap-4">
                        <li className="flex gap-2 items-center">
                          <input type="checkbox" className="" name="" id="" />
                          <span className="text-[#515B6F]">
                            Entry Level (57)
                          </span>
                        </li>
                        <li className="flex gap-2 items-center">
                          <input type="checkbox" className="" name="" id="" />
                          <span className="text-[#515B6F]">
                            Mid Level (3)
                          </span>
                        </li>
                        <li className="flex gap-2 items-center">
                          <input type="checkbox" className="" name="" id="" />
                          <span className="text-[#515B6F]">
                            Senior Level (5)
                          </span>
                        </li>
                        <li className="flex gap-2 items-center">
                          <input type="checkbox" className="" name="" id="" />
                          <span className="text-[#515B6F]">
                            Director (12)
                          </span>
                        </li>
                        <li className="flex gap-2 items-center">
                          <input type="checkbox" className="" name="" id="" />
                          <span className="text-[#515B6F]">
                            Human Resource (6)
                          </span>
                        </li>
                        <li className="flex gap-2 items-center">
                          <input type="checkbox" className="" name="" id="" />
                          <span className="text-[#515B6F]">
                            VP or Above (8)
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* 1 filter options  */}
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[#25324B] font-bold  ">
                        Salary Range
                      </span>
                      <svg
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
                    </div>
                    <div>
                      <ul className="flex flex-col text-sm gap-4">
                        <li className="flex gap-2 items-center">
                          <input type="checkbox" className="" name="" id="" />
                          <span className="text-[#515B6F]">
                            $700 - $1000 (4)
                          </span>
                        </li>
                        <li className="flex gap-2 items-center">
                          <input type="checkbox" className="" name="" id="" />
                          <span className="text-[#515B6F]">
                            {" "}
                            <span className="text-[#515B6F]">
                              $700 - $1000 (4)
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-2 items-center">
                          <input type="checkbox" className="" name="" id="" />
                          <span className="text-[#515B6F]">
                            $1500 - $2000 (10)
                          </span>
                        </li>
                        <li className="flex gap-2 items-center">
                          <input type="checkbox" className="" name="" id="" />
                          <span className="text-[#515B6F]">
                            $3000 or above (4)
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                 {/* apply button  */}
                 <div className="bg-[#4640DE] text-white w-full p-3 text-center font-bold ">
                  Apply
                </div>
                </div>
              </div>

            
            </div>
          </div>
        )}
      </div>
    </section>
    {/* 2 section filter and jobs search ended   */}</div>
  )
}

export default Mobilefilters