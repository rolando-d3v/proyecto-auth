import { Context } from 'hono'
import { sign } from 'hono/jwt';
import User from '../user/user.type.valid';
import { db_prisma } from '../../db/db_prisma';




//? LOGIN USER
//? **********************************************************************/
export const loginUser = async (c: Context) => {
  try {


    const { email, password }: User = await c.req.json();

    if (!email || !password) {
      c.status(400)
      throw new Error('Please provide an email and password')
    }


    const emailExiste = await db_prisma.usuario.findFirstOrThrow({
      where: {
        email: email
      }
    })

    if (!emailExiste) {
      c.status(400)
      throw new Error('Email no existe')
    }


    const passwordExiste = await Bun.password.verify(password, emailExiste.password)

    if (!passwordExiste) {
      c.status(400)
      throw new Error('Password incorrecto')
    }

    const payload = {
      email: email,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 1, 
    }

    const token = await sign(payload, Bun.env.SECRET_JWT || "secreto")

    return c.json({ msj: "success", token })

  } catch (err: unknown) {
    console.error(`Error: ${err}`);
    return c.json({ error: 'Error server', err }, 400);

  }
}
