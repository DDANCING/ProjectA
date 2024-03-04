import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";
import MusicSelector from "./components/utils/Musicselect";
import GuitarTuner from "./components/utils/captator";
import SkeletonList from "./components/utils/skelletonlist";
import Createacc from "./pages/createacc";
import Login from "./pages/login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Canvas, useFrame } from  "@react-three/fiber"
import { useRef } from "react";
import { Mesh } from "three";


function Box () {
  const boxRef = useRef<Mesh>(null!);
  useFrame(() => {
    
    
    boxRef.current.rotation.y += 0.001;
  })

  return ( 
    <mesh ref= {boxRef} > 
    < boxGeometry args={[5, 1, 5]} />
    < meshStandardMaterial />
    

      </mesh>
  );
}

function ThreeScene() {
  return (
    <Canvas>
      <ambientLight />
      <Box />
    </Canvas>
  );
}
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
      <main className="flex-1 p-6 flex gap-6 bg-muted rounded-sm ">
        <div className="max-h-screen grid grid-rows-2 gap-4 " > 
        
          <div className=" w-60 bg-background flex">
            
           
           
          </div>
          <div className="bg-background  h-32"> <GuitarTuner/> </div>
        </div>
        <div className="bg-background rounded-sm flex-1"> 
        <ThreeScene/>
        </div>
        <div className="bg-background rounded-sm w-80 justify-self-end flex flex-col items-center p-2">
         <MusicSelector/>
         <SkeletonList/>
         
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