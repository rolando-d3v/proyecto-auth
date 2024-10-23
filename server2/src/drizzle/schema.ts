import { sql } from 'drizzle-orm';
import { boolean, char, numeric, pgTable, serial, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';

export const usuario = pgTable('usuario', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  name: varchar('name', { length: 256 }),
  dni: char('dni', { length: 8 }),
  password: varchar({ length: 255 }),
  email: varchar({ length: 150 }).notNull(),
  descripcion: text(),
  estado: boolean('estado').default(true),
  createAt: timestamp().default(sql`now()`)
});


export const producto = pgTable('producto', {
  id: serial().primaryKey(),
  name_producto: varchar({ length: 256 }),
  descripcion: varchar({ length: 256 }),
  precio: numeric({ precision: 10, scale: 2 }),
});


export const role = pgTable('role', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
  email: varchar('email', { length: 256 }),
});