import { ArgsType, Field } from '@nestjs/graphql';
import { IsString, MaxLength } from 'class-validator';

export class GetProductByBarcode {
  @IsString()
  @MaxLength(13)
  barcode: string;
}

@ArgsType()
export class GetProductByBarcodeArgs {
  @Field()
  @IsString()
  @MaxLength(13)
  barcode: string;
}
