/* eslint-disable prettier/prettier */
import { X } from 'lucide-react'
import { LoginForm } from './label'

function Login() {
  return (
    <div className="fixed inset-0 flex items-center justify-center text-muted-foreground border-2 border-primary">
      <main className="bg-secondary p-4 rounded-lg shadow-lg  box-content">
        <div className="justify-end flex">
          <a className=" flex " href="/">
            <X />
          </a>
        </div>
        <div>
          <LoginForm />
        </div>
      </main>
    </div>
  )
}

export default Login
