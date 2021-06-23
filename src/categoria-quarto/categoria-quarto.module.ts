import { Module } from '@nestjs/common';
import { CategoriaQuartoService } from './categoria-quarto.service';
import { CategoriaQuartoController } from './categoria-quarto.controller';

@Module({
  controllers: [CategoriaQuartoController],
  providers: [CategoriaQuartoService]
})
export class CategoriaQuartoModule {}
