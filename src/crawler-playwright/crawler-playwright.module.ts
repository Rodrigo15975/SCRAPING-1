import { Module } from '@nestjs/common';
import { CrawlerPlaywrightService } from './crawler-playwright.service';
import { CrawlerPlaywrightController } from './crawler-playwright.controller';

@Module({
  controllers: [CrawlerPlaywrightController],
  providers: [CrawlerPlaywrightService],
})
export class CrawlerPlaywrightModule {}
