// re_qW7rvRRX_BABfLRrN3xeekr5EdZ7hzEJv

import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const dataForm = await req.json();
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["jhondao.desarrollo@hotmail.com"],
      subject: "Portafolio JhonOrozco.com",
      react: EmailTemplate({
        firstName: dataForm.username,
        message: dataForm.message,
        email: dataForm.email,
      }),
      text: "JhonOrozco",
    });

    if (data.error) {
      return Response.json({ error: data.error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
