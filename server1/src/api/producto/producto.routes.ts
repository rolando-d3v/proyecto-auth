import { Hono } from 'hono'
import * as Ctrl from './producto.controller'
import { zValidator } from '@hono/zod-validator'
import { schemaproducto } from './producto.type.valid'
import { authToken } from '../../middlewares/authToken'




const user = new Hono()

user.post('/create', zValidator('json', schemaproducto), Ctrl.createProducto)
user.get('/get-all', authToken, Ctrl.allProducto)
user.get('/get-one/:id', Ctrl.oneProducto)

user.put('/update/:id', Ctrl.updateProducto)
user.delete('/delete/:id', Ctrl.removeProducto)


export default user