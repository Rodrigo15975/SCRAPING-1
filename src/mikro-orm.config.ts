// import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs'
import { defineConfig, PostgreSqlDriver } from '@mikro-orm/postgresql'
import * as path from 'path'

export default defineConfig({
  driver: PostgreSqlDriver,
  entities: ['./dist/entity.js'],
  entitiesTs: ['./src/entity.ts'],
  clientUrl:
    'postgresql://neondb_owner:npg_L3qXsglCKb6D@ep-divine-silence-a2ooy0wl.eu-central-1.aws.neon.tech/neondb?sslmode=require',
  dbName: 'neondb',

  driverOptions: {
    connection: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
  migrations: {
    path: path.join(__dirname, './migrations'),
  },
})
