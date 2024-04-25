/* eslint-disable prettier/prettier */
import { InputForm } from './label'
import { X } from 'lucide-react'

function Createacc() {
  return (
    <div className="fixed inset-0 flex items-center justify-center text-muted-foreground ">
      <main className="h-[239px] bg-background p-5 rounded-lg box-content border-primary shadow-[0_0_2px_#fff,inset_0_0_2px_#7C3AED,0_0_5px_#7C3AED,0_0_15px_#7C3AED,0_0_30px_#7C3AED] justify-start">
        <div className="justify-end flex">
        <a className="flex size-4" href="/" >
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
