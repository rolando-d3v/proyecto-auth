import { Hono } from 'hono'
import { prettyJSON } from 'hono/pretty-json'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { userRoutes } from './api/user/user.routes'




const app = new Hono()



// middleware
app.use('*', cors())
app.use(logger())
app.use(prettyJSON())
app.notFound((c) => {
  return c.text('Custom 404 Message', 404)
})

// routes
app.route('/user', userRoutes)


//server
export default {
  port: Bun.env.PORT || 4000,
  fetch: app.fetch,
} 
