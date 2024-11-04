import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Column({ type: 'varchar', length: 15 })
  username: string;

  @Column({ type: 'varchar', length: 40 })
  email: string;

  @Column({ type: 'int'})
  age: number;

  @Column({ type: 'varchar'})
  password: string;

  @Column({ type: 'enum', enum: ['m', 'f', 'u']})
  gender: string;
}
