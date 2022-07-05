import { combineReducers } from "redux";
import { fetchCharactersReducer } from "../reducers/fetchCharactersReducer"
 

export default combineReducers({
  characters: fetchCharactersReducer,
});