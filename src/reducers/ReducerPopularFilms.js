import {
    POPULAR_FILMS_REQUEST,
    POPULAR_FILMS_SUCCESS,
    POPULAR_FILMS_FAIL
} from '../constants/ConstantsPopularFilms';

const InitialState = {
    filmsData: null,
    error: null,
    loading: null
}

const ReducerPopularFilms = (state = InitialState, action) => {
    switch (action.type) {
        case POPULAR_FILMS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case POPULAR_FILMS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                filmsData: action.payload
            }
        case POPULAR_FILMS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
                filmsData: false
            }
        default: return state;
    }
}

export default ReducerPopularFilms;