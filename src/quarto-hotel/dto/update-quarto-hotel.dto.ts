import { PartialType } from '@nestjs/mapped-types';
import { CreateQuartoHotelDto } from './create-quarto-hotel.dto';

export class UpdateQuartoHotelDto extends PartialType(CreateQuartoHotelDto) {}
