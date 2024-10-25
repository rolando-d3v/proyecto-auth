import { Context } from 'hono'
import User from './user.type.valid';
import { db_prisma } from '../../db/db_prisma';


//? CREATE USUARIO
//? **********************************************************************/
export const createUser = async (c: Context) => {

    const user: User = await c.req.json();

    const hashPassword = await Bun.password.hash(user.password);

    const capitalizeName = (namex: string) => {
        const nameLower = namex.toLowerCase()
        return nameLower.replace(/\b\w/g, (char) => char.toUpperCase());
      };
    

    try {
        const usuario = await db_prisma.usuario.create({
            data: {
                nombre: capitalizeName(user.nombre),
                email: user.email,
                dni: user.dni,
                password: hashPassword,
                role_id: user.role_id
            },
        });

        return c.json({ msj: " success", usuario });
    } catch (err: unknown) {
        console.error(`Error: ${err}`);
        return c.json({ error: 'Error server', err }, 400);
    }

}


