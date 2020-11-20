import {
    POPULAR_FILMS_REQUEST,
    POPULAR_FILMS_SUCCESS,
    POPULAR_FILMS_FAIL,

    MORE_POPULAR_FILMS_REQUEST,
    MORE_POPULAR_FILMS_SUCCESS,
    MORE_POPULAR_FILMS_FAIL,
} from '../constants/ConstantsPopularFilms';

import {
    PopularFilmsAPI,
    MorePopularFilmsAPI,
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

const MorePopularFilms = async (dispatch, nextPage) => {
    dispatch({ type: MORE_POPULAR_FILMS_REQUEST });
    try {
        const response = await MorePopularFilmsAPI(nextPage);
        const res = await response.json();
        dispatch({ type: MORE_POPULAR_FILMS_SUCCESS, payload: res });
    } catch (e) {
        dispatch({ type: MORE_POPULAR_FILMS_FAIL, payload: e });
    }
}

export const PopularFilmsAction = dispatch => {
    return () => PopularFilms(dispatch);
}

export const MorePopularFilmsAction = dispatch => {
    return (nextPage) => MorePopularFilms(dispatch, nextPage);
}