import React from "react";
import { Img } from "react-image";
import Navbar from "@/components/shared/Navbar";
import { useParams } from "react-router-dom";
import { setSingleJobs } from "../redux/slice/jobslice";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";

export default function Jobdesc() {
  const { loading } = useSelector((store) => store.auth);
  const { user } = useSelector((store) => store.auth);
  const { SingleJobs } = useSelector((store) => store.job);
  const InitialAppliedState =
    SingleJobs?.applications?.some(
      (application) => application?.applicant?._id == user?._id
    ) || false;
  const [isApplied, setIsApplied] = useState(InitialAppliedState);

  const dispatch = useDispatch();
  const params = useParams();
  const jobId = params.id;
  const dayagefunction = (mongodbtime) => {
    const createdAt = new Date(mongodbtime);
    const currentDate = new Date();
    const timeDifference = currentDate - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };
  const applyJobHandler = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/application/apply/${jobId}`,
        {
          header: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (data?.success) {
        setIsApplied(true); // update the local state

        const UpdateSingleJob = {
          ...SingleJobs,
          applications: [...SingleJobs.applications, { applicant: user?._id }],
        };

        dispatch(setSingleJobs(UpdateSingleJob));

        return toast.success(data.message);
      }
    } catch (error) {
      return toast.error(error?.response?.data?.message);

      console.log(error);
    }
  };
  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8000/api/job/get/${jobId}`,
          {
            withCredentials: true,
          }
        );

        if (data.success) {
          toast.success(data?.message);
          const jobsetapplyupdateer = data.job.applications.some(
            (application) => application.applicant?._id == user?._id
          );
          setIsApplied(jobsetapplyupdateer);
          // ensure astate is async with fresh data
          dispatch(setSingleJobs(data.job));
          // pakara gia mujrim or bug ya tang kar raha ha saron ko
        }
      } catch (error) {
        if (isMounted) {
          console.log("Error in Effect");
        }
        console.log("Error in Effect");
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);
  return (
    <div>
      <Navbar />
      {/* // stripe section */}
      <div className="bg-[#F8F8FD]">
        <div className=" container mx-auto  p-10  text-black ">
          {/*Always add assential images in the folder Before working on it. Always Code you pages parallel means ka jab code kar raha hon ga ap then you should have to code one div rigth it's css and classes then code the other and also check it mearn ka code link a container and hairarcy. help you alot to make a results */}
          <div>
            {/* breadcrum  */}
            <div className="">
              <ul className="flex flex-rows-2 flex-cols-3 gap-2   ">
                <li className="hidden lg:flex lg:w-auto w-0">Home /</li>
                <li className="lg:hidden flex">...</li>
                <li className="hidden lg:flex lg:w-auto w-0">Companies /</li>
                <li>Nomad</li>/<li>Social Media Assistant</li>
              </ul>
            </div>
            {/* strip section  */}
            <div className="bg-white w-full lg:w-auto flex mt-10 lg:flex-row flex-col   lg:justify-between items-start lg:items-center  p-3    ">
              {/* images section  */}
              <div className="flex  w-full  flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-4 ">
                <Img
                  className="hidden lg:flex"
                  src="\images\Compnay profile landing pages\Stripe Images Section\stripe_logo_Dp4F5YyKm 1.png"
                  width={64}
                  height={64}
                />

                <div className="flex lg:w-0 w-full flex-row   justify-between">
                  <Img
                    className=" lg:hidden"
                    src="\images\Compnay profile landing pages\Stripe Images Section\stripe_logo_Dp4F5YyKm 1.png"
                    width={80}
                    height={80}
                    alt="testing"
                  />
                  <Img
                    src="/images/SVG-Icons/Name=Share.svg"
                    width={32}
                    height={32}
                    alt="share"
                    className="lg:hidden flex "
                  />
                </div>

                {/* content details  */}
                <div className="flex w-full flex-col justify-start">
                  <div className="text-3xl font-[1000] ">
                    {SingleJobs?.title}
                  </div>
                  <a href="#" className="text-[#515B6F] font-bold">
                    {SingleJobs?.company?.name} . {SingleJobs?.location} .{" "}
                    {SingleJobs?.jobType}
                  </a>
                </div>
              </div>

              {/* Third layers */}
              <div className="flex justify-end  w-full lg:flex-row flex-col gap-4 ">
                {/* 1 */}

                <Img
                  src="/images/SVG-Icons/Name=Share.svg"
                  width={32}
                  height={32}
                  className="hidden lg:flex "
                />

                <button
                  onClick={isApplied ? null : applyJobHandler}
                  className={`lg:flex px-6 py-3 ${
                    isApplied ? "bg-gray-600" : "bg-[#4640DE]"
                  } text-white font-bold text-center`}
                  disabled={isApplied}
                >
                  {isApplied ? "Already Applied" : "Apply Now"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // gallery section */}
      <div className="container mx-auto  p-10 flex flex-col lg:flex-row justify-between  gap-7 ">
        {/* Jobs description and links */}
        <div className="flex flex-2 basis-2/3 flex-col gap-y-4">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-3xl font-[1000] ">Description</h1>
            <p>{SingleJobs?.description}</p>
          </div>
          <hr className="lg:hidden" />
          {/* Responsibilites section */}
          <div className="flex flex-col gap-y-4">
            <h1 className="text-3xl font-[1000] ">Responsibilities</h1>
            <div className="flex gap-4">
              <Img
                src="/images/SVG-Icons/Name=Circle Check.svg"
                height={24}
                width={24}
                alt="Circle Check"
              />
              <p>
                Community engagement to ensure that is supported and actively
                represented online
              </p>
            </div>
            <div className="flex gap-4">
              <Img
                src="/images/SVG-Icons/Name=Circle Check.svg"
                height={24}
                width={24}
                alt="Circle Check"
              />
              <p>
                Community engagement to ensure that is supported and actively
                represented online
              </p>
            </div>
            <div className="flex gap-4">
              <Img
                src="/images/SVG-Icons/Name=Circle Check.svg"
                height={24}
                width={24}
                alt="Circle Check"
              />
              <p>
                Community engagement to ensure that is supported and actively
                represented online
              </p>
            </div>
            <div className="flex gap-4">
              <Img
                src="/images/SVG-Icons/Name=Circle Check.svg"
                height={24}
                width={24}
                alt="Circle Check"
              />
              <p>
                Community engagement to ensure that is supported and actively
                represented online
              </p>
            </div>
            <div className="flex gap-4">
              <Img
                src="/images/SVG-Icons/Name=Circle Check.svg"
                height={24}
                width={24}
                alt="Circle Check"
              />
              <p>
                Community engagement to ensure that is supported and actively
                represented online
              </p>
            </div>
          </div>
          <hr className="lg:hidden" />

          {/* How You Are */}
          <div className="flex flex-col gap-y-4">
            <h1 className="text-3xl font-[1000] ">Who You Are</h1>
            <div className="flex gap-4">
              <Img
                src="/images/SVG-Icons/Name=Circle Check.svg"
                height={24}
                width={24}
                alt="Circle Check"
              />
              <p>
                You get energy from people and building the ideal work
                environment
              </p>
            </div>
            <div className="flex gap-4">
              <Img
                src="/images/SVG-Icons/Name=Circle Check.svg"
                height={24}
                width={24}
                alt="Circle Check"
              />
              <p>
                You get energy from people and building the ideal work
                environment
              </p>
            </div>
            <div className="flex gap-4">
              <Img
                src="/images/SVG-Icons/Name=Circle Check.svg"
                height={24}
                width={24}
                alt="Circle Check"
              />
              <p>
                You get energy from people and building the ideal work
                environment
              </p>
            </div>
            <div className="flex gap-4">
              <Img
                src="/images/SVG-Icons/Name=Circle Check.svg"
                height={24}
                width={24}
                alt="Circle Check"
              />
              <p>
                You get energy from people and building the ideal work
                environment
              </p>
            </div>
          </div>

          {/* Nice to Haves */}
          <div className="flex flex-col gap-y-4">
            <h1 className="text-3xl font-[1000] ">Nice-To-Haves</h1>
            <div className="flex gap-4">
              <Img
                src="/images/SVG-Icons/Name=Circle Check.svg"
                height={24}
                width={24}
                alt="Circle Check"
              />
              <p>Fluent in English </p>
            </div>
            <div className="flex gap-4">
              <Img
                src="/images/SVG-Icons/Name=Circle Check.svg"
                height={24}
                width={24}
                alt="Circle Check"
              />
              <p>Fluent in English </p>
            </div>
            <div className="flex gap-4">
              <Img
                src="/images/SVG-Icons/Name=Circle Check.svg"
                height={24}
                width={24}
                alt="Circle Check"
              />
              <p>Fluent in English </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h1 className="text-3xl font-[1000] ">
              Competative Salary You Get
            </h1>
            <div className="flex gap-4">
              <Img
                src="/images/SVG-Icons/Name=Circle Check.svg"
                height={24}
                width={24}
                alt="Circle Check"
              />
              <p>{SingleJobs?.salary} Rs/month</p>
            </div>
          </div>
        </div>
        {/* side bar section  */}
        <div className="flex flex-1 basis-1/3 flex-col space-y-8  w-full  lg:px-5">
          {/* tech stack section  */}
          <div className=" flex flex-col space-y-5">
            <h1 className="text-3xl font-[1000] text-start">About this role</h1>
            <div className="flex flex-col p-3 bg-[#F8F8FD] gap-3">
              <p>
                <span className="font-bold">
                  {SingleJobs?.applications?.length} Applied
                </span>{" "}
                of Capacity {SingleJobs?.position}
              </p>
              <div className="bg-[#D6DDEB] w-[100%] p-0 ">
                <div className="bg-[#56CDAD] w-[70%] p-1"></div>
              </div>
            </div>
            <div className="flex gap-4 flex-col">
              <div className="flex justify-between">
                <p>Created At</p>
                <h5 className="font-bold">
                  {SingleJobs?.createdAt.split("T")?.[0]} ,{" "}
                  {dayagefunction(SingleJobs?.createdAt) == 0
                    ? "Today"
                    : `${dayagefunction(SingleJobs?.createdAt)} Days Ago`}{" "}
                </h5>
              </div>
              <div className="flex justify-between">
                <p>Apply Before</p>
                <h5 className="font-bold">31 July, 2025</h5>
              </div>
              <div className="flex justify-between">
                <p>Apply Before</p>
                <h5 className="font-bold">31 July, 2025</h5>
              </div>
              <div className="flex justify-between">
                <p>Apply Before</p>
                <h5 className="font-bold">31 July, 2025</h5>
              </div>
            </div>
          </div>
          {/* tech stack section  */}
          <div className=" flex flex-col space-y-5">
            <h1 className="text-3xl font-[1000] text-start">About this role</h1>
            <div className="flex flex-row  p-3  gap-2">
              <div className="px-3 rounded-3xl py-2 bg-black text-white">
                Experience: {SingleJobs?.experience}
              </div>
              <div className="px-3 rounded-3xl py-2 bg-black text-white">
                Marketing
              </div>
            </div>
          </div>
          {/* office location sections */}
          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl font-[1000] text-start">
              Required Skilles
            </h1>

            <div className="grid grid-cols-2 grid-rows-3 gap-4">
              <div className="px-3 text-center rounded-md py-2 bg-[#F8F8FD] text-[#4640DE] font-bold ">
                Marketing
              </div>
              <div className="px-3 text-center rounded-md py-2 bg-[#F8F8FD] text-[#4640DE] font-bold ">
                Marketing
              </div>
              <div className="px-3 text-center rounded-md py-2 bg-[#F8F8FD] text-[#4640DE] font-bold ">
                Marketing
              </div>
              <div className="px-3 text-center rounded-md py-2 bg-[#F8F8FD] text-[#4640DE] font-bold ">
                Marketing
              </div>
              <div className="px-3 text-center rounded-md py-2 bg-[#F8F8FD] text-[#4640DE] font-bold ">
                Marketing
              </div>
              <div className="px-3 text-center rounded-md py-2 bg-[#F8F8FD] text-[#4640DE] font-bold ">
                Marketing
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* Perks and Benefits Sections  */}
      <div className="container space-y-5 mx-auto mb-5  p-10">
        <div className="flex flex-col space-y-5 items-start justify-start  ">
          <div className="text-3xl font-[1000] ">Perks & Benefits</div>
          <div className=" text-gray-400 ">
            This job comes with several perks and benefits.
          </div>
        </div>
        {/* perks and bebefits  */}
        <div className="grid   lg:grid-cols-4    gap-10">
          {/* 1 perks  */}
          <div className="flex  flex-col gap-3 justify-start items-start   p-1 h-[168] w-full">
            <Img
              className=""
              src="/images/Compnay profile landing pages/Perks & Benefits/Icon.png"
              width={48}
              height={48}
            />
            <div className="font-extrabold from-neutral-700">
              Full Healthcare
            </div>
            <div className="text-gray-500 font-light">
              We believe in thriving communities and that starts with our team
              being happy and healthy.
            </div>
          </div>
          {/* 2 perks  */}
          <div className="flex  flex-col gap-3 justify-start items-start   p-1 h-[168] w-full">
            <Img
              className=""
              src="/images/Compnay profile landing pages/Perks & Benefits/Icon-1.png"
              width={48}
              height={48}
            />
            <div className="font-extrabold from-neutral-700">
              Unlimited Vacation
            </div>
            <div className="text-gray-500 font-light">
              we believe you should have a flexible schedule that makes space
              for family, wellness, and fun.
            </div>
          </div>
          {/* 3 perks  */}
          <div className="flex  flex-col gap-3 justify-start items-start   p-1 h-[168] w-full">
            <Img
              className=""
              src="/images/Compnay profile landing pages/Perks & Benefits/Icon-2.png"
              width={48}
              height={48}
            />
            <div className="font-extrabold from-neutral-700">
              Skill Development
            </div>
            <div className="text-gray-500 font-light">
              we nelieve in always learning and leveling up our skills. Whether
              it's a conference or online course.
            </div>
          </div>
          {/* 4 perks  */}
          <div className="flex  flex-col gap-3 justify-start items-start   p-1 h-[168] w-full">
            <Img
              className=""
              src="/images/Compnay profile landing pages/Perks & Benefits/Icon-3.png"
              width={48}
              height={48}
            />
            <div className="font-extrabold from-neutral-700">Team Summits</div>
            <div className="text-gray-500 font-light">
              Every 6 months we have a full team summit where we have a fun,
              reflect, and plan for the upcoming quarter.
            </div>
          </div>
          {/* 5 perks  */}
          <div className="flex  flex-col gap-3 justify-start items-start   p-1 h-[168] w-full">
            <Img
              className=""
              src="/images/Compnay profile landing pages/Perks & Benefits/Icon-4.png"
              width={48}
              height={48}
            />
            <div className="font-extrabold from-neutral-700">
              Remote Working
            </div>
            <div className="text-gray-500 font-light">
              You know how you peroform your best. Work from home, coffee shop
              or anywhere when you feel like it.
            </div>
          </div>
          {/* 6 perks  */}
          <div className="flex  flex-col gap-3 justify-start items-start   p-1 h-[168] w-full">
            <Img
              className=""
              src="/images/Compnay profile landing pages/Perks & Benefits/Icon-5.png"
              width={48}
              height={48}
            />
            <div className="font-extrabold from-neutral-700">
              Commuter Benefits
            </div>
            <div className="text-gray-500 font-light">
              We're gratefull for all the time and energy each tam member puts
              into getting to work every day.
            </div>
          </div>
          {/* 7 perks  */}
          <div className="flex  flex-col gap-3 justify-start items-start   p-1 h-[168] w-full">
            <Img
              className=""
              src="/images/Compnay profile landing pages/Perks & Benefits/Icon-6.png"
              width={48}
              height={48}
            />
            <div className="font-extrabold from-neutral-700">We Give back.</div>
            <div className="text-gray-500 font-light">
              We anonymously match anyt domation our employees make(upt o $/Euro
              600) so they can support the organizations the care about
              most-times two.
            </div>
          </div>
        </div>
      </div>
      {/* Open Jobs section  */}
      <div className="bg-[#F8F8FD]">
        <div className="flex container mx-auto p-10 items-center justify-between  ">
          <div className="hidden lg:flex text-3xl font-[1000] ">Open Jobs</div>
          <div className="lg:hidden flex text-3xl font-[1000] ">
            Open Position
          </div>
          <div className="hidden lg:flex justify-center  justify- content-center items-center gap-2">
            <div className="text-[#4640DE] font-bold">Show all jobs </div>
            <Img
              src="/images/compnay profile landing pages/Stack Section/Icon.png"
              width={24}
              height={12}
              alt=""
            />
          </div>
        </div>
        {/* team memebers  */}
        <div className="grid lg:grid-cols-2 grid-row container mx-auto p-10 gap-7">
          {/* 1 users  */}
          <div
            className="flex flex-col lg:flex-row  bg-white gap-5  lg:gap-3 justify-start
           items-start   p-6 md:h-[149] h-[225] w-full"
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
              <div className="flex flex-row gap-2">
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
          <div
            className="flex flex-col lg:flex-row  bg-white gap-5  lg:gap-3 justify-start
           items-start   p-6 md:h-[149] h-[225] w-full"
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
              <div className="flex flex-row gap-2">
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
            className="flex flex-col lg:flex-row  bg-white gap-5  lg:gap-3 justify-start
           items-start   p-6 md:h-[149] h-[225] w-full"
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
              <div className="flex flex-row gap-2">
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
            className="flex flex-col lg:flex-row  bg-white gap-5  lg:gap-3 justify-start
           items-start   p-6 md:h-[149] h-[225] w-full"
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
              <div className="flex flex-row gap-2">
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
            className="flex flex-col lg:flex-row  bg-white gap-5  lg:gap-3 justify-start
           items-start   p-6 md:h-[149] h-[225] w-full"
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
              <div className="flex flex-row gap-2">
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
            className="flex flex-col lg:flex-row  bg-white gap-5  lg:gap-3 justify-start
           items-start   p-6 md:h-[149] h-[225] w-full"
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
              <div className="flex flex-row gap-2">
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
            className="flex flex-col lg:flex-row  bg-white gap-5  lg:gap-3 justify-start
           items-start   p-6 md:h-[149] h-[225] w-full"
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
              <div className="flex flex-row gap-2">
                <div className="bg-[rgba(22,27,26,0.1)] rounded-2xl px-2 py-1 text-[rgba(86,205,173,100%)]">
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
            className="flex flex-col lg:flex-row  bg-white gap-5  lg:gap-3 justify-start
           items-start   p-6 md:h-[149] h-[225] w-full"
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
              <div className="flex flex-row gap-2">
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
        </div>
      </div>
    </div>
  );
}
