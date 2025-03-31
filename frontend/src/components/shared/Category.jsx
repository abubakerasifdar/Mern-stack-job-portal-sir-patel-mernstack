import React from "react";
import { Img } from "react-image";

const Category = () => {
  return (
    <>
    
      <section className="container p-10 mx-auto">
        <div className="flex py-4 justify-between items-center">
          <div className="text-3xl font-extrabold">
            Explore by <span className="text-[#26A4FF]">category</span>{" "}
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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 py-4">
          {/* svg 1  */}
          <div className="p-5 border border-slate-400 flex flex-col  gap-3 ">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" text-[#4640DE]"
            >
              <g clip-path="url(#clip0_1_53203)">
                <path
                  d="M3 21.0003H7L20 8.0003C20.5304 7.46987 20.8284 6.75045 20.8284 6.0003C20.8284 5.25016 20.5304 4.53074 20 4.0003C19.4696 3.46987 18.7501 3.17188 18 3.17188C17.2499 3.17188 16.5304 3.46987 16 4.0003L3 17.0003V21.0003Z"
                  stroke="#4640DE"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.5 5.5L18.5 9.5"
                  stroke="#4640DE"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 8L7 3L3 7L8 12"
                  stroke="#4640DE"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 8L5.5 9.5"
                  stroke="#4640DE"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 12L21 17L17 21L12 16"
                  stroke="#4640DE"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 17L14.5 18.5"
                  stroke="#4640DE"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_53203">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="font-bold text-lg ">Design</span>
            <div className="flex justify-between items-center font-bold text-slate-400 ">
              <span>235 Jobs Available </span>
              <Img
                src="/images/Icons/Name=Arrow Right.png"
                width={0}
                height={0}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </div>
          {/* svg 2  */}
          <div className="p-5 border border-slate-400 flex flex-col  gap-3 ">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 11C9.20914 11 11 9.20914 11 7C11 4.79086 9.20914 3 7 3C4.79086 3 3 4.79086 3 7C3 9.20914 4.79086 11 7 11Z"
                stroke="#4640DE"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7 3V7H11"
                stroke="#4640DE"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 17V21"
                stroke="#4640DE"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17 14V21"
                stroke="#4640DE"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13 13V21"
                stroke="#4640DE"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 12V21"
                stroke="#4640DE"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="font-bold text-lg ">Sales</span>
            <div className="flex justify-between items-center font-bold text-slate-400 ">
              <span>756 Jobs Available </span>
              <Img
                src="/images/Icons/Name=Arrow Right.png"
                width={0}
                height={0}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </div>
          {/* svg 3  */}
          <div className="p-5 bg-[#4640DE]  flex flex-col  gap-3 ">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 5.882V19.24C10.9997 19.6545 10.8531 20.0555 10.5861 20.3725C10.3191 20.6895 9.9488 20.9022 9.54041 20.9729C9.13203 21.0437 8.71178 20.968 8.35369 20.7593C7.99561 20.5506 7.72267 20.2222 7.58297 19.832L5.43597 13.682M18 13C18.7956 13 19.5587 12.6839 20.1213 12.1213C20.6839 11.5587 21 10.7956 21 10C21 9.20435 20.6839 8.44129 20.1213 7.87868C19.5587 7.31607 18.7956 7 18 7V13ZM5.43597 13.683C4.58719 13.3221 3.88915 12.6791 3.46 11.8627C3.03084 11.0463 2.89692 10.1067 3.0809 9.2029C3.26488 8.29912 3.75546 7.48665 4.46962 6.903C5.18378 6.31935 6.07765 6.00035 6.99997 6H8.83197C12.932 6 16.457 4.766 18 3V17C16.457 15.234 12.933 14 8.83197 14H6.99997C6.4626 14.0008 5.93062 13.893 5.43597 13.683Z"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="font-bold text-lg text-white ">Marketing</span>
            <div className="text-white flex justify-between items-center font-bold ">
              <span>140 Jobs Available </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.75 11.7256L4.75 11.7256"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.7002 5.701L19.7502 11.725L13.7002 17.75"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* svg 4  */}
          <div className="p-5 border border-slate-400 flex flex-col  gap-3 ">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 9V7C17 6.46957 16.7893 5.96086 16.4142 5.58579C16.0391 5.21071 15.5304 5 15 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V13C3 13.5304 3.21071 14.0391 3.58579 14.4142C3.96086 14.7893 4.46957 15 5 15H7M9 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V11C21 10.4696 20.7893 9.96086 20.4142 9.58579C20.0391 9.21071 19.5304 9 19 9H9C8.46957 9 7.96086 9.21071 7.58579 9.58579C7.21071 9.96086 7 10.4696 7 11V17C7 17.5304 7.21071 18.0391 7.58579 18.4142C7.96086 18.7893 8.46957 19 9 19ZM16 14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16C13.4696 16 12.9609 15.7893 12.5858 15.4142C12.2107 15.0391 12 14.5304 12 14C12 13.4696 12.2107 12.9609 12.5858 12.5858C12.9609 12.2107 13.4696 12 14 12C14.5304 12 15.0391 12.2107 15.4142 12.5858C15.7893 12.9609 16 13.4696 16 14Z"
                stroke="#4640DE"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="font-bold text-lg ">Finance</span>
            <div className="flex justify-between items-center font-bold text-slate-400 ">
              <span>325 Jobs Available </span>
              <Img
                src="/images/Icons/Name=Arrow Right.png"
                width={0}
                height={0}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </div>

          {/* svg 5  */}
          <div className="p-5 border border-slate-400 flex flex-col  gap-3 ">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.75 17L9 20L8 21H16L15 20L14.25 17H9.75ZM3 13H21H3ZM5 17H19C19.5304 17 20.0391 16.7893 20.4142 16.4142C20.7893 16.0391 21 15.5304 21 15V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V15C3 15.5304 3.21071 16.0391 3.58579 16.4142C3.96086 16.7893 4.46957 17 5 17Z"
                stroke="#4640DE"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="font-bold text-lg ">Technology</span>
            <div className="flex justify-between items-center font-bold text-slate-400 ">
              <span>436 Jobs Available </span>
              <Img
                src="/images/Icons/Name=Arrow Right.png"
                width={0}
                height={0}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </div>

          {/* svg 6  */}
          <div className="p-5 border border-slate-400 flex flex-col  gap-3 ">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 20L14 4M18 8L22 12L18 16M6 16L2 12L6 8"
                stroke="#4640DE"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="font-bold text-lg ">Engineering</span>
            <div className="flex justify-between items-center font-bold text-slate-400 ">
              <span>542 Jobs Available </span>
              <Img
                src="/images/Icons/Name=Arrow Right.png"
                width={0}
                height={0}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </div>

          {/* svg 7  */}
          <div className="p-5 border border-slate-400 flex flex-col  gap-3 ">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 13.255C18.1405 14.4112 15.0844 15.0038 12 15C8.817 15 5.78 14.38 3 13.255M12 12H12.01M16 6V4C16 3.46957 15.7893 2.96086 15.4142 2.58579C15.0391 2.21071 14.5304 2 14 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4V6H16ZM5 20H19C19.5304 20 20.0391 19.7893 20.4142 19.4142C20.7893 19.0391 21 18.5304 21 18V8C21 7.46957 20.7893 6.96086 20.4142 6.58579C20.0391 6.21071 19.5304 6 19 6H5C4.46957 6 3.96086 6.21071 3.58579 6.58579C3.21071 6.96086 3 7.46957 3 8V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20Z"
                stroke="#4640DE"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="font-bold text-lg ">Bussiness</span>
            <div className="flex justify-between items-center font-bold text-slate-400 ">
              <span>211 Jobs Available </span>
              <Img
                src="/images/Icons/Name=Arrow Right.png"
                width={0}
                height={0}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </div>

          {/* svg 8  */}
          <div className="p-5 border border-slate-400 flex flex-col  gap-3 ">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 5C11.4696 5 10.9609 5.21071 10.5858 5.58579C10.2107 5.96086 10 6.46957 10 7C10 7.53043 10.2107 8.03914 10.5858 8.41421C10.9609 8.78929 11.4696 9 12 9C12.5304 9 13.0391 8.78929 13.4142 8.41421C13.7893 8.03914 14 7.53043 14 7C14 6.46957 13.7893 5.96086 13.4142 5.58579C13.0391 5.21071 12.5304 5 12 5ZM9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7C16 8.06087 15.5786 9.07828 14.8284 9.82843C14.0783 10.5786 13.0609 11 12 11C10.9391 11 9.92172 10.5786 9.17157 9.82843C8.42143 9.07828 8 8.06087 8 7C8 5.93913 8.42143 4.92172 9.17157 4.17157ZM5 9C4.73478 9 4.48043 9.10536 4.29289 9.29289C4.10536 9.48043 4 9.73478 4 10C4 10.2652 4.10536 10.5196 4.29289 10.7071C4.48043 10.8946 4.73478 11 5 11C5.26522 11 5.51957 10.8946 5.70711 10.7071C5.89464 10.5196 6 10.2652 6 10C6 9.73478 5.89464 9.48043 5.70711 9.29289C5.51957 9.10536 5.26522 9 5 9ZM2.87868 7.87868C3.44129 7.31607 4.20435 7 5 7C5.79565 7 6.55871 7.31607 7.12132 7.87868C7.68393 8.44129 8 9.20435 8 10C8 10.7956 7.68393 11.5587 7.12132 12.1213C6.55871 12.6839 5.79565 13 5 13C4.20435 13 3.44129 12.6839 2.87868 12.1213C2.31607 11.5587 2 10.7956 2 10C2 9.20435 2.31607 8.44129 2.87868 7.87868ZM19 9C18.7348 9 18.4804 9.10536 18.2929 9.29289C18.1054 9.48043 18 9.73478 18 10C18 10.2652 18.1054 10.5196 18.2929 10.7071C18.4804 10.8946 18.7348 11 19 11C19.2652 11 19.5196 10.8946 19.7071 10.7071C19.8946 10.5196 20 10.2652 20 10C20 9.73478 19.8946 9.48043 19.7071 9.29289C19.5196 9.10536 19.2652 9 19 9ZM16.8787 7.87868C17.4413 7.31607 18.2043 7 19 7C19.7957 7 20.5587 7.31607 21.1213 7.87868C21.6839 8.44129 22 9.20435 22 10C22 10.7957 21.6839 11.5587 21.1213 12.1213C20.5587 12.6839 19.7957 13 19 13C18.2043 13 17.4413 12.6839 16.8787 12.1213C16.3161 11.5587 16 10.7957 16 10C16 9.20435 16.3161 8.44129 16.8787 7.87868ZM12 13.9993C11.2003 13.9993 10.4189 14.2389 9.75658 14.6872C9.13228 15.1098 8.64084 15.6996 8.33765 16.3878L8.09655 19H15.9034L15.6623 16.3878C15.3592 15.6996 14.8677 15.1098 14.2434 14.6872C13.5811 14.2389 12.7997 13.9993 12 13.9993ZM18 19H21V18.0001C21 18 21 18.0001 21 18.0001C21 17.5845 20.8704 17.1791 20.6294 16.8405C20.3884 16.5019 20.0479 16.2467 19.6552 16.1106C19.2625 15.9744 18.8371 15.964 18.4382 16.0808C18.2014 16.1501 17.981 16.2621 17.7871 16.41C17.9262 16.9175 18 17.451 18 18V19ZM16.9298 14.5776C16.51 13.9732 15.9804 13.4479 15.3646 13.031C14.3713 12.3587 13.1994 11.9993 12 11.9993C10.8006 11.9993 9.62867 12.3587 8.63543 13.031C8.01963 13.4479 7.49002 13.9732 7.07024 14.5776C6.77575 14.3995 6.45782 14.2591 6.12365 14.1613C5.32584 13.9278 4.47509 13.9486 3.68967 14.2209C2.90425 14.4932 2.22318 15.0035 1.74115 15.6808C1.25911 16.358 1.00006 17.1686 1 17.9999V20C1 20.5523 1.44772 21 2 21H22C22.5523 21 23 20.5523 23 20V18C22.9999 17.1687 22.7409 16.358 22.2589 15.6808C21.7768 15.0035 21.0958 14.4932 20.3103 14.2209C19.5249 13.9486 18.6742 13.9278 17.8763 14.1613C17.5422 14.2591 17.2242 14.3995 16.9298 14.5776ZM6.21295 16.41C6.01904 16.2621 5.79859 16.1501 5.56183 16.0808C5.16292 15.964 4.73754 15.9744 4.34483 16.1106C3.95212 16.2467 3.61159 16.5019 3.37057 16.8405C3.12957 17.1791 3.00005 17.5844 3 18C3 18 3 18 3 18V19H6V18C6 17.451 6.07383 16.9175 6.21295 16.41Z"
                fill="#4640DE"
              />
            </svg>

            <span className="font-bold text-lg ">Human Resource</span>
            <div className="flex justify-between items-center font-bold text-slate-400 ">
              <span>346 Jobs Available </span>
              <Img
                src="/images/Icons/Name=Arrow Right.png"
                width={0}
                height={0}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
