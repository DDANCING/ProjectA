
import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";
import MusicSelector from "./components/utils/Musicselect";
import GuitarTuner from "./components/utils/captator";
import { SampleGuitarWithSound } from "./components/utils/guitar-react";
import ScoreboardList from "./components/utils/scoreBoard";

import Createacc from "./pages/createacc";
import Login from "./pages/login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {
  
  return (
    <Router>
    <div className="min-h-screen flex flex-col bg-background text-muted-foreground">
      <div className="px-6 py-3 flex items-center justify-between border-b border-primary">
        <h1 className="text-xl font-bold"></h1>
        <div className="flex items-center gap-3">
          
          <a href="/login" className="text-muted-foreground ">
          <Button variant={'outline'}>Login</Button>
          </a>
          
          <a href="/createacc" className="...">
            <Button variant={'outline'}>Criar conta</Button>
          </a>
          
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <ModeToggle />
          </ThemeProvider>
        </div>
      </div>
      <main className="flex-1 p-6 flex gap-6 bg-muted rounded-sm">
        <div className="h-screen grid grid-rows-2 gap-4" > 
        
          <div className="w-60 bg-background">
          <ScoreboardList/>
          </div>
          <div className="bg-background  h-32"> <GuitarTuner/> </div>
        </div>
        <div className="bg-background rounded-sm flex-1 flex-col ">

  <SampleGuitarWithSound  />
 

    
</div>

        <div className="bg-background rounded-sm w-96 justify-self-start flex flex-col items-center p-2">
         <MusicSelector/>
         <script src="https://www.youtube.com/iframe_api"></script>
         <script src="./components/utils/YouTubePlayer.tsx"></script>
         
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
export default App;