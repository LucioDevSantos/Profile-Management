import prismaClient from "../prisma";


interface ProfileProps {
    username: string,
    email:string,
    password:string
}

class createProfile {
    async execute({username, email, password}: ProfileProps){
        
        const Profile = await prismaClient.profile.create({
            data: {
                username,
                email,
                password,
            }
        })


        return {
            Profile, 
            ok:true
        }
    }
}


export {createProfile}