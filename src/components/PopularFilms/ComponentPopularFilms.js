import React from 'react';
import ComponentFilm from '../ComponentFilm/ComponentFilm';
import { Switch, Route } from "react-router-dom";
import './ComponentPopularFilms.css';
import ComponentFilmInfo from '../ComponentFilmInfo'


class ComponentPopularFilms extends React.Component {
    constructor(props) {
        super(props);
        this.showPopularFilms = this.showPopularFilms.bind(this)
    }

    showPopularFilms() {
        let filmsArr;

        if (this.props.ReducerPopularFilms.filmsArray) {
            filmsArr = this.props.ReducerPopularFilms.filmsArray.map(i =>
                <ComponentFilm info={i} />
                  
            );
        } else {
            filmsArr = <div>Loading</div>
        }
        return filmsArr;
    }

    componentDidMount() {
        this.props.PopularFilmsAction()
    }

    render() {
        console.log(this.props)
        return (
            <div className='popularFilmsComponent'>
                {/* <button onClick={() => this.props.PopularFilmsAction()}>Films</button> */}
                <button onClick={() => this.props.MorePopularFilmsAction(this.props.ReducerPopularFilms.nextPage)}>More</button>
                <h2>Popular movie right now</h2>
                <div className='popularFilmsContainer'>
                    {this.showPopularFilms()}
                </div>
            </div>
        );
    }

}

export default ComponentPopularFilms;
