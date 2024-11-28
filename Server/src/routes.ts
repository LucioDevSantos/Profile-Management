import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { ProfileController } from "./controllers/ProfileController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

    const profileController = new ProfileController()

    fastify.get("/", async (req: FastifyRequest, res: FastifyReply) =>{
        res.send("fughbiksr")
    })

    fastify.post("/profile", async (req: FastifyRequest, res: FastifyReply) => {
        return profileController.handle(req, res)
    })

    fastify.post("/login", async (req: FastifyRequest, res:FastifyReply)=>{
        return profileController.login(req, res) 
    })

}



