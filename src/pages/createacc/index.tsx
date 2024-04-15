/* eslint-disable prettier/prettier */
import { InputForm } from './label'
import { X } from 'lucide-react'

function Createacc() {
  return (
    <div className="fixed inset-0 flex items-center justify-center text-muted-foreground ">
      <main className="bg-secondary p-4 rounded-lg shadow-lg  box-content border-2 border-primary">
        <div className="justify-end flex">
        <a className="flex" href="/" >
        <X/>
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
