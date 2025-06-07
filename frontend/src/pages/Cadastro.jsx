import { useState } from "react";
export default function Cadastro() {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <>
      <form>
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          className="form-control bg-dark-subtle"
          type="text"
          name="email"
          id="email"
          placeholder="Digite um email"
          required
        />

        <label className="form-label" htmlFor="username">
          Nome de usuário
        </label>
        <input
          className="form-control bg-dark-subtle"
          type="text"
          name="login"
          id="username"
          placeholder="Digite um nome de usuário"
          required
        />

        <label className="form-label" htmlFor="senha">
          Senha
        </label>
        <input
          className="form-control bg-dark-subtle"
          type={mostrarSenha ? "text" : "password"}
          id="senha"
          name="senha"
          placeholder="Digite uma senha"
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
            onChange={(e) => setMostrarSenha(e.target.checked)}
            id="mostrar_senha"
            type="checkbox"
            value="teste"
          />
          <label
            className="form-label"
            className="form-check-label"
            htmlFor="mostrar_senha"
          >
            Mostrar senha
          </label>
        </span>
        <button className="btn btn-warning" type="submit">
          Cadastrar
        </button>
      </form>
    </>
  );
}
