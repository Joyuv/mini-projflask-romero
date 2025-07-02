import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Cadastro() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    nome: "",
    senha: "",
    mostrarSenha: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    console.log("enviando", form);
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/usuarios", {
        //https://mini-projflask-romero.onrender.com/login
        email: form.email,
        nome: form.nome,
        senha: form.senha,
      });
    } catch (err) {
      alert("Erro ao salvar usuário");
    } finally {
      alert("Usuário salvo com sucesso!");
      navigate("/login", { replace: true });
      setForm({ email: "", nome: "", senha: "", mostrarSenha: false });
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-header">Cadastro</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-control bg-dark-subtle"
              type="text"
              name="email"
              id="email"
              placeholder="Digite um email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label className="form-label" htmlFor="username">
              Nome de usuário
            </label>
            <input
              className="form-control bg-dark-subtle"
              type="text"
              name="nome"
              id="username"
              placeholder="Digite um nome de usuário"
              value={form.nome}
              onChange={handleChange}
              required
            />

            <label className="form-label" htmlFor="senha">
              Senha
            </label>
            <input
              className="form-control bg-dark-subtle"
              type={form.mostrarSenha ? "text" : "password"}
              id="senha"
              name="senha"
              placeholder="Digite uma senha"
              value={form.senha}
              onChange={handleChange}
              required
            />
            <span style={{ fontSize: "0.78em" }}>
              <label
                className="form-label"
                style={{ color: "rgba(230, 30, 30, 0.53)" }}
                htmlFor="senha"
              >
                * A senha deve ter ao menos 5 caracteres
              </label>
              <input
                className="form-check-input"
                name="mostrarSenha"
                checked={form.mostrarSenha}
                onChange={handleChange}
                id="mostrar_senha"
                type="checkbox"
              />
              <label className="form-check-label" htmlFor="mostrar_senha">
                Mostrar senha
              </label>
            </span>
            <button className="btn btn-warning" type="submit">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
