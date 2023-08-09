import { NextResponse } from "next/server"
import * as fs from 'fs'
async function checkRequestDataMiddlewareFunction(requestData) {
    if (requestData.name.length < 3){
        return false
    }
    if (!requestData.email.includes("@")||!requestData.email.includes('.')||!requestData.email.includes('.com')||!requestData.email.includes('gmail')){
        return false
    }
    const dirs = await fs.readdirSync('contacts', 'utf-8')
    const emailInString = await JSON.stringify(requestData.email)
    if (dirs.includes(requestData.email)) {
       return false 
    }
    return true
}

export async function POST(req) {
    try {
        const requestData = await req.json()
        const check = await checkRequestDataMiddlewareFunction(requestData)
        if (!check) {
            return NextResponse.json({error: "invalid form data"}, {status: 405}) 
        }
        const contactDataToSave = await JSON.stringify(requestData)
        const saveData = await fs.writeFileSync(`contacts/${requestData.email}`, contactDataToSave)
        return NextResponse.json({message: 'Saved Successfully'}, {status: 200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({Error: 'Internal Server Error', error: error.message}, {status: 500})
    }
}