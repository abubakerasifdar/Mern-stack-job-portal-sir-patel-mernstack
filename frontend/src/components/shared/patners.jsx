import React from 'react'

import { Img } from 'react-image';
const Partner = () => {
  return (
    <div><div className="container p-10 mx-auto flex flex-col gap-4">
    <div className="text-[#202430] opacity-[60%] p-1 font-bold">
      Companies we help grow
    </div>
    <div className="grid grid-cols-2  gap-4 lg:flex justify-between items-center ">
      {/* 1 images  */}
      <Img
        src="/images/FrontPages/vodafone-2017-logo.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "auto", height: "auto" }}
        alt="website"
      />
      {/* 2 images  */}
      <Img
        src="/images/FrontPages/intel-3.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "auto", height: "auto" }}
        alt="website"
      />
      {/* 3 images  */}
      <Img
        src="/images/FrontPages/talkit 1.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "auto", height: "auto" }}
        alt="website"
      />
      {/*4 images  */}
      <Img
        src="/images/FrontPages/amd-logo-1.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "auto", height: "auto" }}
        alt="website"
      />
      {/* 5 images  */}
      <Img
        src="/images/FrontPages/tesla-9 1.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "auto", height: "auto" }}
        alt="website"
      />
    </div>
  </div></div>
  )
}

export default Partner