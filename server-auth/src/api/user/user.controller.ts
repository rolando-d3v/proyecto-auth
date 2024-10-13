import { Context } from 'hono'




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
export const allUser = (c: Context) => {
    return c.json({ Nombre: "Rolando d3v", carrera: "ing sistema" })
}