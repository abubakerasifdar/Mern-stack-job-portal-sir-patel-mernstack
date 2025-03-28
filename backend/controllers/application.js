import JobModel from "../models/job.js";
import ApplicationModel from "../models/application.js";

class Application {
  // applicant controllers
  // Apply Job
  static applyJob = async (req, res) => {
    try {
      const userId = req.id;
      const jobId = req.params.id;
      if (!jobId) {
        return res.json({
          message: "job id is required",
          success: false,
        });
      }
      // check job exiting or not
      const job = await JobModel.findById(jobId);
      if (!job) {
        return res.json({
          message: "job does not existing",
          success: false,
        });
      }
      // check the user already apply or not
      const existingApplication = await ApplicationModel.findOne({
        job: jobId,
        applicant: userId,
      });
      if (existingApplication) {
        return res.json({
          message: "user already applied",
          success: false,
        });
      }

      const newApplication = await ApplicationModel.create({
        job: jobId,
        applicant: userId,
      });
      job.applications.push(newApplication._id);
      await job.save();
      return res.json({
        mesasge: "job applied successfully",
        success: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // all Apply Jobs
  static getalluserapplication = async (req, res) => {
    try {
      const userId = req.id;
      const applications = await ApplicationModel.find({ applicant: userId })
        .sort({ created_At: -1 })
        .populate({
          path: "job",
          options: { sort: { created_At: -1 } },
          populate: {
            path: "company",
            options: { sort: { created_At: -1 } },
          },
        });
      if (!applications) {
        return res.json({
          message: "No Application Found",
          success: true,
        });
      }
      return res.status(200).json({
        applications,
        success: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //   admin side controllers
  // Apply Job
  static getapplicants = async (req, res) => {
    try {
      const jobId = req.params.id;
      const job = await JobModel.findById(jobId).populate({
        path: "applications",
        options: { sort: { created_At: -1 } },
        populate: {
          path: "applicant",
        },
      });
      if (!job) {
        return res.status(200).json({
          message: "job not found",
          success: false,
        });
      }

      return res.status(200).json({
        job,
        success: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // update the status of Job
  static updateStatus = async (req, res) => {
    try {
      const { status } = req.body;
      const applicantId = req.params.id;
      if (!applicantId) {
        return res.json({
          message: "invalid id of company",
          success: false,
        });
      }
      // find application by applicant id
      const findApplication = await ApplicationModel.findById(applicantId);
      if (!findApplication) {
        return res.json({
          message: "application is not found",
          success: false,
        });
      }
      findApplication.status = status.toLowerCase();
      await findApplication.save();
      return res.status(200).json({
        message: "updated",
        success: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export default Application;
