import { ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Theme } from "./componentes/Theme";
import Provider from "./context/Provider";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
// import Login from "./pages/Login";

function App() {
 return (
  <ThemeProvider theme={Theme}>
    <Provider>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/contato" element={ <Contato/> } />
        <Route path="/projetos" element={ <Projetos/> } />
      </Routes>
    </Provider>
  </ThemeProvider>
 ) 
}

export default App;