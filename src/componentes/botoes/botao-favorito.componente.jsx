import "./botao-favorito.css";
import star from "../../imagens/star.png";
import starfilled from "../../imagens/starfilled.png";
import { useState } from "react";
/**
 * Botão que indica se um elemento é favorito ou não, e dá a possibilidade de marcá-lo/desmarcá-lo
 *
 * Terá que tipar as propriedades se utilizar este componente
 *
 *
 * @returns Elemento JSX
 */
const BotaoFavorito = ({ isFavorito, onClick }) => {
  const [favorito, setFavorito] = useState(false);
  const src = favorito ? star : starfilled;
  const handleClick = () => {
    setFavorito(!favorito);
  };

  return (
    <div className="botao-favorito" onClick={handleClick}>
      <img src={src} alt={"favorito"} />
    </div>
  );
};

export default BotaoFavorito;
