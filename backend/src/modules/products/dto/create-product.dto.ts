export class CreateProductDto {
  name: string;
  description: string;
  price: number;
  image: string | null;
  barcode: string;
}
