import { char, numeric, pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
  dni: char('dni', { length: 8 }),
  email: varchar('email', { length: 150 }),
});


export const product = pgTable('product', {
  id: serial().primaryKey(),
  name_producto: varchar({ length: 256 }),
  descripcion: varchar({ length: 256 }),
  precio: numeric({ precision: 10, scale: 2 }),
});


export const rolex = pgTable('rolex', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
  email: varchar('email', { length: 256 }),
});