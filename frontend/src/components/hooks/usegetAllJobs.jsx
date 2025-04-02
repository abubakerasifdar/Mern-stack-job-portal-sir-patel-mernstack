import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {setAllJobs} from "../redux/slice/jobslice.js";


const usegetAllJobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllJob = async () => {
      try {
        const {data} = await axios.get("http://localhost:8000/api/job/get", {
          withCredentials: true,
        });
       
        if(data.success){
          dispatch(setAllJobs(data.jobs))
        }
    
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllJob();
  }, []);
};

export default usegetAllJobs;