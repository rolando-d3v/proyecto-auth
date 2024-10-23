import { Context } from 'hono'
import { usuario } from '../../drizzle/schema';
import { db } from '../../drizzle/db';
import { sql } from 'drizzle-orm';
import User from './user.type.valid';




//? CREATE ONE REGISTRO
//? **********************************************************************/
export const createUser = async (c: Context) => {


  try {

    const u: User = await c.req.json();

    const user = await db.insert(usuario)
      .values({
        name: u.name,
        dni: u.dni,
        email: u.email
      }).returning();


    console.log(user);
    // console.log(user);

    // "command": "INSERT",
    // "rowCount": 1,

    return c.json({ msj: "success", user: user })

  } catch (err) {

    console.error(`Error: ${err}`);
    return c.json({ msj: "Error server", err }, 400)


  }






}



//? CREATE ONE REGISTRO
//? **********************************************************************/
export const allUser = async (c: Context) => {

  const result = await db.select({
    id: usuario.id,
    dni: usuario.dni,
    name: usuario.email,
  }).from(usuario);

  console.log(result);

  return c.json({ Nombre: "Rolando d3v", carrera: "ing sistema", result })
}



//? CREATE ONE REGISTRO
//? **********************************************************************/
export const updatedUser = async (c: Context) => {

  // const id = c.req.param('id')
  const id = parseInt(c.req.param('id'));

  console.log(id);



  return c.text('List Books' + id)



}






//? CREATE ONE REGISTRO
//? **********************************************************************/
export const deleteUser = async (c: Context) => {

  // const result = await db.select({
  //   id: producto.id,
  //   name: producto.descripcion,

  // }).from(producto).where(sql`${producto.id} = 42`);;





  // console.log(result);



  return c.json({ Nombre: "Rolando d3v", carrera: "ing sistema" })
}