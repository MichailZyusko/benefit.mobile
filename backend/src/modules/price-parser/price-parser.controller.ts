import { Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { PriceParserService } from "./price-parser.service";

@Controller('price-parser')
export class PriceParserController {
  constructor(
    private readonly priceParserService: PriceParserService
  ) {}

  @Post('update-price-info')
  @HttpCode(HttpStatus.CREATED)
  async updatePriceInfo(): Promise<void> {
    await this.priceParserService.updatePriceInfo();
  }
}
