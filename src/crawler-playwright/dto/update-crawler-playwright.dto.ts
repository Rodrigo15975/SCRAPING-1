import { PartialType } from '@nestjs/mapped-types';
import { CreateCrawlerPlaywrightDto } from './create-crawler-playwright.dto';

export class UpdateCrawlerPlaywrightDto extends PartialType(CreateCrawlerPlaywrightDto) {}
