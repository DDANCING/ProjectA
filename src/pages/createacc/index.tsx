/* eslint-disable prettier/prettier */
import { X } from 'lucide-react'
import { InputForm } from './label'

function Createacc() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <main className="bg-background p-4 rounded-lg shadow-lg box-content w-64 opacity-90">
        <div className="justify-end flex">
          <a className="text-muted-foreground flex " href="/">
            <X />
          </a>
        </div>
        <div>
          <InputForm />
        </div>
      </main>
    </div>
  )
}

export default Createacc
