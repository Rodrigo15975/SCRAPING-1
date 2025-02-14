import {
  Entity,
  EntityRepositoryType,
  PrimaryKey,
  Property,
} from '@mikro-orm/core'
import { AuthorRepository } from './repository'

@Entity({ repository: () => AuthorRepository })
export class Author {
  [EntityRepositoryType]?: AuthorRepository

  @PrimaryKey({
    type: 'uuid',
  })
  id!: string

  @Property({
    serializer(value: string) {
      return value.toLowerCase()
    },
  })
  name!: string

  @Property({
    unique: true,
  })
  email!: string

  @Property({
    type: 'date',
    default: new Date().toISOString(),
  })
  createdAt: Date | undefined

  @Property({ onUpdate: () => new Date().toISOString(), type: 'date' })
  updatedAt: Date | undefined
}
