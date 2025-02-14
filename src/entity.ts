import {
  Entity,
  EntityRepositoryType,
  PrimaryKey,
  Property,
  Utils,
} from '@mikro-orm/core'
import { EntityName } from '@mikro-orm/nestjs'
import { AuthorRepository } from './repository'

export const getRepositoryToken = <T>(entity: EntityName<T>) =>
  `${Utils.className(entity)}Repository`

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
