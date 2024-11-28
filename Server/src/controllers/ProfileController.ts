import { FastifyRequest, FastifyReply, FastifyBaseLogger } from "fastify";
import { createProfile } from "../services/createProfile";
import { loginProfile } from "../services/loginProfile";




class ProfileController{

    service = new createProfile()


    async handle(req: FastifyRequest, reply: FastifyReply){

        const {username, email, password} = req.body as {username: string, email:string, password:string}

        if(!username || !email || !password){
            throw new Error("fill all the fields")
        }

        

        const profile = await this.service.execute({username, email, password})
        
        reply.send(profile)
    }

    async login(req:FastifyRequest, res:FastifyReply){
        const {email, password} = req.body as {email:string, password:string} 


        const LoginProfile = new loginProfile()

        const result = LoginProfile.execute({email, password})

        res.send(result)
    }
}



export {ProfileController}