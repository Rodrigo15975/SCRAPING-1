import { MikroOrmModule } from '@mikro-orm/nestjs'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import mikroOrmConfig from './mikro-orm.config'
import { AuthorRepository } from './repository'
import { Author } from './entity'
import { CrawlerPlaywrightModule } from './crawler-playwright/crawler-playwright.module'
@Module({
  imports: [
    MikroOrmModule.forRoot(mikroOrmConfig),
    MikroOrmModule.forFeature([Author]),
    CrawlerPlaywrightModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthorRepository],
})
export class AppModule {}
