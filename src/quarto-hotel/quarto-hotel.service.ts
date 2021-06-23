import { Injectable } from '@nestjs/common';
import { CreateQuartoHotelDto } from './dto/create-quarto-hotel.dto';
import { UpdateQuartoHotelDto } from './dto/update-quarto-hotel.dto';

@Injectable()
export class QuartoHotelService {
  create(createQuartoHotelDto: CreateQuartoHotelDto) {
    return 'This action adds a new quartoHotel';
  }

  findAll() {
    return `This action returns all quartoHotel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} quartoHotel`;
  }

  update(id: number, updateQuartoHotelDto: UpdateQuartoHotelDto) {
    return `This action updates a #${id} quartoHotel`;
  }

  remove(id: number) {
    return `This action removes a #${id} quartoHotel`;
  }
}
