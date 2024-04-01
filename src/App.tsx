import { useState, useEffect } from 'react';
import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";
import Captador from './components/utils/captator';
import { CarouselMusic } from "./components/utils/carouselmusic";
import { SampleGuitarWithSound } from "./components/utils/guitar-react";
import ScoreboardList from "./components/utils/scoreBoard"; 
import Createacc from "./pages/createacc";
import Login from "./pages/login";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Toaster } from './components/ui/toaster';
import ReactDOM from "react-dom";
import CookieSession from "./lib/CookieSession";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    document.cookie = "session=; Path=/; Max-Age=0";
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("session="))
      ?.split("=")[1];

    if (cookieValue) {
      setIsLoggedIn(true);
    }
  }, []);


  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background text-muted-foreground">
        <div className="px-6 py-3 flex items-center justify-between border-b border-primary">
          <h1 className="text-xl font-bold"></h1>
          <div className="flex items-center gap-3">
          
          {isLoggedIn ? ( // Verifica se o usuário está logado
              <div className="flex items-center gap-3">
                <Button onClick={handleLogout} variant={'outline'}>Logout</Button> {/* Botão de logout */}
                
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/login" className="text-muted-foreground"> {/* Link para a página de login */}
                  <Button variant={'outline'}>Login</Button>
                </Link>
                <Link to="/create" className="text-muted-foreground"> {/* Link para a página de criação de conta */}
                  <Button variant={'outline'}>Criar conta</Button>
                </Link>
              </div>
            )}
            
            <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
              <ModeToggle />
            </ThemeProvider>
          </div>
        </div>
        <main className="flex-1 p-6 flex gap-6 bg-muted rounded-sm">
          <div className="h-screen grid grid-rows-2 gap-4">
            <div className="w-60 bg-background">
              <ScoreboardList/>
            </div>
            <div className="bg-background  h-32"> <Captador/> </div>
          </div>
          <div className="p-3 bg-background rounded-sm flex-1 flex-col ">
            <SampleGuitarWithSound  />
            
          </div>
          <div className="bg-background rounded-sm w-96 justify-self-start flex flex-col items-center p-2">
            <CarouselMusic/>
          </div>
          
        </main>
        <Toaster />
      </div>
      <Routes>
        <Route path="/create" element={<Createacc />} />
        <Route path="/login" element={ <Login />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;
