import { Injectable } from '@nestjs/common';
import { CreateCategoriaQuartoDto } from './dto/create-categoria-quarto.dto';
import { UpdateCategoriaQuartoDto } from './dto/update-categoria-quarto.dto';

@Injectable()
export class CategoriaQuartoService {
  create(createCategoriaQuartoDto: CreateCategoriaQuartoDto) {
    return 'This action adds a new categoriaQuarto';
  }

  findAll() {
    return `This action returns all categoriaQuarto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoriaQuarto`;
  }

  update(id: number, updateCategoriaQuartoDto: UpdateCategoriaQuartoDto) {
    return `This action updates a #${id} categoriaQuarto`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoriaQuarto`;
  }
}
