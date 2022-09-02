import { ArgsType, Field } from '@nestjs/graphql';
import { IsString, MaxLength } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MaxLength(13)
  barcode: string;

  @IsString()
  @MaxLength(50)
  name: string;

  @IsString()
  @MaxLength(500)
  description: string;

  image?: string;
}

@ArgsType()
export class CreateProductArgs {
  @Field()
  @IsString()
  @MaxLength(13)
  barcode: string;

  @Field()
  @IsString()
  @MaxLength(50)
  name: string;

  @Field()
  @IsString()
  @MaxLength(500)
  description: string;

  @Field({ nullable: true })
  image?: string;
}
