import { Hono } from 'hono'
import { prettyJSON } from 'hono/pretty-json'
import { cors } from 'hono/cors'
import user from './api/user/user.routes'




const app = new Hono  ()

// middleware
app.use('/api/*', cors())
app.use(prettyJSON())
app.notFound((c) => {
  return c.text('Custom 404 Message', 404)
})

// routes
app.route('/user', user)

console.log(process.env.DATABASE_URL);


export default { 
  port: process.env.PORT || 3000, 
  fetch: app.fetch, 
} 
