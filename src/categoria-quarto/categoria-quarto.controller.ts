import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaQuartoService } from './categoria-quarto.service';
import { CreateCategoriaQuartoDto } from './dto/create-categoria-quarto.dto';
import { UpdateCategoriaQuartoDto } from './dto/update-categoria-quarto.dto';

@Controller('categoria-quarto')
export class CategoriaQuartoController {
  constructor(private readonly categoriaQuartoService: CategoriaQuartoService) {}

  @Post()
  create(@Body() createCategoriaQuartoDto: CreateCategoriaQuartoDto) {
    return this.categoriaQuartoService.create(createCategoriaQuartoDto);
  }

  @Get()
  findAll() {
    return this.categoriaQuartoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaQuartoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriaQuartoDto: UpdateCategoriaQuartoDto) {
    return this.categoriaQuartoService.update(+id, updateCategoriaQuartoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaQuartoService.remove(+id);
  }
}
