import { pgTable, serial, varchar, foreignKey, integer, text } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"




export const compras = pgTable("compras", {
	idCodigo: serial("id_codigo").primaryKey().notNull(),
	varDni: varchar("var_dni", { length: 9 }),
});

export const usuarios = pgTable("usuarios", {
	id: serial().primaryKey().notNull(),
	nombre: varchar({ length: 25 }),
	edad: integer(),
	descripcion: text(),
	productoId: integer("producto_id"),
},
(table) => {
	return {
		usuariosProductoIdFkey: foreignKey({
			columns: [table.productoId],
			foreignColumns: [productos.id],
			name: "usuarios_producto_id_fkey"
		}),
	}
});

export const roles = pgTable("roles", {
	id: serial().primaryKey().notNull(),
	nameRol: varchar("name_rol", { length: 10 }),
	descripcion: text(),
});

export const pedidos = pgTable("pedidos", {
	id: serial().primaryKey().notNull(),
	nombre: varchar({ length: 25 }),
	precio: integer(),
});

export const examenes = pgTable("examenes", {
	idCodigo: serial("id_codigo").primaryKey().notNull(),
	dni: varchar({ length: 8 }),
	comentario: text(),
});

export const correos = pgTable("correos", {
	idCodigo: serial("id_codigo").primaryKey().notNull(),
	dni: varchar({ length: 8 }),
	comentario: text(),
});

export const productos = pgTable("productos", {
	id: serial().primaryKey().notNull(),
	name: varchar({ length: 14 }),
});

export const users = pgTable("users", {
	id: serial().primaryKey().notNull(),
	name: varchar({ length: 256 }),
	email: varchar({ length: 256 }),
	dni: varchar({ length: 8 }),
});

export const product = pgTable("product", {
	id: serial().primaryKey().notNull(),
	name: varchar({ length: 256 }),
	email: varchar({ length: 256 }),
});

export const rolex = pgTable("rolex", {
	id: serial().primaryKey().notNull(),
	name: varchar({ length: 256 }),
	email: varchar({ length: 256 }),
});