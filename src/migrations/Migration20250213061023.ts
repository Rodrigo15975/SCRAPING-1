import { Migration } from '@mikro-orm/migrations'

export class Migration20250213061023 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      `create table "author" ("id" uuid not null, "name" varchar(255) not null, "email" varchar(255) not null, "created_at" date not null default '2025-02-13T06:10:16.171Z', "updated_at" date not null, constraint "author_pkey" primary key ("id"));`,
    )
    this.addSql(
      `alter table "author" add constraint "author_email_unique" unique ("email");`,
    )
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "author" cascade;`)
  }
}
