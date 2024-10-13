import { relations } from "drizzle-orm/relations";
import { productos, usuarios } from "./schema";

export const usuariosRelations = relations(usuarios, ({one}) => ({
	producto: one(productos, {
		fields: [usuarios.productoId],
		references: [productos.id]
	}),
}));

export const productosRelations = relations(productos, ({many}) => ({
	usuarios: many(usuarios),
}));