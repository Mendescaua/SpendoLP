import Header from "@/components/Header";

export default function DeleteAccount() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Solicitação de Exclusão de Conta e Dados
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Esta página permite que usuários do aplicativo <strong>Spendo </strong> 
            solicitem a exclusão de sua conta e dos dados pessoais associados.
          </p>
        </div>

        <div
          className="border rounded-lg p-6 text-left space-y-4"
          style={{ backgroundColor: "#e9f0fa", borderColor: "#c4d6f0" }}
        >
          <h2 className="text-xl font-semibold" style={{ color: "#4678c0" }}>
            Como solicitar a exclusão:
          </h2>
          <ol
            className="list-decimal list-inside space-y-2"
            style={{ color: "#4678c0" }}
          >
            <li>
              Envie um e-mail para <strong>cauamendes.code@gmail.com</strong>{" "}
              com o assunto <em>"Exclusão de Conta - Spendo"</em>.
            </li>
            <li>
              No corpo do e-mail, informe:
              <ul className="list-disc list-inside ml-4">
                <li>Seu nome completo</li>
                <li>O e-mail cadastrado no aplicativo</li>
                <li>Motivo (opcional)</li>
              </ul>
            </li>
            <li>
              Você receberá uma confirmação por e-mail e sua conta será
              excluída em até <strong>7 dias úteis</strong>.
            </li>
          </ol>

          <h2 className="text-xl font-semibold" style={{ color: "#4678c0" }}>
            Dados excluídos:
          </h2>
          <p style={{ color: "#4678c0" }}>
            Todos os dados pessoais associados à sua conta, incluindo nome,
            e-mail, configurações e histórico de uso, serão removidos
            permanentemente.
          </p>

          <h2 className="text-xl font-semibold" style={{ color: "#4678c0" }}>
            Contato de suporte:
          </h2>
          <p style={{ color: "#4678c0" }}>
            Em caso de dúvidas, entre em contato pelo e-mail:{" "}
            <a
              href="mailto:cauamendes.code@gmail.com"
              style={{ color: "#4678c0", textDecoration: "underline" }}
            >
              cauamendes.code@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
