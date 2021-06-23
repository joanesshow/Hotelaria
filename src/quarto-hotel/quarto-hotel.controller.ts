import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuartoHotelService } from './quarto-hotel.service';
import { CreateQuartoHotelDto } from './dto/create-quarto-hotel.dto';
import { UpdateQuartoHotelDto } from './dto/update-quarto-hotel.dto';

@Controller('quarto-hotel')
export class QuartoHotelController {
  constructor(private readonly quartoHotelService: QuartoHotelService) {}

  @Post()
  create(@Body() createQuartoHotelDto: CreateQuartoHotelDto) {
    return this.quartoHotelService.create(createQuartoHotelDto);
  }

  @Get()
  findAll() {
    return this.quartoHotelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quartoHotelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuartoHotelDto: UpdateQuartoHotelDto) {
    return this.quartoHotelService.update(+id, updateQuartoHotelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quartoHotelService.remove(+id);
  }
}
