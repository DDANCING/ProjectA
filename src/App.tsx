import Createacc from "./pages/createacc";
import Login from "./pages/login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from './components/ui/toaster';

import Header from "./components/main/header";
import Main from "./components/main/main";


function App() {


  return (
    <Router>
      <div className="flex flex-col h-screen bg-secondary">
      <Header/>
      <Main/>
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