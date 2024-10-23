import { z } from 'zod'

export const schemaUser = z.object({
    name: z.string().min(1, "Name es requerido"),
    email: z.string().email("Invalid email"),
    dni: z.string().min(8),
    descripcion: z.string(),
    // descripcion: z.string().optional(),
    password: z.string().min(6, "Password must be at least 6 characters long"),
})


interface User{
    email: string;
    name: string;
    dni: string;
    password: string;
    role_id: number;
}

export default User;


