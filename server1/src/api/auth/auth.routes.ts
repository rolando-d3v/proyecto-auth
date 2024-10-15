import { Hono } from 'hono'
import * as Ctrl from './auth.controller'
// import { zValidator } from '@hono/zod-validator'
// import { schemaUser } from './user.validator'




const user = new Hono()

user.post('/login', Ctrl.loginUser)

// user.post('/create', zValidator('json', schemaUser ), Ctrl.updatedUser)



export default user