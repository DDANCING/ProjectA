"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { toast } from "sonner";

interface RequestFormProps {
  userEmail: string;
  userName: string;
}

const RequestForm: React.FC<RequestFormProps> = ({ userEmail, userName }) => {
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const pathname = usePathname();  // Obtém o pathname da URL

  // Extrai o tipo de solicitação da URL
  const requestType = pathname.split("/").pop(); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await fetch("/api/sendRequest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail,
          userName,
          requestType,
          message,
        }),
      });
      toast("Solicitação enviada com sucesso!");
      setMessage("");
    } catch (error) {
      console.error("Erro ao enviar solicitação:", error);
      toast("Falha ao enviar a solicitação. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label>
      Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your request here..."
          className="w-full p-2 border rounded"
          required
        />
      </label>
      <button
        type="submit"
        disabled={isLoading}
        className="p-2 bg-primary text-white rounded disabled:bg-primary/30"
      >
        {isLoading ? "Sending..." : "Send Request"}
      </button>
    </form>
  );
};

export default RequestForm;
