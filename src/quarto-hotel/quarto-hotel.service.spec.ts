import { Test, TestingModule } from '@nestjs/testing';
import { QuartoHotelService } from './quarto-hotel.service';

describe('QuartoHotelService', () => {
  let service: QuartoHotelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuartoHotelService],
    }).compile();

    service = module.get<QuartoHotelService>(QuartoHotelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
