import {
    POPULAR_FILMS_REQUEST,
    POPULAR_FILMS_SUCCESS,
    POPULAR_FILMS_FAIL
} from '../constants/ConstantsPopularFilms';

import {
    PopularFilmsAPI
} from '../API/filmsApi';

const PopularFilms = async dispatch => {
    dispatch({ type: POPULAR_FILMS_REQUEST });
    try {
        const response = await PopularFilmsAPI();
        const res = await response.json();
        dispatch({ type: POPULAR_FILMS_SUCCESS, payload: res });
    } catch (e) {
        dispatch({ type: POPULAR_FILMS_FAIL, payload: e });
    }
};

export const PopularFilmsAction = dispatch => {
    return () => PopularFilms(dispatch);
}