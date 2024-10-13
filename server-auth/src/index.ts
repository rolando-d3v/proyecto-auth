import { Hono } from 'hono'
import { prettyJSON } from 'hono/pretty-json'
import { cors } from 'hono/cors'
import user from './api/user/user.routes'



import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";


export type Env = {
  MY_VAR: String
}


// Make sure to install the 'pg' package 




const app = new Hono  ()

// middleware
app.use('/api/*', cors())
app.use(prettyJSON())
app.notFound((c) => {
  return c.text('Custom 404 Message', 404)
})

// routes
app.route('/user', user)


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
// const db = drizzle(pool);

// console.log(db);

 
// const result = await db.execute('select 1');



export default app
