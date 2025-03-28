import React from 'react'

const Footer = () => {
  return (
    <><footer>
    {/* for upper footer links */}
    <div className="flex justify-between lg:px-10 bg-[#202430] lg:p-10 text-white ">
      <div className="flex flex-col lg:flex-row justify-between container p-10 mx-auto lg:px-10">
        <div className=" lg:w-1/4 md:w/2 w-full lg:px-3 text-base/8 ">
        
      
          <p>
            Great platform for the job seeker that passionate about
            startups. Find your dream job easier.
          </p>
        </div>
        <div>
          <h1 className="font-bold text-base/8 ">About</h1>
          <ul className="text-base/8">
            <li>Companies</li>
            <li>Pricing</li>
            <li>Terms</li>
            <li>Advice</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-base/8 ">Resources</h1>
          <ul className="text-base/8">
            <li>Help Docs</li>
            <li>Guide</li>
            <li>Contact Us</li>
            <li>Updates</li>
          </ul>
        </div>
        <div className="lg:w-1/4 md:w/2 w-full lg:px-3">
          <h1 className="font-bold text-base/8 ">
            Get Jobs Notifications{" "}
          </h1>
          <p>
            The latest Job news, articles and news letter send to you inbox
            weekly
          </p>
          <br />
          <div className="flex flex-col lg:flex-row gap-2 lg:justify-between text-base/8 ">
            <input
              className="p-2"
              type="text"
              placeholder="Email Address"
            />
            <h1 className="bg-[#4640DE] hover:text-[#4640DE] hover:bg-white w-[131px] p-2 font-bold rounded-sm text-white">
              <a href="">Subscribe</a>
            </h1>
          </div>
        </div>
      </div>
    </div>
    <hr />
    {/* for copyright links lower footer */}
    <div className="  bg-[#202430]   ">
      <div className="flex flex-col lg:flex-row p-5 space-y-5 justify-between items-center  text-white  container lg:mx-auto lg:px-10">
        <div>
          <p>2024 @ JobHuntly. All rights reserved</p>
        </div>
        <div className="flex justify-center space-x-6 lg:mt-4 ">
          {/* Facebook */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-800 transition-colors duration-200"
          >
          
          </a>
          {/* Twitter */}
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 transition-colors duration-200"
          >
           
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-700 transition-colors duration-200"
          >
            
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-900 transition-colors duration-200"
          >
          
          </a>
        </div>
      </div>
    </div>
  </footer></>
  )
}

export default Footer