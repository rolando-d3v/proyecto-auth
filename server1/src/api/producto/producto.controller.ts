import { Context } from "hono";
import Producto from "./producto.type.valid";
import { db_prisma } from "../../db/db_prisma";



//? CREATE PRODUCTO
//? **********************************************************************/
export const createProducto = async (c: Context) => {
    try {
        const pro: Producto = await c.req.json();


        const producto = await db_prisma.producto.create({
            data: {
                nombre: pro.nombre,
                descripcion: pro.descripcion,
                precio: pro.precio,
                stock: pro.stock
            },
        });
        console.log(producto);
        c.status(201);
        return c.json(producto);
    } catch (err: unknown) {
        console.error(`Error: ${err}`);
        return c.json({ error: 'Error server', err }, 400);
    }
};



//? GET ALL PRODUCTOS
//? **********************************************************************/
export const allProducto = async (c: Context) => {
    try {
        const producto = await db_prisma.producto.findMany({});

        c.status(200);
        return c.json({ msje: "success", producto });
    } catch (err: unknown) {
        console.error(`Error: ${err}`);
        return c.json({ error: 'Error server', err }, 400);
    }

};





//? GET ONE REGISTRO
//? **********************************************************************/
export const oneProducto = async (c: Context) => {

    try {
        const id = parseInt(c.req.param("id"));
        // console.log(id);

        const productoExiste = await db_prisma.producto.findUnique({
            where: {
                id
            }
        })
        if (!productoExiste) {
            c.status(400)
            throw new Error('producto no existe')
        }

        return c.json({ msje: "success", productoExiste });
    } catch (err: unknown) {
        console.error(`Error: ${err}`);
        return c.json({ error: 'Error server', err }, 400);
    }



};

//? UPDATE PRODUCTO
//? **********************************************************************/
export const updateProducto = async (c: Context) => {

    const id = parseInt(c.req.param("id"));
    const pro: Producto = await c.req.json();
    try {

        const productoExiste = await db_prisma.producto.findUnique({
            where: {
                id
            }
        })
        if (!productoExiste) {
            c.status(400)
            throw new Error('producto no existe')
        }


        const producto = await db_prisma.producto.update({
            where: { id },
            data: {
                nombre: pro.nombre,
                precio: pro.precio
            },
        });
        return c.json(producto);
    } catch (err) {
        console.error(`Error: ${err}`);
        return c.json({ error: 'Error al actualizar producto', err }, 400);
    }

};

//? DELETE PRODUCTO
//? **********************************************************************/
export const removeProducto = async (c: Context) => {

    const id = parseInt(c.req.param("id"));

    try {

        const productoExiste = await db_prisma.producto.findUnique({
            where: {
                id
            }
        })
        if (!productoExiste) {
            c.status(400)
            throw new Error('producto no existe')
        }


        const producto = await db_prisma.producto.delete({
            where: { id },
        });

        return c.json({ msj: "producto delete : " + producto.nombre });
    } catch (err: unknown) {
        console.error(`Error: ${err}`);
        return c.json({ error: 'Error al eliminar producto', err }, 400);
    }


};
