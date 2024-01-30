import { Test, TestingModule } from '@nestjs/testing';
import { PubliclyService } from './publicly.service';

describe('PubliclyService', () => {
  let service: PubliclyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PubliclyService],
    }).compile();

    service = module.get<PubliclyService>(PubliclyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
