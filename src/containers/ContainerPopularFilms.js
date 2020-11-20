import { connect } from 'react-redux';
import { PopularFilmsAction } from '../actions/ActionsPopularFilm';
import ComponentPopularFilms from '../components/PopularFilms/ComponentPopularFilms';

const mapStateToProps = (state) => ({
    ReducerPopularFilms: state.ReducerPopularFilms
})

const mapDispatchToProps = dispatch => {
    return {
        PopularFilmsAction: PopularFilmsAction(dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ComponentPopularFilms)