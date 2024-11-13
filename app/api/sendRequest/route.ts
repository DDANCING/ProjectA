import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface RequestBody {
  message: string;
  requestType: string;
  userEmail: string;
  userName: string;
}

// Exporta um método POST
export async function POST(req: Request) {
  const { message, requestType, userEmail, userName } = await req.json() as RequestBody;

  const emailData = {
    from: "ProjectA<noreply@projecta.top>", // Certifique-se de que este e-mail está verificado no Resend
    to: "marcmaker@outlook.com",
    subject: `Nova Solicitação: ${requestType}`,
    html: `<p>Tipo de Solicitação: ${requestType}</p>
           <p>Usuário: ${userName} (${userEmail})</p>
           <p>Mensagem: ${message}</p>`,
  };

  try {
    await resend.emails.send(emailData);
    return NextResponse.json({ message: "Pedido enviado com sucesso" }, { status: 200 });
  } catch (error) {
    console.error("Erro ao enviar o e-mail:", error);
    return NextResponse.json({ message: "Erro ao enviar o pedido" }, { status: 500 });
  }
}