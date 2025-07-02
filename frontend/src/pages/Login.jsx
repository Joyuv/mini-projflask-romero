import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    console.log("enviando", form);
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/login",
        {
          //https://mini-projflask-romero.onrender.com/login
          email: form.email,
          senha: form.senha,
        },
        { withCredentials: true },
      );
    } catch (err) {
      alert("Erro ao logar");
      return;
    }
    alert("Logado com sucesso");
    navigate("/", { replace: true });
    setForm({ email: "", senha: "" });
  };

  return (
    <>
      <div className="card">
        <div className="card-header">Login</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-control bg-dark-subtle"
              type="text"
              id="email"
              name="email"
              placeholder="Digite seu email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label className="form-label" htmlFor="senha">
              Senha
            </label>
            <input
              className="form-control bg-dark-subtle"
              type="password"
              id="senha"
              name="senha"
              placeholder="Digite sua senha"
              value={form.senha}
              onChange={handleChange}
              required
            />

            <button
              className="btn btn-info"
              style={{ marginTop: "0.7em" }}
              type="submit"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
