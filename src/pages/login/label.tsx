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
import { useLogin } from '@/hooks/useLogin'

export function LoginForm() {
  const { form, onSubmit, serverResponse } = useLogin()



  return (
    <div className='flex flex-col gap-2 '>
      <div className='flex flex-row justify-center gap-4 items-end'>
      <a className='text-2xl font-extrabold text-foreground '>Faça login</a> 
      <p className='text-2xl text-primary font-bold' >|</p> 
      <a className='text-sm hover:drop-shadow-[0_1.2px_1.2px_rgba(124,58,237,0.8)]' href="/create" >Criar conta</a> 
      </div>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Componente FormField para o campo 'name' */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
                <Input 
                className="bg-background border border-muted-foreground w-72" 
                placeholder="email" 
                {...field} 
                />
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
                  className="bg-background border border-muted-foreground w-72"
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
        <Button type="submit" className='w-72 mt-6'>
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
    </div>
  )
}