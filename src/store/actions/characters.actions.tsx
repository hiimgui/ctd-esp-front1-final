//4 actions principais
type ICharacter = {
  id: number,
  name: string,
  
};
export function fetchCharactersStart() {
  return {
    type: "FETCH_CHARACTERS_START",
  };
}
export function filterCharactersStart(searchText: string) {
  return {
    type: "FILTER_CHARACTERS_START",
    payload: searchText,
  };
}

export function fetchCharactersSuccess(characters: ICharacter[]) {
  return {
    type: "FETCH_CHARACTERS_SUCCESS",
    payload: characters,
  };
}
export function fetchCharactersError(error: string) {
  return {
    type: "FETCH_CHARACTERS_ERROR",
    payload: error,
  };
}
