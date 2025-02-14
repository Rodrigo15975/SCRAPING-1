import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CrawlerPlaywrightService } from './crawler-playwright.service';
import { CreateCrawlerPlaywrightDto } from './dto/create-crawler-playwright.dto';
import { UpdateCrawlerPlaywrightDto } from './dto/update-crawler-playwright.dto';

@Controller('crawler-playwright')
export class CrawlerPlaywrightController {
  constructor(private readonly crawlerPlaywrightService: CrawlerPlaywrightService) {}

  @Post()
  create(@Body() createCrawlerPlaywrightDto: CreateCrawlerPlaywrightDto) {
    return this.crawlerPlaywrightService.create(createCrawlerPlaywrightDto);
  }

  @Get()
  findAll() {
    return this.crawlerPlaywrightService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.crawlerPlaywrightService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCrawlerPlaywrightDto: UpdateCrawlerPlaywrightDto) {
    return this.crawlerPlaywrightService.update(+id, updateCrawlerPlaywrightDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.crawlerPlaywrightService.remove(+id);
  }
}
