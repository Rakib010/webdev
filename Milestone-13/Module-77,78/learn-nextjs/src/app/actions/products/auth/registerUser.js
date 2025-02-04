'user server'

import dbConnect from "@/lib/dbConnect"

export const registerUser = async (payload) =>{

    // need to check if unique username was given 


    const result = await dbConnect('test_user').insertOne(payload)
    return result
} 