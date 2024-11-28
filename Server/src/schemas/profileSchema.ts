import {z} from "zod" 

const creatteProfileSchema = z.object({
    username: z.string(),
    email: z.string().min(10),
    password: z.string().min(3)
})

