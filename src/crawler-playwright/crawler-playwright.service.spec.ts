import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerPlaywrightService } from './crawler-playwright.service';

describe('CrawlerPlaywrightService', () => {
  let service: CrawlerPlaywrightService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrawlerPlaywrightService],
    }).compile();

    service = module.get<CrawlerPlaywrightService>(CrawlerPlaywrightService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
