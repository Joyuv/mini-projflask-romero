import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Produtos from "./pages/Produtos";
import Carrinho from "./pages/Carrinho"

import "./App.css";

function App() {
  const lugar = useLocation();
  useEffect(() => {
    axios
      .get("http://localhost:5000/login", { withCredentials: true }) //https://mini-projflask-romero.onrender.com/login
      .then(function (response) {
        if (response.data["logado"] != null) {
          document.getElementById("login").style.visibility = "hidden";
          document.getElementById("cadastro").style.visibility = "hidden";
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log("rodou");
      });
  });

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
      } else if (lugar.pathname === "/carrinho") {
        texto = "Meu Carrinho"
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
      <Route path="/carrinho" element={<Carrinho />} />
    </Routes>
  );
}

export default App;
