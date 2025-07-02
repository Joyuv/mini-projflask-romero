import axios from "axios";

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
  const handleSubmit = async (e) => {
    e.preventDefault(); // se estiver usando um <form>

    const checkboxes = Array.from(
      document.querySelectorAll("input[type='checkbox']"),
    );

    const produtosSelecionados = checkboxes
      .filter((cb) => cb.checked)
      .reduce((acc, cb) => {
        const id = cb.name;
        const quantInput = document.querySelector(`input[name='${id}qnt']`);
        const quant = parseInt(quantInput?.value, 10);

        if (quant > 0) {
          acc[id] = quant;
        }

        return acc;
      }, {});

    try {
      await axios.post("http://localhost:5000/carrinho", produtosSelecionados, {
        withCredentials: true,
      });
      console.log("Enviado com sucesso!");
    } catch (err) {
      console.error("Erro ao enviar:", err);
    }
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
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
