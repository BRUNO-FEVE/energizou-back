import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Company } from "./Company";

export enum ROLE {
  DEFAULT = "DEFAULT",
  ADMIN = "ADMIN",
}

@Entity("users")
export class User {
  @PrimaryColumn({ unique: true, type: "varchar", length: "36" })
  id: string;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "text" })
  email: string;

  @Column({ type: "text" })
  password: string;

  @Column({ type: "enum", enum: ROLE, default: ROLE.DEFAULT })
  role: string;

  @OneToMany(() => Company, (company) => company.user)
  companies: Company[];
}
