import React from "react";
import Appliedjobtable from "./../ui/Appliedjobtable";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { setLoading } from "../redux/slice/authslice.js";
import { useSelector, useDispatch } from "react-redux";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { toast } from "sonner";

import { setUser } from "../redux/slice/authslice.js";
import { Img } from "react-image";

const Profilecontentsection = () => {
  const { loading } = useSelector((store) => store.auth);
  const { user, loadings } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  if (loadings) return <div>working</div>;

  const isfile = true;
  const [isOpen, setIsOpen] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState({
    fullName: user?.fullName,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    location: user?.profile?.location,
    bio: user?.profile?.bio,
    skills: Array.isArray(user?.profile?.skills)
      ? [...user.profile.skills]
      : [],
    file: user?.profile?.file || null,
    profilePicture: user?.profile?.profilePicture || null,
    coverPicture: user?.profile?.coverPicture || null, 
  });

  const changeEventHandler = (e) => {
    e.preventDefault();

    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const skillarrayinputhandler = (e) => {
    const newSkills = [...input.skills];
    newSkills[index] = e.target.value;
    setInput({ ...input, skills: newSkills });
  };

  const fileChangehandler = (e) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    setInput({ ...input, file });
    
  };
  const profilePhotoHandler = (e) => {
    e.preventDefault();
    const profilePicture = e.target.files?.[0];
    setInput({...input , profilePicture})
  }
  const coverPictureHandler = (e) => {
    e.preventDefault();
    const coverPicture = e.target.files?.[0];
    setInput({...input, coverPicture})
  }
  const OpenEditingHandler = (e) => {
    e.preventDefault();

    setIsOpen(true);
    setIsEditing(false);
  };

  const CloseEditingHandler = (e) => {
    e.preventDefault();
    setIsOpen(false);
    setIsEditing(true);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", input?.fullName);
    formData.append("email", input?.email);
    formData.append("phoneNumber", input?.phoneNumber);
    formData.append("bio", input?.bio);
    formData.append("skills", input?.skills);
    formData.append("location", input?.location);
    formData.append("file", input?.file || null);
    formData.append("profilePicture", input?.profilePicture || null);
    formData.append("coverPicture" , input?.coverPicture || null);

    // See all entries
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
    try {
      const res = await axios.post(
        "http://localhost:8000/api/user/updateProfile",
        formData,
        {
          header: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.success(error?.response?.data?.message);
    }
    setIsEditing(false);
  };

  return (
    <>

      <div className="flex bg-green-600 basis-2/3 flex-col gap-4 text-center items-center justify-center">
        {/* Profile Sections */}
        <div className="flex-1 flex-col w-full">
          {/* profile photo and images section */}
          <div className="relative w-full bg-black h-[140px]">
          {isOpen ? (
                <div>
                 
                  <Img
                    className=" absolute rounded-full"
                    src={user?.profile?.coverPicture}
            
                  />
                </div>
              ) : isfile == true ? (
                <div className="flex flex-col gap-1 w-25"  >
                
                 
                  <Input
                    type="file"
                    onChange={coverPictureHandler}
                    className="p-2 bg-amber-100 w-full"
                    name="coverPicture"
                  />
                  {!loading ? (
                    <>
                      <button
                        onClick={submitHandler}
                        type="submit"
                        className="w-full flex justify-evenly items-center gap-2 bg-indigo-500 text-white rounded"
                      >
                        sv
                      </button>{" "}
                    </>
                  ) : (
                    <>
                      <button
                        type="submit"
                        className="w-full flex justify-evenly items-center gap-2 bg-indigo-500 text-white py-2 rounded"
                      >
                        Processing...
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                      </button>{" "}
                    </>
                  )}
                </div>
              ) : (
                <div>Please add file</div>
              )}
            <div>
              {isEditing ? (
                <div
                  className="absolute top-3 right-3 border-8 border-white bg-yellow-600 w-10 h-10 rounded-full"
                  onClick={OpenEditingHandler}
                ></div>
              ) : (
                <div
                  className="absolute top-3 right-3 border-8 border-white bg-red-600 w-10 h-10 rounded-full"
                  onClick={CloseEditingHandler}
                ></div>
              )}
            </div>{" "}
        
            <div className="absolute top-16 flex justify-center items-center border-8 border-white left-10 bg-red-600 w-40 h-40 rounded-full">
              {isOpen ? (
                <div>
                  <Img
                    className="rounded-full"
                    src={user?.profile?.profilePicture}
                  />{" "}
                </div>
              ) : isfile == true ? (
                <div className="flex flex-col gap-1 w-25"  >
                
                 
                  <Input
                    type="file"
                    onChange={profilePhotoHandler}
                    className="p-2 bg-amber-100 w-full"
                    name="profilePicture"
                  />
                  {!loading ? (
                    <>
                      <button
                        onClick={submitHandler}
                        type="submit"
                        className="w-full flex justify-evenly items-center gap-2 bg-indigo-500 text-white rounded"
                      >
                        sv
                      </button>{" "}
                    </>
                  ) : (
                    <>
                      <button
                        type="submit"
                        className="w-full flex justify-evenly items-center gap-2 bg-indigo-500 text-white py-2 rounded"
                      >
                        Processing...
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                      </button>{" "}
                    </>
                  )}
                </div>
              ) : (
                <div>Please add file</div>
              )}
              {isEditing ? (
                <div
                  className="absolute top-3 right-3 border-8 border-white bg-yellow-600 w-10 h-10 rounded-full"
                  onClick={OpenEditingHandler}
                ></div>
              ) : (
                <div
                  className="absolute top-3 right-3 border-8 border-white bg-red-600 w-10 h-10 rounded-full"
                  onClick={CloseEditingHandler}
                ></div>
              )}
            </div>
          </div>
          {/* content section  */}
          <div className="flex">
            <div className="basis-2/5 bg-blue-600 justify-center items-center text-center"></div>
            {/* content section for profile bio  */}
            <div className="relative basis-4/5 p-4 text-start items-start justify-start flex-col flex gap-2 bg-yellow-700">
              {isEditing ? (
                <div
                  className="absolute top-3 right-3 border-8 border-white bg-yellow-600 w-10 h-10 rounded-full"
                  onClick={OpenEditingHandler}
                ></div>
              ) : (
                <div
                  className="absolute top-3 right-3 border-8 border-white bg-red-600 w-10 h-10 rounded-full"
                  onClick={CloseEditingHandler}
                ></div>
              )}

              {/* Static profile display */}
              {isOpen ? (
                <div>
                  <div>{user?.fullName}</div>
                  <div>Software Engineer at Tech Company</div>
                  <div>San Francisco, CA</div>
                  <div>Available for work</div>
                </div>
              ) : (
                <form className="flex w-full flex-col gap-2 ">
                  <div>Edit Your Data Here</div>
                  Name
                  <Input
                    onChange={changeEventHandler}
                    className=" p-2 bg-amber-100 w-full"
                    type="text"
                    value={input?.fullName}
                    name="fullName"
                  />
                  Location
                  <Input
                    onChange={changeEventHandler}
                    className=" p-2 bg-amber-100 w-full"
                    type="text"
                    value={input?.location}
                    name="location"
                  />
                  {!loading ? (
                    <>
                      <button
                        onClick={submitHandler}
                        type="submit"
                        className="w-full flex justify-evenly items-center gap-2 bg-indigo-500 text-white py-2 rounded"
                      >
                        Save
                      </button>{" "}
                    </>
                  ) : (
                    <>
                      <button
                        type="submit"
                        className="w-full flex justify-evenly items-center gap-2 bg-indigo-500 text-white py-2 rounded"
                      >
                        Processing...
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                      </button>{" "}
                    </>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
        {/* about me  */}
        <div className="flex-1 text-start flex-col w-full">
          {/* Static profile display */}
          <div className="relative bg-amber-500">
            {isEditing ? (
              <div
                className="absolute top-3 right-3 border-8 border-white bg-yellow-600 w-10 h-10 rounded-full"
                onClick={OpenEditingHandler}
              ></div>
            ) : (
              <div
                className="absolute top-3 right-3 border-8 border-white bg-red-600 w-10 h-10 rounded-full"
                onClick={CloseEditingHandler}
              ></div>
            )}
            <h1 className="font-bold">My bio</h1>
            {isOpen ? (
              <>
                <p>{user?.profile?.bio}</p>
              </>
            ) : (
              <form className="flex w-full flex-col gap-2 ">
                <div>Edit Your Data Here</div>

                <textarea
                  onChange={changeEventHandler}
                  className=" p-2 bg-amber-100 w-full"
                  type="text"
                  value={input?.bio}
                  name="bio"
                ></textarea>

                {!loading ? (
                  <>
                    <button
                      onClick={submitHandler}
                      type="submit"
                      className="w-full flex justify-evenly items-center gap-2 bg-indigo-500 text-white py-2 rounded"
                    >
                      Save
                    </button>{" "}
                  </>
                ) : (
                  <>
                    <button
                      type="submit"
                      className="w-full flex justify-evenly items-center gap-2 bg-indigo-500 text-white py-2 rounded"
                    >
                      Processing...
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                    </button>{" "}
                  </>
                )}
              </form>
            )}
          </div>
        </div>
        {/* skills  */}
        <div className="flex-1 text-start flex-col w-full">
          {/* Static profile display */}
          <div className="relative bg-amber-200">
            {isEditing ? (
              <div
                className="absolute top-3 right-3 border-8 border-white bg-yellow-600 w-10 h-10 rounded-full"
                onClick={OpenEditingHandler}
              ></div>
            ) : (
              <div
                className="absolute top-3 right-3 border-8 border-white bg-red-600 w-10 h-10 rounded-full"
                onClick={CloseEditingHandler}
              ></div>
            )}
            <h1 className="font-bold">My Skills</h1>
            {isOpen ? (
              <ul className="flex flex-cols-2 gap-4">
                {input?.skills?.length >= 0 ? (
                  input?.skills?.map((items, index) => (
                    <li key={index} className="bg-cyan-400">
                      {items}
                    </li>
                  ))
                ) : (
                  <span> skills Not found</span>
                )}
              </ul>
            ) : (
              <form className="flex w-full flex-col gap-2 ">
                {input?.skills?.length >= 0 ? (
                  input?.skills?.map((items, index) => (
                    <div key={index} className="flex flex-col">
                      {items}
                      <Input
                        onChange={(e) => {
                          const newSkills = [...input.skills];
                          newSkills[index] = e.target.value;
                          setInput({ ...input, skills: newSkills });
                        }}
                        className=" p-2 bg-amber-100 w-full"
                        type="text"
                        value={items}
                        name="skills"
                      />
                    </div>
                  ))
                ) : (
                  <span> skills Not found</span>
                )}
                {!loading ? (
                  <>
                    <button
                      onClick={submitHandler}
                      type="submit"
                      className="w-full flex justify-evenly items-center gap-2 bg-indigo-500 text-white py-2 rounded"
                    >
                      Save
                    </button>{" "}
                  </>
                ) : (
                  <>
                    <button
                      type="submit"
                      className="w-full flex justify-evenly items-center gap-2 bg-indigo-500 text-white py-2 rounded"
                    >
                      Processing...
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                    </button>{" "}
                  </>
                )}
              </form>
            )}
          </div>
        </div>
        {/* file  */}
        <div className="flex-1 text-start flex-col w-full">
          {/* Static file display */}
          <div className="relative bg-pink-300">
            {isEditing ? (
              <div
                className="absolute top-3 right-3 border-8 border-white bg-yellow-600 w-10 h-10 rounded-full"
                onClick={OpenEditingHandler}
              ></div>
            ) : (
              <div
                className="absolute top-3 right-3 border-8 border-white bg-red-600 w-10 h-10 rounded-full"
                onClick={CloseEditingHandler}
              ></div>
            )}
            <h1 className="font-bold">file</h1>
            {isOpen ? (
              isfile == true ? (
                <a href={user?.profile?.file}>
                  {" "}
                  <img
                    src={user?.profile?.file}
                    height="300px"
                    width="300px"
                    alt=""
                  />
                </a>
              ) : (
                <div>Please add file</div>
              )
            ) : isfile == true ? (
              <>
                <img
                  src={user?.profile?.file}
                  height="300px"
                  width="300px"
                  alt=""
                />
                image name: {user?.profile?.fileOriginalName}
                <Input
                  type="file"
                  onChange={fileChangehandler}
                  className="p-2 bg-amber-100 w-full"
                  name="file"
                />
                {!loading ? (
                  <>
                    <button
                      onClick={submitHandler}
                      type="submit"
                      className="w-full flex justify-evenly items-center gap-2 bg-indigo-500 text-white py-2 rounded"
                    >
                      Save
                    </button>{" "}
                  </>
                ) : (
                  <>
                    <button
                      type="submit"
                      className="w-full flex justify-evenly items-center gap-2 bg-indigo-500 text-white py-2 rounded"
                    >
                      Processing...
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                    </button>{" "}
                  </>
                )}
              </>
            ) : (
              <div>Please add file</div>
            )}
            <br />
          </div>
        </div>
        {/* Abi Sab ko ak hi page main rakta hian bad main sa ko different pagea main add kar dain ga as well samju ka ya dashboar paga ha. */}
        {/* applied jobs table  */}
        <div className="flex-1 text-start flex-col w-full">
          {/* Static profile display */}
          <div className=" bg-pink-300">
            <h1 className="font-bold">Job Applied</h1>
            <Appliedjobtable />
          </div>
        </div>
      </div>
      <div className=" basis-1/3 flex gap-4 flex-col bg-purple-500  justify-start items-center">
        <div className="relative bg-indigo-600 w-full flex  flex-col  gap-4">
          {isEditing ? (
            <div
              className="absolute top-3 right-3 border-8 border-white bg-yellow-600 w-10 h-10 rounded-full"
              onClick={OpenEditingHandler}
            ></div>
          ) : (
            <div
              className="absolute top-3 right-3 border-8 border-white bg-red-600 w-10 h-10 rounded-full"
              onClick={CloseEditingHandler}
            ></div>
          )}
          <h1 className="font-bold">Additional Information</h1>
          {isOpen ? (
            <>
              {" "}
              <div className="bg-amber-300 items-center justify-center flex flex-between gap-4">
                icon
                <div className="flex flex-col ">
                  <h3>Email</h3>
                  <p>{user?.email}</p>
                </div>
              </div>
              <div className="bg-amber-300 items-center justify-center flex flex-between gap-4">
                icon
                <div className="flex flex-col ">
                  <h3>Phone Number</h3>
                  <p>{user?.phoneNumber}</p>
                </div>
              </div>{" "}
              <div className="bg-amber-300 items-center justify-center flex flex-between gap-4">
                icon
                <div className="flex flex-col ">
                  <h3>Location</h3>
                  <p>{user?.profile?.location}</p>
                </div>
              </div>{" "}
            </>
          ) : (
            <form className="flex w-full flex-col gap-2 ">
              Email:
              <Input
                onChange={changeEventHandler}
                type="email"
                name="email"
                value={input?.email}
                className=" p-2 bg-amber-100 w-full"
              />
              Email:
              <Input
                onChange={changeEventHandler}
                type="text"
                name="phoneNumber"
                value={input?.phoneNumber}
                className=" p-2 bg-amber-100 w-full"
              />
              Email:
              <Input
                onChange={changeEventHandler}
                type="text"
                value={input?.location}
                name="location"
                className=" p-2 bg-amber-100 w-full"
              />
              {!loading ? (
                <>
                  <button
                    onClick={submitHandler}
                    type="submit"
                    className="w-full flex justify-evenly items-center gap-2 bg-indigo-500 text-white py-2 rounded"
                  >
                    Save
                  </button>{" "}
                </>
              ) : (
                <>
                  <button
                    type="submit"
                    className="w-full flex justify-evenly items-center gap-2 bg-indigo-500 text-white py-2 rounded"
                  >
                    Processing...
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                  </button>{" "}
                </>
              )}
            </form>
          )}
        </div>
        <div className="relative bg-amber-600 w-full flex flex-col gap-4">
          <div className="absolute top-3 right-3 border-8 border-white bg-yellow-600 w-10 h-10 rounded-full"></div>
          <h1 className="font-bold">Social Informations</h1>
          {isOpen ? (
            <>
              <div className="bg-red-500 items-center justify-center flex  flex-between gap-4">
                icon
                <div className="flex flex-col ">
                  <h3>Email</h3>
                  <p>abubakerasifdar100@gmail.com</p>
                </div>
              </div>
              <div className="bg-red-500 items-center justify-center flex flex-between gap-4">
                icon
                <div className="flex flex-col ">
                  <h3>Email</h3>
                  <p>abubakerasifdar100@gmail.com</p>
                </div>
              </div>
            </>
          ) : (
            <form className="flex w-full flex-col gap-2 ">
              Email:
              <Input
                name="email"
                onChange={changeEventHandler}
                type="email"
                value={input?.email}
                className=" p-2 bg-amber-100 w-full"
              />
              Email:
              <Input
                type="email"
                name="email"
                onChange={changeEventHandler}
                value={input?.email}
                className=" p-2 bg-amber-100 w-full"
              />
              Email:
              <Input
                onChange={changeEventHandler}
                type="email"
                value={input?.email}
                className=" p-2 bg-amber-100 w-full"
              />
              {!loading ? (
                <>
                  <button
                    onClick={submitHandler}
                    type="submit"
                    className="w-full flex justify-evenly items-center gap-2 bg-indigo-500 text-white py-2 rounded"
                  >
                    Save
                  </button>{" "}
                </>
              ) : (
                <>
                  <button
                    type="submit"
                    className="w-full flex justify-evenly items-center gap-2 bg-indigo-500 text-white py-2 rounded"
                  >
                    Processing...
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                  </button>{" "}
                </>
              )}
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Profilecontentsection;
