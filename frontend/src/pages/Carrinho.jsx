import { useEffect, useState } from "react";
import axios from "axios";

export default function Carrinho() {
  const [carrinhoLista, setCarrinhoLista] = useState([]);

  useEffect(() => {
    const fetchCarrinho = async () => {
      try {
        const response = await axios.get("http://localhost:5000/carrinho", {
          withCredentials: true,
        });
        const carrinho = response.data["carrinho"];
        console.log("Carrinho:", carrinho);

        const nodes = carrinho.map(([produto, quantidade], index) => (
          <li key={index} className="list-group-item">
            <label className="form-check-label">
              {produto} — {quantidade}
            </label>
          </li>
        ));

        setCarrinhoLista(nodes);
      } catch (error) {
        console.error("Erro ao buscar carrinho:", error);
      }
    };

    fetchCarrinho();
  }, []);

  return (
    <div className="card" style={{ paddingTop: "10px" }}>
      <ul className="list-group">{carrinhoLista}</ul>
      <div className="card-footer">
        <h2>Carrinho</h2>
      </div>
    </div>
  );
}
