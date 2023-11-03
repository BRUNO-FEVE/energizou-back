import { Request, Response } from "express";
import { z } from "zod";
import { CreateCompanyUsecase } from "../../use-cases/create-company/create-company-usecase";
import { GetUserUsecase } from "../../use-cases/get-user/get-user-usecase";
import { GetCompanyUsecase } from "../../use-cases/get-company/get-company-usecase";
import GetAllCompaniesByUserUsecase from "../../use-cases/get-all-companies-by-user/get-all-companies-by-user-usecase";
import { DeleteCompanyUsecase } from "../../use-cases/delete-company/delete-company-usecase";
import { UpdateCompanyUsecase } from "../../use-cases/update-company/update-company-usecase";

export class CompanyController {
  constructor(
    private createCompanyUsecase: CreateCompanyUsecase,
    private getCompanyUsecase: GetCompanyUsecase,
    private getUserUsecase: GetUserUsecase,
    private getAllCompaniesByUser: GetAllCompaniesByUserUsecase,
    private deleteCompanyUsecase: DeleteCompanyUsecase,
    private updateCompanyUsecase: UpdateCompanyUsecase
  ) {}

  async create(request: Request, response: Response) {
    const bodyValidation = z.object({
      cnpj: z.string(),
      name: z.string(),
      cep: z.number(),
      address: z.string(),
      address_number: z.number(),
      phone: z.number(),
    });

    const { cnpj, name, cep, address, address_number, phone } =
      bodyValidation.parse(request.body);

    const { userId } = request.params;

    try {
      const user = await this.getUserUsecase.execute({
        user_id: userId,
      });

      if (!user) {
        response.status(404).json("User Not Exists");
      }

      const newCompany = await this.createCompanyUsecase.execute({
        cnpj,
        name,
        cep,
        address,
        address_number,
        phone,
        user,
      });

      response.status(201).json(newCompany);
    } catch (error: any) {
      console.error("Error creating company:", error);
      response.status(500).json({ error: error.message });
    }
  }

  async get(request: Request, response: Response) {
    const { companyCnpj } = request.params;

    try {
      const company = await this.getCompanyUsecase.execute({
        company_cnpj: companyCnpj,
      });

      response.status(200).json(company);
    } catch (error: any) {
      console.error("Error getting company:", error);
      response.status(500).json({ error: error.message });
    }
  }

  async getAllByUserId(request: Request, response: Response) {
    const { userId } = request.params;

    try {
      const user = await this.getUserUsecase.execute({
        user_id: userId,
      });

      if (!user) {
        response.status(404).json("User Not Exists");
      }

      const companies = await this.getAllCompaniesByUser.execute({ user });

      response.status(200).json(companies);
    } catch (error: any) {
      console.error("Error getting company:", error);
      response.status(500).json({ error: error.message });
    }
  }

  async delete(request: Request, response: Response) {
    const { userId, companyCnpj } = request.params;

    try {
      const company = await this.deleteCompanyUsecase.execute({
        userId,
        companyCnpj,
      });

      response.status(200).json(company);
    } catch (error: any) {
      console.error("Error deleting company:", error);
      response.status(500).json({ error: error.message });
    }
  }

  async update(request: Request, response: Response) {
    const bodyValidation = z.object({
      cnpj: z.string().optional(),
      name: z.string().optional(),
      cep: z.number().optional(),
      address: z.string().optional(),
      address_number: z.number().optional(),
      phone: z.number().optional(),
    });

    const { cnpj, name, cep, address, address_number, phone } =
      bodyValidation.parse(request.body);

    const newCnpj = cnpj;

    const { userId, currentCnpj } = request.params;

    try {
      const company = await this.getCompanyUsecase.execute({
        company_cnpj: currentCnpj,
      });

      if (!company) {
        throw new Error("Company Not Exists");
      } else if (company.user.id !== userId) {
        throw new Error("Permission Denied");
      }

      const companyUpdated = await this.updateCompanyUsecase.execute({
        userId,
        currentCnpj,
        newCnpj,
        address,
        address_number,
        cep,
        name,
        phone,
      });

      response.status(200).json(companyUpdated);
    } catch (error: any) {
      console.error("Error updating company:", error);
      response.status(500).json({ error: error.message });
    }
  }
}
