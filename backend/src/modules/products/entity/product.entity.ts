import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    length: 5000,
  })
  description: string;

  @Column("decimal", { precision: 5, scale: 2 })
  price: number;

  @Column({
    nullable: true
  })
  image: string;

  @Column()
  barcode: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
