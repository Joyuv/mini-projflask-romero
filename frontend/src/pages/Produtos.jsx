export default function Produtos() {
  const LISTA_PRODUTOS = [
    ["Mouse", 30.0],
    ["Teclado", 100.0],
    ["Microfone", 500.0],
    ["Headset", 400.0],
    ["Mesa digitalizadora", 220.0],
    ["Monitor", 550.0],
    ["Impressora", 300.0],
    ["Caixa de som", 120.0],
  ];

  const produtosNodes = LISTA_PRODUTOS.map((produto, index) => (
    <li key={index} className="list-group-item">
      <label className="form-check-label">
        {produto[0]} - R${produto[1].toFixed(2)}
      </label>
      <input
        className="form-check-input"
        type="checkbox"
        id={produto[0]}
        placeholder="Selecionar"
        name={produto[0]}
      />
      <input
        className="form-control"
        type="text"
        id={produto[0] + "qnt"}
        name={produto[0] + "qnt"}
        placeholder="Quantidade"
      />
    </li>
  ));

  return (
    <form>
      <div className="card">
        <ul className="list-group-item">{produtosNodes}</ul>
        <div className="card-footer">
          <button
            className="btn btn-success"
            style={{ width: "100%" }}
            type="submit"
          >
            Enviar produtos ao carrinho
          </button>
        </div>
      </div>
    </form>
  );
}
