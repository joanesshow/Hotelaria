import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaQuartoService } from './categoria-quarto.service';

describe('CategoriaQuartoService', () => {
  let service: CategoriaQuartoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriaQuartoService],
    }).compile();

    service = module.get<CategoriaQuartoService>(CategoriaQuartoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
