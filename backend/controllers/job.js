import JobModel from "../models/job.js";
class jobController {
  // admin area jobs

  // post job controller
  static post = async (req, res) => {
    try {
      const {
        title,
        description,
        salary,
        location,
        jobType,
        experience,
        position,
        companyId,
      } = req.body;
      const userId = req.id;
      if (
        !title ||
        !description ||
        !salary ||
        !location ||
        !jobType ||
        !experience ||
        !position ||
        !companyId
      ) {
        return res.json({
          error: "please provide all feilds",
          success: false,
        });
      }
      const job = await JobModel.create({
        title,
        description,
        salary: Number(salary),
        location,
        jobType,
        experience,
        position,
        company: companyId,
        created_by: userId,
      });
      return res.status(200).json({
        job,
        success: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //   get all job
  static getalluserjobs = async (req, res) => {
    try {
      const userId = req.id;
    
      const jobs = await JobModel.find({ created_by: userId }).populate({
          path: "company",
          select: "name location", // Specify fields you want
          options: { sort: { createdAt: -1 } }, // Fixed typo: created_At → createdAt
        })
        .populate({
          path: "applications",
          options: { sort: { created_At: -1 } },
          populate: {
            path: "applicant",
          },
        });
      if (!jobs) {
        return res.json({
          message: "no job posted yet",
          success: false,
        });
      }
      return res.json({
        jobs,
        success: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //   get single job
  static getsingleuserjobs = async (req, res) => {
    try {
      const jobId = req.params.id;
      const jobs = await JobModel.findById(jobId);
      if (!jobs) {
        return res.json({
          message: "this job is not exist",
          success: false,
        });
      }
      return res.json({
        jobs,
        success: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // update job controller
  static update = async (req, res) => {
    try {
      const {
        title,
        description,
        salary,
        location,
        jobType,
        experience,
        position,
      } = req.body;
      const jobId = req.params.id;
      const updateData = {
        title,
        description,
        salary,
        location,
        jobType,
        experience,
        position,
      };

      const jobs = await JobModel.findByIdAndUpdate(jobId, updateData, {
        new: true,
      });
      if (!jobs) {
        return res.json({
          message: "company dose not exist",
          success: false,
        });
      }
      return res.json({
        jobs,
        success: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //   student area job or client side jobs
  // get all job controller
  static getAll = async (req, res) => {
    try {
      const keyword = req.query.keyword || "";
      const query = {
        $or: [
          { title: { $regex: keyword, $options: "i" } },
          { description: { $regex: keyword, $options: "i" } },
        ],
      };
      const jobs = await JobModel.find(query).populate({
        path: "company",
        select: "name location", // Specify fields you want
        options: { sort: { createdAt: -1 } }, // Fixed typo: created_At → createdAt
      })
      .populate({
        path: "applications",
        options: { sort: { created_At: -1 } },
        populate: {
          path: "applicant",
        },
      });;
      if (!jobs) {
        return res.json({
          error: "job does not exit",
          success: false,
        });
      }
      return res.json({
        jobs,
        success: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // single job by id controller
  static single = async (req, res) => {
    try {
      const jobId = req.params.id;
      const job = await JobModel.findById(jobId).populate({
        path: "company",
        select: "name location", // Specify fields you want
        options: { sort: { createdAt: -1 } }, // Fixed typo: created_At → createdAt
      })
      .populate({
        path: "applications",
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "applicant",
        },
      });
      if (!job) {
        return res.json({
          message: "job does not exist",
          success: false,
        });
      }
      return res.json({
        job,
        message:"Job Get Successfully",
        success: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export default jobController;
