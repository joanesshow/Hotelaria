import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriaQuartoDto } from './create-categoria-quarto.dto';

export class UpdateCategoriaQuartoDto extends PartialType(CreateCategoriaQuartoDto) {}
