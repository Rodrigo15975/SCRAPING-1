import { MikroOrmModule } from '@mikro-orm/nestjs'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import mikroOrmConfig from './mikro-orm.config'
import { AuthorRepository } from './repository'
import { Author } from './entity'
@Module({
  imports: [
    MikroOrmModule.forRoot(mikroOrmConfig),
    MikroOrmModule.forFeature([Author]),
  ],
  controllers: [AppController],
  providers: [AppService, AuthorRepository],
})
export class AppModule {}
