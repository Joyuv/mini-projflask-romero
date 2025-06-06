import React from 'react';

export default function Navbar() {
  return (
    <header className="bg-dark-subtle">
        <div>
            <p className="h1"></p>
            <div>
                <a className="btn btn-outline-light" href="{{ url_for('produtos') }}">Produtos</a>
                <a className="btn btn-outline-light" href="{{ url_for('carrinho') }}">Carrinho</a>
            </div>
        </div>
        <div>
            <div>
                <a className="btn btn-outline-warning" href="{{ url_for('cadastro') }}">Cadastrar-se</a>
                <a className="btn btn-outline-info" href="{{ url_for('login') }}">Login</a>
            </div>
        </div>
    </header>
  );
}
