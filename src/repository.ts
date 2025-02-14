import { EntityRepository } from '@mikro-orm/core'
import { Author } from './entity'

export interface AuthorRepositoryInterface {
  findByName(name: string): Promise<Author[]>
  findByNameAndEmail(name: string, email: string): Promise<Author[]>
  countAuthors(): Promise<number>
}

export class AuthorRepository
  extends EntityRepository<Author>
  implements AuthorRepositoryInterface
{
  async findByName(name: string): Promise<Author[]> {
    return await this.find({ name })
  }
  async findByNameAndEmail(name: string, email: string): Promise<Author[]> {
    return await this.find({ name, email })
  }
  async countAuthors(): Promise<number> {
    return await this.count()
  }
}
