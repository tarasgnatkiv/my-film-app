import React from 'react';

const ComponentPopularFilms = (props) => {
    let a, b;

    if (props.ReducerPopularFilms.filmsData && props.ReducerPopularFilms.filmsData.results) {
        b = props.ReducerPopularFilms.filmsData.results.map(i =>
            <div>{i.title}</div>
        );
    } else {
        b = <div>No data</div>
    }

    console.log(props.ReducerPopularFilms);

    return (
        <div>
            <h3>my</h3>

            <button onClick={props.PopularFilmsAction}>Planets</button>
            {b}
        </div>
    )
}

export default ComponentPopularFilms;
