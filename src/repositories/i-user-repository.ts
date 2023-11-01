import { User } from "../entities/User";

export interface UserProps {
  name: string;
  email: string;
  password: string;
  permission?: string;
}

export interface IUserRepository {
  create(user: UserProps): Promise<User>;
}
