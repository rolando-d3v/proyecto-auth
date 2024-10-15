import { z } from 'zod'


export const schemaproducto = z.object({
    nombre: z.string().min(4),
    descripcion: z.string(),
    precio: z.number(),
    stock: z.number().min(0, { message: "El número debe ser mayor o igual a cero." })
})




interface Producto{
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
}

export default Producto;


