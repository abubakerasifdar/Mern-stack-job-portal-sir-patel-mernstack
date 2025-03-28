import CompanyModel from "../models/company.js";
class CompanyController {
  static createCompany = async (req, res) => {
    try {
      const { name } = req.body;
      if (!name) {
        res.status(400).json({
          message: "Company Name is required",
          success: false,
        });
      }
      const company = await CompanyModel.findOne({ name });
      if (company) {
       return  res.status(400).json({
          message: "Company already created",
          success: false,
        });
      }
      const companyData = await CompanyModel.create({
        name,
        userId: req.id,
      });
      return res.status(400).json({
        company:companyData,
        message: "Company Created Successfully",
        success: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
  static getAllCompany = async (req, res) => {
    try {
      const userId = req.id;
      const company = await CompanyModel.find({ userId });
      if (!company) {
        return res.status({
          message: "company does not found",
          success: false,
        });
      }
      return res.status(400).json({
        company,
        success: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
  static getSingleCompany = async (req, res) => {
    try {
      const companyId = req.params.id;
      const company = await CompanyModel.findById( companyId );
      if (!company) {
        return res.json({
          message: "Company Does Not exist with this name",
          success: false,
        });
      }
      return res.status(400).json({
        company,
        success: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
  static updateCompany = async (req, res) => {
    try {
      const { name, description, website, location } = req.body;
      const file = req.file;
      const updateData = {
        name,
        description,
        website,
        location,
      };
      const company = await CompanyModel.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true }
      );
      if (!company) {
        return res.json({
          message: "company dose not exist",
          success: false,
        });
      }
      return res.json({
        company,
        success: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export default CompanyController;
