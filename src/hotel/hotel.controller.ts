import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';

import { getRepository } from 'typeorm'
import { Request, Response } from 'express'
import { Hotel } from './entities/hotel.entity';
import { QuartoHotelController } from 'src/quarto-hotel/quarto-hotel.controller';




export const getHotels = async (request: Request, response: Response) => {

  const hotel = await getRepository(Hotel).find()
  return response.json(hotel)
};

export const saveHotel = async (request: Request, response: Response) =>{
  const hotel = await getRepository(Hotel).save(request.body)
  response.json(hotel)
};

export const getHotel = async (request: Request, response: Response) =>{
  const { id } = request.params
  const hotel = await getRepository(Hotel).findOne(id)
  return response.json(hotel)
}

export const updateHotel = async (request: Request, response: Response) =>{
  const { id } = request.params 

  const hotel = await getRepository(Hotel).update(id, request.body)
  
  if(hotel.affected == 1){
    const hotelUpdated = await getRepository(Hotel).findOne(id)
    return response.json(hotelUpdated)
  }
  return response.status(404).json({message: 'Não encontrado'})
};


 


@Controller('hotel')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Post()
  create(@Body() createHotelDto: CreateHotelDto) {
    return this.hotelService.create(createHotelDto);
  }

  @Get()
  findAll() {
    return this.hotelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hotelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHotelDto: UpdateHotelDto) {
    return this.hotelService.update(+id, updateHotelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hotelService.remove(+id);
  }
}
function hotel(hotel: any) {
  throw new Error('Function not implemented.');
}

