import React from "react";
import { Img } from "react-image";
const Dashboardheader = () => {
  return (
    <div>
      <div className="bg-purple-500 border-b-2 border-[#4640DE]">
        <div className="text-black flex justify-between items-center h-[78px] bg-purple-500  container mx-auto px-5">
          <h1 className="font-bold text-2xl">My Profile</h1>
          <div className="flex gap-4  bg-amber-500 justify-between items-center">
            <div className="border text-[#4640DE] border-[#CCCCF5] p-2 rounded">
              Back to Homepage
            </div>
            <Img
              src="/images/SVG-Icons/Name=Notification New.svg"
              width={24}
              height={24}
              alt="Notifications"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardheader;
