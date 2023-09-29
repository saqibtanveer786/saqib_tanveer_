import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();
        const res = await fetch('https://api.resend.com/emails', {
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

        const data = await res.json();
        return NextResponse.json({ message: 'Message Recieved Successfully', status: true, data }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: 'Internal Server Error', status: false, error: error.message }, { status: 500 });
    }
}
