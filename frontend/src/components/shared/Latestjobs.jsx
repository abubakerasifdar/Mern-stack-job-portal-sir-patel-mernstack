import React from "react";
import { Img } from "react-image";
const randomJob = ["1", "1"];

const LatestJobs = () => {
  return (
    <>
      {/* 6 latest jobs open section start */}
      <section className=" bg-[#F8F8FD]">
        <div className="container mx-auto p-10">
          
        <div className="flex py-4 justify-between items-center">
          <div className="text-3xl font-extrabold">
            Latest Open <span className="text-[#26A4FF]">Jobs</span>{" "}
          </div>
          <div className="hidden lg:flex justify-between items-center">
            <span className=" text-[#4640DE] font-bold">Show all jobs</span>
            <Img
              src="/images/compnay profile landing pages/Stack Section/Icon.png"
              width={0}
              height={0}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
          {/* team memebers  */}
          <div className="grid  lg:grid-cols-2 grid-row  gap-7">
            {/* 1 users  */}
            {
            randomJob.map((items, index)=><div key={index}
            className="lg:flex grid grid-cols-1 lg:grid-rows-1  bg-white justify-start
              items-start  gap-2  p-6  h-auto   w-full" >
            {items}
            <div className="flex flex-col items-start gap-3">
              <div className="font-bold from-neutral-700">
              {items}
              </div>
              <div className="text-gray-500">{items} {items} ,{items}</div>
              <div className="grid text-center lg:grid-cols-3 grid-cols-2 gap-2">
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
          </div> )
          }
            
            {/* 2 users  */}
            <div
              className="lg:flex grid grid-cols-1 lg:grid-rows-1  bg-white justify-start
           items-start  gap-2  p-6  h-auto   w-full"
            >
              <Img
                className=""
                src="/images/Company Logo/Property 1=Netlify.png"
                width={64}
                height={64}
              />
              <div className="flex flex-col items-start gap-3">
                <div className="font-bold from-neutral-700">
                  Social Media Assistant
                </div>
                <div className="text-gray-500">Netify . Paris , France</div>
                <div className="grid text-center lg:grid-cols-3 grid-cols-2 gap-2">
                  <div className="bg-[rgba(86,205,173,10%)] rounded-2xl px-2 py-1 text-[rgba(86,205,173,100%)]">
                    Full-Time
                  </div>
                  <div className="border rounded-2xl px-2 py-1 border-[rgba(255,184,54,100%)] font-bold text-[rgba(255,184,54,100%)]">
                    Marketing
                  </div>
                  <div className="border rounded-2xl px-2 py-1 border-[#4640DE] font-bold text-[#4640DE]">
                    Design
                  </div>
                </div>
              </div>
            </div>
            <div
              className="lg:flex grid grid-cols-1 lg:grid-rows-1  bg-white justify-start
            items-start   p-6  h-auto   w-full"
            >
              <Img
                className=""
                src="/images/Company Logo/Property 1=Dropbox.png"
                width={64}
                height={64}
              />
              <div className="flex flex-col items-start gap-3">
                <div className="font-bold from-neutral-700">
                  Social Media Assistant
                </div>
                <div className="text-gray-500">Dropbox . Paris , France</div>
                <div className="grid text-center lg:grid-cols-3 grid-cols-2 gap-2">
                  <div className="bg-[rgba(86,205,173,10%)] rounded-2xl px-2 py-1 text-[rgba(86,205,173,100%)]">
                    Full-Time
                  </div>
                  <div className="border rounded-2xl px-2 py-1 border-[rgba(255,184,54,100%)] font-bold text-[rgba(255,184,54,100%)]">
                    Marketing
                  </div>
                  <div className="border rounded-2xl px-2 py-1 border-[#4640DE] font-bold text-[#4640DE]">
                    Design
                  </div>
                </div>
              </div>
            </div>
            <div
              className="lg:flex grid grid-cols-1 lg:grid-rows-1 gap-2  bg-white justify-start
            items-start   p-6  h-auto   w-full"
            >
              <Img
                className=""
                src="/images/Company Logo/Property 1=Maze.png"
                width={64}
                height={64}
              />
              <div className="flex flex-col items-start gap-3">
                <div className="font-bold from-neutral-700">
                  Social Media Assistant
                </div>
                <div className="text-gray-500">Maze . Paris , France</div>
                <div className="grid text-center lg:grid-cols-3 grid-cols-2 gap-2">
                  <div className="bg-[rgba(86,205,173,10%)] rounded-2xl px-2 py-1 text-[rgba(86,205,173,100%)]">
                    Full-Time
                  </div>
                  <div className="border rounded-2xl px-2 py-1 border-[rgba(255,184,54,100%)] font-bold text-[rgba(255,184,54,100%)]">
                    Marketing
                  </div>
                  <div className="border rounded-2xl px-2 py-1 border-[#4640DE] font-bold text-[#4640DE]">
                    Design
                  </div>
                </div>
              </div>
            </div>
            <div
              className="lg:flex grid grid-cols-1 lg:grid-rows-1  bg-white justify-start
           items-start  gap-2  p-6  h-auto   w-full"
            >
              <Img
                className=""
                src="/images/Company Logo/Property 1=Terraform.png"
                width={64}
                height={64}
              />
              <div className="flex flex-col items-start gap-3">
                <div className="font-bold from-neutral-700">
                  Social Media Assistant
                </div>
                <div className="text-gray-500">Terraform . Paris , France</div>
                <div className="grid text-center text-center lg:grid-cols-3 grid-cols-2 gap-2">
                  <div className="bg-[rgba(86,205,173,10%)] rounded-2xl px-2 py-1 text-[rgba(86,205,173,100%)]">
                    Full-Time
                  </div>
                  <div className="border rounded-2xl px-2 py-1 border-[rgba(255,184,54,100%)] font-bold text-[rgba(255,184,54,100%)]">
                    Marketing
                  </div>
                  <div className="border rounded-2xl px-2 py-1 border-[#4640DE] font-bold text-[#4640DE]">
                    Design
                  </div>
                </div>
              </div>
            </div>
            <div
              className="lg:flex grid grid-cols-1 lg:grid-rows-1  bg-white justify-start
           items-start  gap-2  p-6  h-auto   w-full"
            >
              <Img
                className=""
                src="/images/Company Logo/Property 1=Udacity.png"
                width={64}
                height={64}
              />
              <div className="flex flex-col items-start gap-3">
                <div className="font-bold from-neutral-700">
                  Social Media Assistant
                </div>
                <div className="text-gray-500">Udacity . Paris , France</div>
                <div className="grid text-center lg:grid-cols-3 grid-cols-2 gap-2">
                  <div className="bg-[rgba(86,205,173,10%)] rounded-2xl px-2 py-1 text-[rgba(86,205,173,100%)]">
                    Full-Time
                  </div>
                  <div className="border rounded-2xl px-2 py-1 border-[rgba(255,184,54,100%)] font-bold text-[rgba(255,184,54,100%)]">
                    Marketing
                  </div>
                  <div className="border rounded-2xl px-2 py-1 border-[#4640DE] font-bold text-[#4640DE]">
                    Design
                  </div>
                </div>
              </div>
            </div>
            <div
              className="lg:flex grid grid-cols-1 lg:grid-rows-1  bg-white justify-start
           items-start  gap-2  p-6  h-auto   w-full"
            >
              <Img
                className=""
                src="/images/Company Logo/Property 1=Packer.png"
                width={64}
                height={64}
              />
              <div className="flex flex-col items-start gap-3">
                <div className="font-bold from-neutral-700">
                  Social Media Assistant
                </div>
                <div className="text-gray-500">Packer . Paris , France</div>
                <div className="grid text-center lg:grid-cols-3 grid-cols-2 gap-2">
                  <div className="bg-[rgba(22,27,26,0.1)] rounded-2xl px-2 py-1 text-[rgba(86,205,173,100%)]">
                    Full-Time
                  </div>
                  <div className="border rounded-2xl px-2 py-1 border-[rgba(255,184,54,100%)] font-bold text-[rgba(255,184,54,100%)]">
                    Marketing
                  </div>
                  <div className="border text-center rounded-2xl px-2 py-1 border-[#4640DE] font-bold text-[#4640DE]">
                    Design
                  </div>
                </div>
              </div>
            </div>
            <div
              className="lg:flex grid grid-cols-1 lg:grid-rows-1  bg-white justify-start
           items-start  gap-2  p-6  h-auto   w-full"
            >
              <Img
                className=""
                src="/images/Company Logo/Property 1=Webflow.png"
                width={64}
                height={64}
              />
              <div className="flex flex-col items-start gap-3">
                <div className="font-bold from-neutral-700">
                  Social Media Assistant
                </div>
                <div className="text-gray-500">Webflow . Paris , France</div>
                <div className="grid text-center lg:grid-cols-3 grid-cols-2 gap-2">
                  <div className="bg-[rgba(86,205,173,10%)] rounded-2xl px-2 py-1 text-[rgba(86,205,173,100%)]">
                    Full-Time
                  </div>
                  <div className="border rounded-2xl px-2 py-1 border-[rgba(255,184,54,100%)] font-bold text-[rgba(255,184,54,100%)]">
                    Marketing
                  </div>
                  <div className="border  rounded-2xl px-2 py-1 border-[#4640DE] font-bold text-[#4640DE]">
                    Design
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 6 latest jobs open section ended */}
    </>
  );
};

export default LatestJobs;
