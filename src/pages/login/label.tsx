/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
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

function validatePassword(password: string): boolean {
  const hasUpperCase = /[A-Z]/.test(password)
  const hasNumber = /\d/.test(password)
  const isLongEnough = password.length > 8

  return hasUpperCase && hasNumber && isLongEnough
}

const FormSchema = z.object({
  name: z.string().min(3, {
    message: 'Informe pelo menos 3 letras.',
  }),
  password: z.string().refine((value) => validatePassword(value), {
    message: 'Por favor, insira pelo menos uma letra maiúscula e um número.',
  }),
})

export function LoginForm() {
  const [serverResponse, setServerResponse] = useState<any>(null)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    axios
      .post('http://localhost:3002/fazer-login', data)
      .then((response) => {
        console.log('Response:', response.data)

        localStorage.setItem('userToken', response.data.token)

        setServerResponse(response.data)

        // Redirecione o usuário para a página principal
        window.location.href = '/'
      })
      .catch((error) => {
        console.error('Erro ao realizar login:', error)

        if (error.response) {
          // Se houver uma resposta de erro da API, você pode tratar a mensagem de erro aqui.
          const errorMessage = error.response.data.message
          toast({
            title: 'Erro no login',
            description: errorMessage,
          })
        } else {
          // Se não houver uma resposta de erro da API, trate como um erro genérico.
          toast({
            title: 'Erro no login',
            description:
              'Ocorreu um erro ao realizar o login. Por favor, tente novamente.',
          })
        }
      })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input className="bg-muted" placeholder="Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  className="bg-muted"
                  type="password"
                  placeholder="Password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant="outline" type="submit">
          Fazer login
        </Button>
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
