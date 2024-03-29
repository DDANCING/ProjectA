import { useState } from 'react'
import axios from 'axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'

// Define o esquema de validação do formulário utilizando Zod
const FormSchema = z.object({
  email: z.string().email({
    message: 'Formato inválido de e-mail.',
  }),
  senha: z.string().regex(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})'),
    {
    message: 'Formato invalido de senha',
  }),
})

export function LoginForm() {
  const [serverResponse, setServerResponse] = useState<any>(null)

  // Inicializa o formulário com React Hook Form, utilizando o resolver zodResolver com o esquema de validação definido anteriormente
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  // Função chamada quando o formulário é submetido
  function onSubmit(data: z.infer<typeof FormSchema>) {
    axios
      .post('http://localhost:3333/login', data) // Envia uma requisição POST para a URL de login especificada
      .then((response) => {
        const { token, message, user } = response.data // Extrai os dados da resposta
        localStorage.setItem('userToken', token) // Armazena o token do usuário no armazenamento local
        setServerResponse({ message, user }) // Define a resposta do servidor no estado local
        window.location.href = '/' // Redireciona o usuário para a página inicial
      })
      .catch((error) => {
        if (error.response) {
          const errorMessage = error.response.data.error || error.response.data.message // Extrai a mensagem de erro da resposta do servidor
          toast({
            title: 'Erro no login', // Título da mensagem de erro
            description: errorMessage, // Descrição da mensagem de erro
          })
        } else {
          toast({
            title: 'Erro no login', // Título da mensagem de erro
            description: 'Ocorreu um erro ao realizar o login. Por favor, tente novamente.', // Descrição da mensagem de erro padrão
          })
        }
        form.setError('email', { message: 'Nome inválido ou senha incorreta.' }) // Define um erro no campo 'name' do formulário
      })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        {/* Componente FormField para o campo 'name' */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
                <Input className="bg-muted border border-muted-foreground" placeholder="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Componente FormField para o campo 'password' */}
        <FormField
          control={form.control}
          name="senha"
          render={({ field }) => (
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
                <Input
                  className="bg-muted border border-muted-foreground"
                  type="password"
                  placeholder="senha"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Botão de submissão do formulário */}
        <Button type="submit">
          Fazer login
        </Button>
        {/* Exibe a resposta do servidor, se disponível */}
        {serverResponse && (
          <div>
            <h1>Resposta do Servidor:</h1>
            <p>{serverResponse.message}</p>
          </div>
        )}
      </form>
    </Form>
  )
}
