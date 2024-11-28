import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import { routes } from "./routes";

const app = fastify({logger:true})

const start = async () =>{

    await app.register(routes)
    await app.register(fastifyCors)

    try {
        await app.listen({port:5555})
    } catch (err){
        process.exit(1)
    }
}

start()