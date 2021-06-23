import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelModule } from './hotel/hotel.module';
import { HospedeModule } from './hospede/hospede.module';
import { QuartoHotelModule } from './quarto-hotel/quarto-hotel.module';
import { CategoriaQuartoModule } from './categoria-quarto/categoria-quarto.module';

@Module({
  imports: [HotelModule, HospedeModule, QuartoHotelModule, CategoriaQuartoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
