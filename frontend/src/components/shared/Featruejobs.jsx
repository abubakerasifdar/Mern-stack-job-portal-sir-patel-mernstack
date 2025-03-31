import React from "react";
import { Img } from "react-image";
import { useNavigate } from "react-router-dom";
const jobs = [1, 2, 3, 4];
const Featruejobs = () => {
  const navigate = useNavigate();
  const jobId = "23402304";
  return (
    <>
      {/* 5 Features Jobs section start */}
      <section className="container p-10 mx-auto">
        <div className="flex py-4 justify-between items-center">
          <div className="text-3xl font-extrabold">
            Featured<span className="text-[#26A4FF]"> jobs</span>{" "}
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
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 py-4">
          {jobs.map((items, index) => (
            <div className="grid grid-cols gap-4 border p-3 border-b-slate-300">
              <div className="flex flex-row justify-between items-center">
                <Img
                  src="/images/Company Logo/Property 1=Revolut.png"
                  width={60}
                  height={60}
                />
                <div className="border border-[#4640DE] p-1 text-[#4640DE]">
                  Full Time
                </div>
              </div>

              <div className="font-bold ">
                Email Marketing <br />
                <span className="font-light">Revolut . Madrid, Spain</span>{" "}
              </div>
              <div>
                Recolute is looking for Email Marketing to help teams
                managers...
              </div>
              <div className="flex flex-row gap-4">
                <div className="bg-[#eb86333d] p-2 font-bold rounded-3xl text-[#EB8533]">
                  Marketing
                </div>
                <div className="bg-[#56cdad3f] p-2 font-bold rounded-3xl text-[#56cdad]">
                  Design
                </div>
              </div>

              <div className="flex justify-between">
              <div
                onClick={() => navigate(`/jobdesc/${jobId}`)}
                className="bg-[#4640DE]   text-center flex w-auto text-white items-center justify-center p-2 font-bold "
              >
                Save For Later 
              </div><div
                onClick={() => navigate(`/jobdesc/${jobId}`)}
                className="bg-[#4640DE]   text-center flex w-auto text-white items-center justify-center p-2 font-bold "
              >
                More Details ...
              </div>
              </div>
            </div>
          ))}

          <div className="grid grid-cols gap-4 border p-3 border-b-slate-300">
            <div className="flex flex-row justify-between items-center">
              <Img
                src="/images/Company Logo/Property 1=Dropbox.png"
                width={60}
                height={60}
              />
              <div className="border border-[#4640DE] p-1 text-[#4640DE]">
                Full Time
              </div>
            </div>

            <div className="font-bold ">
              Brand Designer <br />
              <span className="font-light">
                Dropbox . San Fransisco, US
              </span>{" "}
            </div>
            <div>
              Dropbox is looking for Brand Designer to help teams managers...
            </div>
            <div className="flex flex-row gap-4">
              <div className="bg-[#56cdad3f] p-2 font-bold rounded-3xl text-[#56cdad]">
                Design
              </div>
              <div className="bg-[#4640DE3d] p-2 font-bold rounded-3xl text-[#4640DE]">
                Bussiness
              </div>
            </div>
          </div>
          <div className="grid grid-cols gap-4 border p-3 border-b-slate-300">
            <div className="flex flex-row justify-between items-center">
              <Img
                src="/images/Company Logo/Property 1=Pitch.png"
                width={60}
                height={60}
              />
              <div className="border border-[#4640DE] p-1 text-[#4640DE]">
                Full Time
              </div>
            </div>

            <div className="font-bold ">
              Email Marketing <br />
              <span className="font-light">Pitch . Berlin, Germany</span>{" "}
            </div>
            <div>
              Pitch is looking for Customer Manager to join marketing t...
            </div>
            <div className="flex flex-row gap-4">
              <div className="bg-[#eb86333d] p-2 font-bold rounded-3xl text-[#EB8533]">
                Marketing
              </div>
            </div>
          </div>
          <div className="grid grid-cols gap-4 border p-3 border-b-slate-300">
            <div className="flex flex-row justify-between items-center">
              <Img
                src="/images/Company Logo/Property 1=Blinkist.png"
                width={60}
                height={60}
              />
              <div className="border border-[#4640DE] p-1 text-[#4640DE]">
                Full Time
              </div>
            </div>

            <div className="font-bold ">
              Email Marketing <br />
              <span className="font-light">
                Blinklist . Granada, Spain
              </span>{" "}
            </div>
            <div>
              Blinkist is looking for Visual Designer to help team desi...
            </div>
            <div className="flex flex-row gap-4">
              <div className="bg-[#56cdad3f] p-2 font-bold rounded-3xl text-[#56cdad]">
                Design
              </div>
            </div>
          </div>
          <div className="grid grid-cols gap-4 border p-3 border-b-slate-300">
            <div className="flex flex-row justify-between items-center">
              <Img
                src="/images/Company Logo/Property 1=ClassPass.png"
                width={60}
                height={60}
              />
              <div className="border border-[#4640DE] p-1 text-[#4640DE]">
                Full Time
              </div>
            </div>

            <div className="font-bold ">
              Product Designer <br />
              <span className="font-light">
                ClassPass . Manchester, UK
              </span>{" "}
            </div>
            <div>ClassPass is looking for Product Designer to help us... </div>
            <div className="flex flex-row gap-4">
              <div className="bg-[#eb86333d] p-2 font-bold rounded-3xl text-[#EB8533]">
                Marketing
              </div>
              <div className="bg-[#56cdad3f] p-2 font-bold rounded-3xl text-[#56cdad]">
                Design
              </div>
            </div>
          </div>
          <div className="grid grid-cols gap-4 border p-3 border-b-slate-300">
            <div className="flex flex-row justify-between items-center">
              <Img
                src="/images/Company Logo/Property 1=Canva.png"
                width={60}
                height={60}
              />
              <div className="border border-[#4640DE] p-1 text-[#4640DE]">
                Full Time
              </div>
            </div>

            <div className="font-bold ">
              Lead Designer <br />
              <span className="font-light">Canva . Ontario, Canada</span>{" "}
            </div>
            <div>Canva is looking for Lead Engineer to help develop n ... </div>
            <div className="flex flex-row gap-4">
              <div className="bg-[#56cdad3f] p-2 font-bold rounded-3xl text-[#56cdad]">
                Design
              </div>
              <div className="bg-[#4640DE3d] p-2 font-bold rounded-3xl text-[#4640DE]">
                Bussiness
              </div>
            </div>
          </div>
          <div className="grid grid-cols gap-4 border p-3 border-b-slate-300">
            <div className="flex flex-row justify-between items-center">
              <Img
                src="/images/Company Logo/Property 1=GoDaddy.png"
                width={60}
                height={60}
              />
              <div className="border border-[#4640DE] p-1 text-[#4640DE]">
                Full Time
              </div>
            </div>

            <div className="font-bold ">
              Brand Strategist <br />
              <span className="font-light">
                GoDaddy . Marseille, France
              </span>{" "}
            </div>
            <div>
              GoDaddy is looking for Brand Strategist to join the team...{" "}
            </div>
            <div className="flex flex-row gap-4">
              <div className="bg-[#eb86333d] p-2 font-bold rounded-3xl text-[#EB8533]">
                Marketing
              </div>
            </div>
          </div>
          <div className="grid grid-cols gap-4 border p-3 border-b-slate-300">
            <div className="flex flex-row justify-between items-center">
              <Img
                src="/images/Company Logo/Property 1=Twitter.png"
                width={60}
                height={60}
              />
              <div className="border border-[#4640DE] p-1 text-[#4640DE]">
                Full Time
              </div>
            </div>

            <div className="font-bold ">
              Data Analyst <br />
              <span className="font-light">Twitter . San Diego, US</span>{" "}
            </div>
            <div>Twitter is looking for Data Analyst to help team desi ...</div>
            <div className="flex flex-row gap-4">
              <div className="bg-[#FF65503d] p-2 font-bold rounded-3xl text-[#FF6550]">
                Technology
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Jos section ended */}
    </>
  );
};

export default Featruejobs;
