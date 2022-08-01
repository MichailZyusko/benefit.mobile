import { Test, TestingModule } from '@nestjs/testing';
import { PriceParserService } from '../price-parser.service';

describe('PriceParserService', () => {
  let service: PriceParserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PriceParserService],
    }).compile();

    service = module.get<PriceParserService>(PriceParserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
