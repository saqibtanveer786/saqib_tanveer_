import { NextResponse } from "next/server"
import * as fs from 'fs'


export async function POST(req) {
    try {
        const requestData = await req.json()
        const contactDataToSave = JSON.stringify(requestData)
        fs.writeFile(
            `contacts/${requestData.email}.json`,
            contactDataToSave,
            (error) => { if (error) console.log("Error while saving contact file. Error is: ", error) }
        )

        return NextResponse.json({ message: 'Message Recieved Successfully', status: true }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Internal Server Error', status: false, error: error.message }, { status: 500 })
    }
}