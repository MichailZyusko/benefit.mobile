import { ArgsType, Field } from '@nestjs/graphql';
import { IsNumber, IsPositive, IsString, Max } from 'class-validator';

export class GetProductsDto {
  @IsNumber()
  @IsPositive()
  @Max(50)
  take?: number = 10;

  @IsNumber()
  skip?: number = 0;

  @IsString()
  search?: '';
}

@ArgsType()
export class GetProductsArgs {
  @Field({ nullable: true, defaultValue: 10 })
  @IsNumber()
  @IsPositive()
  @Max(50)
  take?: number;

  @Field({ nullable: true, defaultValue: 0 })
  @IsNumber()
  skip?: number;

  @Field({ nullable: true, defaultValue: '' })
  @IsString()
  search?: string;
}
