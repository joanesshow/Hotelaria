import { Module } from '@nestjs/common';
import { QuartoHotelService } from './quarto-hotel.service';
import { QuartoHotelController } from './quarto-hotel.controller';

@Module({
  controllers: [QuartoHotelController],
  providers: [QuartoHotelService]
})
export class QuartoHotelModule {}
