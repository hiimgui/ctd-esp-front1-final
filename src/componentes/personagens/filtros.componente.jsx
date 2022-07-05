import "./filtros.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useState } from "react";
import {
  fetchCharactersStart,
  filterCharactersStart,
} from "../../store/actions/characters.actions";
const Filtros = ({
  fetchCharactersStart,
  filterCharactersStart,
  characters,
}) => {
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  function filterCharacters() {
    if (!searchText) {
      fetchCharactersStart();
    } else {
      filterCharactersStart(searchText);
    }
  }

  return (
    <div className="filtros">
      <label htmlFor="nome">Filtrar por nome:</label>
      <input
        type="text"
        name="nome"
        value={searchText}
        onChange={handleChange}
      />
      <button type="button" onClick={filterCharacters}>
        Buscar
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  characters: state.characters,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchCharactersStart, filterCharactersStart }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Filtros);
