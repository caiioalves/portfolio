import { ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Theme } from "./componentes/Theme";
import Provider from "./context/Provider";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import Projetos from "./pages/Projetos";

function App() {
 return (
   <Provider>
     <ThemeProvider theme={Theme}>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/contato" element={ <Contato/> } />
        <Route path="/projetos" element={ <Projetos/> } />
      </Routes>
     </ThemeProvider>
   </Provider>
 ) 
}

export default App;