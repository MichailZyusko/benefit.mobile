import { Test, TestingModule } from '@nestjs/testing';
import { PriceParserController } from '../price-parser.controller';

describe('PriceParserController', () => {
  let controller: PriceParserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PriceParserController],
    }).compile();

    controller = module.get<PriceParserController>(PriceParserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
