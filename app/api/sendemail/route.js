import { NextResponse } from 'next/server';

import { z } from "zod";

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        // zod schema validation
        const messageSchema = z.object({
            name: z.string({
                required_error: "Name is required",
                invalid_type_error: "Name must be a string",
            }).min(3, { message: "Name can't be less than 3 characters" }),
            email: z.string({
                required_error: "Email is required",
                invalid_type_error: "Email must be a string",
            }).email({ message: "Invalid Email Address" }),
            message: z.string({
                required_error: "Message is required",
                invalid_type_error: "Message must be a string",
            }).min(15, { message: "Message can't be less than 15 characters" }),
        });

        const checkk = await messageSchema.safeParseAsync({ name, email, message });
        if (!checkk.success) {
            const formatted = checkk.error.format();
            console.log(formatted)
            const error = formatted.name?._errors[0] || formatted.email?._errors[0] || formatted.message?._errors[0]
            return NextResponse.json({ message: error, status: false, }, { status: 404 });
        }
        if (checkk.success) {
            const response = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.RESEND_API}`,
                },
                body: JSON.stringify({
                    from: 'Acme <onboarding@resend.dev>',
                    to: ['adward797@gmail.com'],
                    subject: 'saqib_tanveer_',
                    html: `<div>
                            <h1>From, ${name}!</h1>
                            <p><strong>email: </strong> ${email}</p>
                            <p>${message}</p>
                            </div>`,
                }),
            });
            if (response.ok) {
                return NextResponse.json({ message: 'Message Recieved Successfully', status: true, }, { status: 200 });
            }
            if (!response.ok) {
                return NextResponse.json({ message: 'Something Went Wrong!', status: false, }, { status: 500 });
            }
        }


    } catch (error) {
        return NextResponse.json({ message: 'Internal Server Error', status: false, error: error.message }, { status: 500 });
    }
}
