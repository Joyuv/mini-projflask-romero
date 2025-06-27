export default function Carrinho(){
    const produtosNodes = axios.get.map((produto, index) => (
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
        </li>))
    return(
        <>
            Nada ainda
        </>
    )
}