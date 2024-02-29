

import ThreeJSComponent from "./components/3d/cube";
import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";
import GuitarTuner from "./components/utils/captator";
import MicrophoneApp from "./components/utils/captator";


import Createacc from "./pages/createacc";
import Login from "./pages/login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export function App() {
  return (
    <Router>
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold"></h1>
        <div className="flex items-center gap-3">
          
          <a href="/login" className="text-muted-foreground">
            a
          </a>
          
          <a href="/createacc" className="...">
            <Button variant={'outline'}>Criar conta</Button>
          </a>
          
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <ModeToggle />
          </ThemeProvider>
        </div>
      </div>
      <main className="flex-1 p-6 flex gap-6 bg-muted">
        <div className="bg-background rounded-sm flex-1">  <ThreeJSComponent /> 
        <GuitarTuner /> </div>
        <div className="bg-background rounded-sm flex w-96 bg-black">
        </div>
      </main>
    </div>
    <Routes>
      <Route path="/createacc" element={<Createacc />} />
      <Route path="/login" element={<Login />} />

      {/* Outras rotas podem ser configuradas aqui */}
    </Routes>
  </Router>
  )
}
