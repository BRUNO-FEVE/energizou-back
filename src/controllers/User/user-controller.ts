import { Request, Response } from "express";
import { z } from "zod";
import { CreateUserUsecase } from "../../use-cases/create-user/create-user-usecase";

const ROLES = ["DEFAULT", "ADMIN"];

export class UserController {
  constructor(private createUserUsecase: CreateUserUsecase) {}

  async create(request: Request, response: Response) {
    const bodyValidation = z.object({
      name: z.string(),
      email: z.string(),
      password: z.string(),
      role: z.string().optional().default("DEFAULT"),
    });

    const { name, email, password, role } = bodyValidation.parse(request.body);

    try {
      if (!ROLES.includes(role)) {
        throw new Error("Invalid Role");
      }

      const userSaved = await this.createUserUsecase.execute({
        name,
        email,
        password,
        role,
      });

      response.status(201).json(userSaved);
    } catch (error) {
      console.error("Error creating user:", error);
      response
        .status(500)
        .json({ error: "An error occurred while creating the user." });
    }
  }
}
