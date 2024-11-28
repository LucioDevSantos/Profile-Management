import { error } from "console";
import prismaClient from "../prisma";

interface loginProps{
    email:string,
    password:string
}


class loginProfile {
    async execute({email, password}: loginProps){

        const found = prismaClient.profile.findFirst({
            where: {
                email: email
            }
        })
        if(!found){
             throw new Error("profile no found")
        } 

        
        
    }
}




export {loginProfile}