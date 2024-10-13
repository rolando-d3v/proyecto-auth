import { Hono } from 'hono'
import * as Ctrl from './user.controller'


const user = new Hono()

user.get('/users-all', Ctrl.allUser)
user.get('productos', Ctrl.producto)
user.get('/id-user/:id', Ctrl.allUser)
user.put('/update/:id', Ctrl.updatedUser)
user.post('/create', Ctrl.updatedUser)
user.delete('/delete/:id', Ctrl.updatedUser)


export default user