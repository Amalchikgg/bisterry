import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  if (req.method === "POST") {
    const { email } = await req.json();

    //Настройте transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "amalchik1998@gmail.com",
        pass: "nexvkbrpnumsfjho",
      },
    });

    const mailOptions = {
      from: "your_email@gmail.com",
      to: "amalchik1998@gmail.com",
      subject: "New Form Submission",
      text: `Email: ${email}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`Email ${email} sent: ` + info.response + req.body);
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ error: "Method Not Allowed" });
  }
}
