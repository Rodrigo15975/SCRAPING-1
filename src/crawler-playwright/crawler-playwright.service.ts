import { Injectable } from '@nestjs/common';
import { CreateCrawlerPlaywrightDto } from './dto/create-crawler-playwright.dto';
import { UpdateCrawlerPlaywrightDto } from './dto/update-crawler-playwright.dto';

@Injectable()
export class CrawlerPlaywrightService {
  create(createCrawlerPlaywrightDto: CreateCrawlerPlaywrightDto) {
    return 'This action adds a new crawlerPlaywright';
  }

  findAll() {
    return `This action returns all crawlerPlaywright`;
  }

  findOne(id: number) {
    return `This action returns a #${id} crawlerPlaywright`;
  }

  update(id: number, updateCrawlerPlaywrightDto: UpdateCrawlerPlaywrightDto) {
    return `This action updates a #${id} crawlerPlaywright`;
  }

  remove(id: number) {
    return `This action removes a #${id} crawlerPlaywright`;
  }
}
