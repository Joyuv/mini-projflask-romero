import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Produtos from "./pages/Produtos";

import "./App.css";

function App() {
  const lugar = useLocation();
  useEffect(() => {
    const pElemento = document.getElementById("rota-atual");
    if (pElemento) {
      let texto;
      if (lugar.pathname === "/") {
        texto = "Página Inicial";
      } else if (lugar.pathname === "/produtos") {
        texto = "Produtos";
      } else if (lugar.pathname === "/cadastro") {
        texto = "Cadastrar-se";
      } else if (lugar.pathname === "/login") {
        texto = "Logar";
      } else {
        texto = "Seção desconhecida";
      }
      pElemento.textContent = texto;
    }
  }, [lugar.pathname]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/produtos" element={<Produtos />} />
    </Routes>
  );
}

export default App;
