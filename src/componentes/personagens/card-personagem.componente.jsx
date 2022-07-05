import BotaoFavorito from "../botoes/botao-favorito.componente";
import "./card-personagem.css";
import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  fetchCharactersStart,
  filterCharactersStart,
} from "../../store/actions/characters.actions";
/**
 * Card para cada personagem dentro da grade de personagem.
 *
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos personagens
 *
 *
 * @returns Elemento JSX
 */
const CardPersonagem = ({
  characters,
  filterCharactersStart,
  fetchCharactersStart,
}) => {
  useEffect(() => fetchCharactersStart(), [fetchCharactersStart]);
  return (
    <>
      <main>{console.log(characters)}</main>
    </>
    // <div className="card-personagem">
    //   <img
    //     src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    //     alt="Rick Sanchez"
    //   />
    //   <div className="card-personagem-body">
    //     <span>Rick Sanchez</span>
    //     <BotaoFavorito isFavorito={false} />
    //   </div>
    // </div>
  );
};
const mapStateToProps = (state) => ({
  characters: state.characters,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchCharactersStart, filterCharactersStart }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CardPersonagem);

// export default CardPersonagem;
