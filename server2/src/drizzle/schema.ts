import { char, numeric, pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const usuario = pgTable('usuario', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
  dni: char('dni', { length: 8 }),
  email: varchar({ length: 150 }).notNull(),
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