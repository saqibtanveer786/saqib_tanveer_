import { EmailTemplate } from '@/components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API);

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['adward797@gmail.com'],
            subject: 'saqib_tanveer_',
            react: EmailTemplate({ name, email, message }),
        });

        return NextResponse.json({ message: 'Message Recieved Successfully', status: true, data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Internal Server Error', status: false, error: error.message }, { status: 500 });
    }
}
