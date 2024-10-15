import { HTTPException } from 'hono/http-exception'
import { verify } from 'hono/jwt'
import { Context, Next } from 'hono'



//? AUTH TOKEN
//? **********************************************************************/
export const authToken = async (c: Context, next: Next) => {


    try {

        const trueToken = c.req.header("Authorization")

        if (!trueToken) {
            throw new HTTPException(400, { message: "no tienes token" })
        }

        const decodedPayload = await verify(trueToken, Bun.env.SECRET_JWT || "secreto")

        await next()

    } catch (err) {
        console.error(`Error: ${err}`);
        return c.json({ error: 'No tienes Autorizacion', err }, 400);

    }

}
