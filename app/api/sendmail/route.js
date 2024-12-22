import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const emailContent = `
    <h1 style="font-size: 14px; color: "#18181b">Name: ${name}</h1>
    <h2 style="font-size: 14px; color: "#18181b">Email: ${email}</h2>
    <p style="font-size: 14px; color: "#212121">Message: ${message}</p>
    `;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "priyannxhuu@gmail.com",
      subject: "New message from portfolio",
      html: emailContent,
    });

    return NextResponse.json({
      message: "Email sent successfully",
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
