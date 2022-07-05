import "./paginacao.css";
import { useState } from "react";
/**
 * Componente que contém os botões para paginar
 *
 * Você deve adicionar as propriedades necessárias para que funcione corretamente
 *
 *
 * @returns Elemento JSX
 */

const Paginacao = () => {
  const [page, setPage] = useState(0);

  const handleNext = () => {
    setPage((page) => page + 1);
    console.log(page);
  };
  const handleBack = () => {
    setPage((page) => page - 1);
    console.log(page);
  };
  return (
    <div className="paginacao">
      <button onClick={handleBack} className={"primary"}>
        Anterior
      </button>
      <button disabled={false} onClick={handleNext} className={"primary"}>
        Próximo
      </button>
    </div>
  );
};

export default Paginacao;
