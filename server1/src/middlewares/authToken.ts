import { HTTPException } from 'hono/http-exception'
import { verify } from 'hono/jwt'
import { Context, Next } from 'hono'



//? AUTH TOKEN
//? **********************************************************************/
export const authToken = async (c: Context, next: Next) => {


    try {

        const trueToken = c.req.header("Authorization")

        // console.log(!trueToken);

        if (!trueToken) {
            c.status(401)
            console.error("No tienees token");
            return c.json({ msj: "No tienes token" }, 401)
            // throw new HTTPException(400, { message: "no tienes token" })
        }

        await verify(trueToken, Bun.env.SECRET_JWT || "secreto")


        await next()

    } catch (err) {
        console.error(`Error: ${err}`);
        return c.json({ error: 'Unauthorized', err }, 401);

    }

}
