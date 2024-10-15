
import { z } from 'zod'


export const schemaUser = z.object({
    nombre: z.string().min(1, "Username is required"),
    email: z.string().email("Invalid email address"),
    dni: z.string().min(8),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    role_id: z.number(),

})




interface User{
    email: string;
    nombre: string;
    dni: string;
    password: string;
    role_id: number;
}

export default User;


