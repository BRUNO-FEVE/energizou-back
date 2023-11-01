import { Request, Response } from "express";
import { z } from "zod";
import { CreateCompanyUsecase } from "../../use-cases/create-company/create-company-usecase";
import { GetUserUsecase } from "../../use-cases/get-user/get-user-usecase";

export class CompanyController {
  constructor(
    private createCompanyUsecase: CreateCompanyUsecase,
    private getUserUsecase: GetUserUsecase
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
    console.log(userId);

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
}