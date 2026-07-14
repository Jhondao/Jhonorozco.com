import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(1).max(5000),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validation = contactSchema.safeParse(body);
    
    if (!validation.success) {
      return Response.json(
        { error: { message: "Datos del formulario no válidos." } },
        { status: 400 }
      );
    }

    const { username, email, message } = validation.data;

    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["jhondao.desarrollo@hotmail.com"],
      subject: "Portafolio JhonOrozco.com",
      react: (
        <EmailTemplate
          firstName={username}
          message={message}
          email={email}
        />
      ),
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
