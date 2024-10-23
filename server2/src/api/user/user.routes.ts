import { Hono } from 'hono'
import * as Ctrl from './user.controller'
import { zValidator } from '@hono/zod-validator'
import { schemaUser } from './user.type.valid'


export const userRoutes = new Hono()

userRoutes.post('/create', zValidator('json', schemaUser), Ctrl.createUser)
userRoutes.get('/all', Ctrl.allUser)
userRoutes.put('/update/:id', Ctrl.updatedUser)
userRoutes.delete('/delete/:id', Ctrl.updatedUser)




userRoutes.get('/id-user/:id', Ctrl.allUser)


