import { Hono } from 'hono'
import * as Ctrl from './user.controller'


const user = new Hono()

user.get('/users-all', Ctrl.allUser)
user.put('/updated/:id', Ctrl.updatedUser)


export default user