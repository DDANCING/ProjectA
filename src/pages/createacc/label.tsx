/* eslint-disable prettier/prettier */
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


// Função de validação customizada para a senha
function validatePassword(password: string): boolean {
  // Pelo menos uma letra maiúscula
  const hasUpperCase = /[A-Z]/.test(password)
  // Pelo menos um número
  const hasNumber = /\d/.test(password)
  // Mais de 8 dígitos
  const isLongEnough = password.length > 8

  return hasUpperCase && hasNumber && isLongEnough
}

const FormSchema = z.object({
  nome: z.string().min(3, {
    message: 'Informe pelo menos 3 letras.',
  }),
  email: z.string().email({
    message: 'Formato inválido de e-mail.',
  }),
  senha: z.string().refine((value) => validatePassword(value), {
    message: 'Por favor, insira pelo menos uma letra maiúscula e um número.',
  }),
})

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // Enviar os dados do formulário para a API
    axios
      .post('http://localhost:3333/register', data)
      .then(() => {
        window.location.href = '/';
        toast({
          title: 'Cadastro realizado com sucesso',
          description: 'Seu cadastro foi realizado com sucesso.',
        })
      })
      .catch((error) => {
        // Tratar erros, por exemplo, exibir uma mensagem de erro
        console.error('Erro ao cadastrar usuário:', error)
        toast({
          title: 'Erro no cadastro',
          description:
            'Ocorreu um erro ao cadastrar o usuário. Por favor, tente novamente.',
        })
      })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
                <Input className="bg-muted border border-muted-foreground" placeholder="Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
                <Input className="bg-muted border border-muted-foreground" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
                  placeholder="Password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button  type="submit">
          Criar conta
        </Button>
      </form>
    </Form>
  )
}

// Export the InputForm component
export default InputForm
