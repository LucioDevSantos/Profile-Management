import { error } from "console";
import prismaClient from "../prisma";

interface loginProps{
    email:string,
    password:string
}


class loginProfile {
    async execute({email, password}: loginProps){

        const found = await prismaClient.profile.findFirst({
            where: {
                email: email
            }
        })
        if(!found){
             return "profile not found"
        } 

        const result = ():string => {
            if(password != found.password){
                return "password incorrect"
            }

            return "login successful!"
        }
        
        return result
    }
}




export {loginProfile}