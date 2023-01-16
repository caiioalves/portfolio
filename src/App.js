import { Route, Routes } from "react-router-dom";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import Projetos from "./pages/Projetos";

function App() {
 return (
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/contato" element={ <Contato/> } />
        <Route path="/projetos" element={ <Projetos/> } />
      </Routes>
 ) 
}

export default App;