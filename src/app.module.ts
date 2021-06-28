import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelModule } from './hotel/hotel.module';
import { HospedeModule } from './hospede/hospede.module';
import { QuartoHotelModule } from './quarto-hotel/quarto-hotel.module';
import { CategoriaQuartoModule } from './categoria-quarto/categoria-quarto.module';
import { config } from './orm.config';
import { Connection, ConnectionOptions } from 'typeorm';
import { EntitySchema } from 'typeorm';
import { TypeOrmModule } from  '@nestjs/typeorm';


@Module({
  /*imports: [HotelModule, HospedeModule, QuartoHotelModule, CategoriaQuartoModule, TypeOrmModule.forRoot(config)],
  controllers: [AppController],
  providers: [AppService],*/

  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: '1234',
      database: 'hotelaria',
      entities: [],
      synchronize: true,
    }),
  ],


})
export class AppModule {}
