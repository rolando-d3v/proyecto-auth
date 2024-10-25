import { Context } from 'hono'
import { usuario } from '../../drizzle/schema';
import { db } from '../../drizzle/db';
import { eq } from 'drizzle-orm';
import User from './user.type.valid';
import { password } from 'bun';



//? CREATE ONE USER
//? **********************************************************************/
export const createUser = async (c: Context) => {

  try {

    const u: User = await c.req.json();

    const nameChangue = (namex: string) => {
      const nameLower = namex.toLowerCase()
      return nameLower.replace(/\b\w/g, (char) => char.toUpperCase());
    }


    console.log(u.password);


    const user = await db.insert(usuario)
      .values({
        name: nameChangue(u.name),
        dni: u.dni,
        email: u.email,
        password: await Bun.password.hash(u.password)

      }).returning();


    console.log(user);

    return c.json({ msj: "created success", user: user })

  } catch (err) {

    console.error(`Error: ${err}`);
    return c.json({ msj: "Error server", err }, 400)


  }

}



//? GET ALL USER
//? **********************************************************************/
export const allUser = async (c: Context) => {

  try {

    const result = await db.select(
      {
        dni: usuario.dni,
        name: usuario.name,
        email: usuario.email,
        descripcion: usuario.descripcion,
      }
    ).from(usuario);

    console.log(result);

    return c.json({ msj: "success", usuario: result })

  } catch (err) {
    console.error(`Error: ${err}`);
    return c.json({ msj: "Error server", err }, 400)

  }
}



//? UPDATE ONE USER
//? **********************************************************************/
export const updatedUser = async (c: Context) => {

  try {

    const id = c.req.param('id');

    console.log(id);

    const usuarioExiste = await db.select()
      .from(usuario)
      .where(eq(usuario.id, id))
      .then(result => result.length > 0);


    console.log(usuarioExiste);

    if (!usuarioExiste) {
      throw new Error(`Usuario with id ${id} does not exist.`);
    }


    const updatedUser = await db.update(usuario)
      .set({ name: "Marianella" })
      .where(eq(usuario.id, id))
      .returning({ id: usuario.id });


    return c.json({ msj: "updated success", updatedUser })

  } catch (err) {
    console.error(`Error: ${err}`);
    return c.json({ msj: "Error server", err }, 400)
  }

}






//? DELETE ONE USER
//? **********************************************************************/
export const deleteUser = async (c: Context) => {

  try {
    const id = c.req.param('id');

    console.log(id);

    const usuarioExiste = await db.select()
      .from(usuario)
      .where(eq(usuario.id, id))
      .then(result => result.length > 0);


    console.log(usuarioExiste);

    if (!usuarioExiste) {
      throw new Error(`Usuario with id ${id} does not exist.`);
    }

    const deleteUser = await db.delete(usuario)
      .where(eq(usuario.id, id))
      .returning({ id: usuario.id });


    return c.json({ msj: "deleted success", deleteUser })

  } catch (err) {
    console.error(`Error: ${err}`);
    return c.json({ msj: "Error server", err }, 400)
  }

}