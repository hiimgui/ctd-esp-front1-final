import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchCharactersSuccess,
  fetchCharactersError,
} from "../actions/characters.actions";

function* fetchCharacterSaga() {
  try {
    //@ts-ignore
    const response = yield call(
      fetch,
      "https://rickandmortyapi.com/api/character"
    );
    //@ts-ignore
    const data = yield response.json();

    const favorito = data.results.map((dataItem: any) => ({
      
        ...dataItem,
        favorito: false,
      
    }));
    console.log(favorito);
    yield put(fetchCharactersSuccess(favorito));
  } catch (error: any) {
    yield put(fetchCharactersError(error.message));
  }
}
function* paginateCharacterForwardSaga({ payload }) {
  try {
    //@ts-ignore
    const response = yield call(
      fetch,
      `https://rickandmortyapi.com/api/character?page=${payload}`
    );
    //@ts-ignore
    const data = yield response.json();
    yield put(fetchCharactersSuccess(data));
  } catch (error: any) {
    yield put(fetchCharactersError(error.message));
  }
}
function* paginateCharacterBackwardsSaga({ payload }) {
  try {
    //@ts-ignore
    const response = yield call(
      fetch,
      `https://rickandmortyapi.com/api/character?page=${payload}`
    );
    //@ts-ignore
    const data = yield response.json();
    yield put(fetchCharactersSuccess(data));
  } catch (error: any) {
    yield put(fetchCharactersError(error.message));
  }
}

//responsavel por funcao de filtro
//@ts-ignore
function* filterCharactersSaga({ payload }) {
  try {
    //@ts-ignore
    const response = yield call(
      fetch,
      `https://rickandmortyapi.com/api/character/?name=${payload}`
    );
    //@ts-ignore
    const data = yield response.json();
    yield put(fetchCharactersSuccess(data));
  } catch (error) {
    //@ts-ignore
    yield put(fetchCharactersError(error.message));
  }
}

export default function* sagas() {
  yield takeLatest("FETCH_CHARACTERS_START", fetchCharacterSaga);
  //@ts-ignore
  yield takeLatest("PAGINATE_CHARACTERS_FORWARD", paginateCharacterForwardSaga);
  //@ts-ignore
  yield takeLatest( "PAGINATE_CHARACTERS_BACKWARDS",paginateCharacterBackwardsSaga
  );
  //@ts-ignore
  yield takeLatest("FILTER_CHARACTERS_START", filterCharactersSaga);
}
