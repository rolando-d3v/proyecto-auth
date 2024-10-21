import { Context } from 'hono'
import { product, users } from '../../drizzle/schema';
import { db } from '../../drizzle/db';
import { rolex } from '../../../drizzle/schema';
import { sql } from 'drizzle-orm';




//? CREATE ONE REGISTRO
//? **********************************************************************/
export const updatedUser = async (c: Context) => {

    // const id = c.req.param('id')
    const id = parseInt(c.req.param('id'));

    console.log(id);

 

     return c.text('List Books' + id)
     
    
    // const { name, email } = c.req.parsedBody;

  
    // try {
    //   const user = await prisma.user.update({
    //     where: { id },
    //     data: { name, email },
    //   });
    //   return c.json(user);
    // } catch (error) {
    //   return c.json({ error: 'Error al actualizar el usuario' }, 400);
    // }
    //   }
}



//? CREATE ONE REGISTRO
//? **********************************************************************/
export const allUser = async (c: Context) => {
    
    const result = await db.select({
        id: users.id,
        dni: users.dni,
        name: users.email,
      }).from(users);

      console.log(result);

    return c.json({ Nombre: "Rolando d3v", carrera: "ing sistema", result })
}



//? CREATE ONE REGISTRO
//? **********************************************************************/
export const producto = async (c: Context) => {
    
    const result = await db.select({
        id: product.id,
        name: product.email,
        
      }).from(product).where(sql`${product.id} = 42`);;



      const result2 = await db.select({
        id: product.id,
        name: product.name,

      }).from(rolex);


      console.log(result);
      


    return c.json({ Nombre: "Rolando d3v", carrera: "ing sistema", result })
}