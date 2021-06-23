import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaQuartoController } from './categoria-quarto.controller';
import { CategoriaQuartoService } from './categoria-quarto.service';

describe('CategoriaQuartoController', () => {
  let controller: CategoriaQuartoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriaQuartoController],
      providers: [CategoriaQuartoService],
    }).compile();

    controller = module.get<CategoriaQuartoController>(CategoriaQuartoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
