import { Test, TestingModule } from '@nestjs/testing';
import { QuartoHotelController } from './quarto-hotel.controller';
import { QuartoHotelService } from './quarto-hotel.service';

describe('QuartoHotelController', () => {
  let controller: QuartoHotelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuartoHotelController],
      providers: [QuartoHotelService],
    }).compile();

    controller = module.get<QuartoHotelController>(QuartoHotelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
