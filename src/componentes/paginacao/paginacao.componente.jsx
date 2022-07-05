import "./paginacao.css";
import { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  paginateCharactersForward,
  paginateCharactersBackwards,
} from "../../store/actions/characters.actions";
/**
 * Componente que contém os botões para paginar
 *
 * Você deve adicionar as propriedades necessárias para que funcione corretamente
 *
 *
 * @returns Elemento JSX
 */

const Paginacao = ({
  paginateCharactersBackwards,
  paginateCharactersForward,
}) => {
  const [page, setPage] = useState(0);

  const handleNext = () => {
    setPage((page) => page + 1);
    paginateCharactersForward(page);
  };
  const handleBack = () => {
    setPage((page) => page - 1);
    paginateCharactersBackwards(page);
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

const mapStateToProps = (state) => ({
  characters: state.characters,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { paginateCharactersBackwards, paginateCharactersForward },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Paginacao);
