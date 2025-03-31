import React from "react";
import { Img } from "react-image";
const CTA = () => {
  return (
    <>
      {" "}
      {/* 4  CTA section start  */}
      <section className=" container p-10 mx-auto">
        
        <div className="relative flex lg:flex-row flex-col justify-center items-center">
          <svg
            className=" lg:hidden flex"
            width="375"
            height="640"
            viewBox="0 0 375 640"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 63.5V640H198.712L375 545.5V0H128.706L0 63.5Z"
              fill="#4640DE"
            />
          </svg>
          <svg
            width="1192"
            className="hidden lg:flex"
            height="414"
            viewBox="0 0 1192 414"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 63.5V414H999.712L1192 319.5V0H128.706L0 63.5Z"
              fill="#4640DE"
            />
          </svg>
          <div className=" flex lg:flex-row flex-col gap-4 absolute w-full    justify-around items-center">
            <div className="flex w-full lg:w-auto flex-col gap-4">
              <div className="font-bold text-4xl text-white">
                Start posting <br /> jobs today
              </div>
              <span className="text-white">
                Start posting jobs for only $10.
              </span>
              <div className="bg-white text-center font-bold text-[#4640DE] p-2">
                Sign Up For Free
              </div>
            </div>
            <Img
              src="/images/FrontPages/Dashboard.jpg"
              width={540}
              height={400}
              className="items-end"
            />
          </div>
        </div>
      </section>
      {/* CTA Section ended  */}
    </>
  );
};

export default CTA;
