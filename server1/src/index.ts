import { Hono } from 'hono'
import { prettyJSON } from 'hono/pretty-json'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'    // PARECIDO A MORGAN QUE SE USABA EN EXPRESS
import userRoutes from './api/user/user.routes'
import authRoutes from './api/auth/auth.routes'
import productoRoutes from './api/producto/producto.routes'




const app = new Hono()

// middleware
app.use(cors())
app.use(logger())
app.use(prettyJSON())
app.notFound((c) => {
  return c.text('Custom 404 Message', 404)
})

// routes
app.route('/producto', productoRoutes)
app.route('/user', userRoutes)
app.route('/auth', authRoutes)

// server
export default {
  port: process.env.PORT || 4000,
  fetch: app.fetch,
} 
