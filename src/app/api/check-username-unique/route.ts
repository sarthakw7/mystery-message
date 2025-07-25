import { z } from "zod"
import { usernameValidation } from "@/schemas/signUpSchema"
import dbConnect from "@/lib/dbConnect"
import UserModel from "@/model/User"


const UsernameQuerySchema = z.object({
    username: usernameValidation
})

export async function GET(request: Request) {

    await dbConnect()

    try {

        const {searchParams} = new URL(request.url)
        const queryParam = {
            username: searchParams.get('username')
        }
        const result = UsernameQuerySchema.safeParse(queryParam)
        
        console.log(result) // Remove

        if(!result.success) {
            const usernameErros = result.error.format().username?._errors || []
            return Response.json({
                success: false,
                message: usernameErros?.length > 0? usernameErros.join(', '): 'Invalid query parameters',
            }, {status: 400})
        }


        const {username} = result.data
        
        const existingVerifiedUser = await UserModel.findOne({username, isVerified: true})

        if (existingVerifiedUser) {
            return Response.json({
                success: false,
                message: "username is already taken",
            }, {status: 400})
        }

        return Response.json({
                success: true,
                message: "username is unique",
            }, {status: 201})

        
    } catch (error) {
        console.error("Error checking username", error)
        return Response.json(
            {
                success: false,
                message: "error checking username"
            },
            {status: 500}
        )
    }
    
}