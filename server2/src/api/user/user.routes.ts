import { Hono } from 'hono'
import * as Ctrl from './user.controller'


 export  const userRoutes = new Hono()

userRoutes.get('/all', Ctrl.allUser)
userRoutes.post('/create', Ctrl.createUser)



// userRoutes.get('productos', Ctrl.producto)

userRoutes.get('/id-user/:id', Ctrl.allUser)
userRoutes.put('/update/:id', Ctrl.updatedUser)
userRoutes.delete('/delete/:id', Ctrl.updatedUser)


// export default userRoutes