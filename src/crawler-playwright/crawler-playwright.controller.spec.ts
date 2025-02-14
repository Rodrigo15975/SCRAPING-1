import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerPlaywrightController } from './crawler-playwright.controller';
import { CrawlerPlaywrightService } from './crawler-playwright.service';

describe('CrawlerPlaywrightController', () => {
  let controller: CrawlerPlaywrightController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrawlerPlaywrightController],
      providers: [CrawlerPlaywrightService],
    }).compile();

    controller = module.get<CrawlerPlaywrightController>(CrawlerPlaywrightController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
