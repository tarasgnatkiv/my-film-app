import React from 'react';
import './ComponentFilm.css';
import { Link } from "react-router-dom";


class ComponentFilm extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
                <Link to={`/home/${this.props.info.id}`} className='filmItem'>
                    <img src={`https://image.tmdb.org/t/p/original/${this.props.info.poster_path}`} />
                    <p>{this.props.info.title}</p>
                    <span>{this.props.info.vote_average}</span>
                </Link>
        );
    }
}

export default ComponentFilm;