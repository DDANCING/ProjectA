import { useState } from 'react'
import axios from 'axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { toast } from '@/components/ui/use-toast'
import { SERVER_URL } from '@/lib/apiURL'


// Define o esquema de validação do formulário utilizando Zod
const FormSchema = z.object({
  email: z.string().email({
    message: 'Formato inválido de e-mail.',
  }),
  senha: z.string().regex(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})'), {
    message: 'Formato inválido de senha',
  }),
})

export function useLogin() {
  const [serverResponse, setServerResponse] = useState<any>(null)

  // Inicializa o formulário com React Hook Form, utilizando o resolver zodResolver com o esquema de validação definido anteriormente
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  // Função chamada quando o formulário é submetido
  function onSubmit(data: z.infer<typeof FormSchema>) {
    axios
      .post(`${SERVER_URL}/api/login`, data) // Envia uma requisição POST para a URL de login especificada
      .then((response) => {
        const { token, message, user } = response.data // Extrai os dados da resposta
        localStorage.setItem('userToken', token) // Armazena o token do usuário no armazenamento local
        setServerResponse({ message, user }) // Define a resposta do servidor no estado local
        window.location.href = '/' // Redireciona o usuário para a página inicial
        toast({
          title: 'login', 
          description: 'Login realizado com sucesso', 
        })
      })
      .catch((error) => {
        if (error.response) {
          const errorMessage = error.response.data.error || error.response.data.message // Extrai a mensagem de erro da resposta do servidor
          form.setError('email', { message: errorMessage }) // Define um erro no campo 'email' do formulário
          toast({
            title: 'Erro no login', // Título da mensagem de erro
            description: errorMessage, // Descrição da mensagem de erro
          })
        } else {
          form.setError('email', { message: 'Ocorreu um erro ao realizar o login. Por favor, tente novamente.' }) // Define um erro padrão no campo 'email' do formulário
        }
      })
  }

  return { form, onSubmit, serverResponse }
}
