import React from "react";
import Footer from "./../shared/Footer";
import Dashboardheader from "./../shared/Dashboardheader";
import Dashboardsidebar from "./../shared/Dashboardsidebar";
import Profilecontentsection from "./../shared/profilecontentsection";



const Profile = () => {
 
  return (
    <div>
      <div className="flex bg-white">
        {/* Sidebar section */}
        <div className="basis-1/6 ">
          <Dashboardsidebar />
        </div>
        {/* Profile content */}
        <div className="basis-5/6  flex flex-col p-3 gap-4">
          <Dashboardheader />
          <div className="flex gap-4 ">
            <Profilecontentsection />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
