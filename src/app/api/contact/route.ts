import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();

    // Here you would typically save to MongoDB or Firebase
    console.log("Contact form submission:", body);

    return NextResponse.json({ success: true, message: "Message sent successfully!" });
}
