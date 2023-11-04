import { Request, Response } from "express";
import { z } from "zod";
import { CreateUserUsecase } from "../../use-cases/create-user/create-user-usecase";
import { GetUserUsecase } from "../../use-cases/get-user/get-user-usecase";

const ROLES = ["DEFAULT", "ADMIN"];

export class UserController {
  constructor(
    private createUserUsecase: CreateUserUsecase,
    private getUserUsecase: GetUserUsecase
  ) {}

  async create(request: Request, response: Response) {
    const bodyValidation = z.object({
      name: z.string(),
      email: z.string().email(),
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
    } catch (error: any) {
      console.error("Error creating user:", error);
      response.status(500).json({ error: error.message });
    }
  }

  async get(request: Request, response: Response) {
    const { userId } = request.params;

    try {
      const user = await this.getUserUsecase.execute({
        userId: userId,
      });

      response.status(200).json(user);
    } catch (error: any) {
      console.error("Error getting user:", error);
      response.status(500).json({ error: error.message });
    }
  }
}
