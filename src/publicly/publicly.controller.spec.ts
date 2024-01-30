import { Test, TestingModule } from '@nestjs/testing';
import { PubliclyController } from './publicly.controller';

describe('PubliclyController', () => {
  let controller: PubliclyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PubliclyController],
    }).compile();

    controller = module.get<PubliclyController>(PubliclyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
