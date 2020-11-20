import {
    POPULAR_FILMS_REQUEST,
    POPULAR_FILMS_SUCCESS,
    POPULAR_FILMS_FAIL,

    MORE_POPULAR_FILMS_REQUEST,
    MORE_POPULAR_FILMS_SUCCESS,
    MORE_POPULAR_FILMS_FAIL,

} from '../constants/ConstantsPopularFilms';

const InitialState = {
    filmsArray: null,
    error: null,
    loading: null,
    countPages: null,
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
                filmsArray: [...action.payload.results],
                countPages: action.payload.total_pages,
                nextPage: action.payload.page + 1
            }
        case POPULAR_FILMS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        case MORE_POPULAR_FILMS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case MORE_POPULAR_FILMS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                filmsArray: [...state.filmsArray, ...action.payload.results],
                nextPage: action.payload.page + 1
            }
        case MORE_POPULAR_FILMS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default: return state;
    }
}

export default ReducerPopularFilms;