import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
export class User {
  @PrimaryColumn()
  user_id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  constructor(name: string, email: string) {
    if (!this.user_id) {
      this.user_id = uuid();
    }
    this.name = name;
    this.email = email;
  }
}
