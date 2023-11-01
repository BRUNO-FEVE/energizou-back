import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./User";

@Entity("companies")
export class Company {
  @PrimaryColumn({ unique: true, type: "varchar", length: 18 })
  cnpj: string;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "text" })
  cep: string;

  @Column({ type: "text" })
  address: string;

  @Column({ type: "text" })
  number: string;

  @Column({ type: "text" })
  phone: string;

  @ManyToOne(() => User, (user) => user.companies)
  @JoinColumn({ name: "user_id" })
  user: User;
}
