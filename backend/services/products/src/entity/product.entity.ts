import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryColumn()
  barcode: string;

  @Column()
  name: string;

  @Column({ length: 5000 })
  description: string;

  @Column({ nullable: true, default: null })
  image: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
