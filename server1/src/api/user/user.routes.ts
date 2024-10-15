import { Hono } from 'hono'
import * as Ctrl from './user.controller'
import { zValidator } from '@hono/zod-validator'
import { schemaUser } from './user.type.valid'
import { authToken } from '../../middlewares/authToken'




const user = new Hono()


user.post('/create',  Ctrl.createUser)



export default user