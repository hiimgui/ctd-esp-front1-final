type ActionType = {
  type: string;
  payload?: any;
};

const initialState = {
  isFetching: false,
  characters: [],
  errorMessage: undefined,
};

export function fetchCharactersReducer(
  state = initialState,
  action: ActionType
) {
  switch (action.type) {
    case "FETCH_CHARACTERS_START":
    case "FILTER_CHARACTERS_START":
      return {
        ...state,
        isFetching: true,
      };
    case "FETCH_CHARACTERS_SUCCESS":
      return {
        ...state,
        errorMessage: undefined,
        isFetching: false,
        characters: action.payload,
      };
    case "FETCH_CHARACTERS_ERROR":
      return {
        ...state,
        characters: [],
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}
