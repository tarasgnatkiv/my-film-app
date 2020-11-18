import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import ContainerPopularFilms from '../../containers/ContainerPopularFilms';
import Footer from '../Footer/Footer';

import App1 from '../1'
import App2 from '../2'
import App3 from '../3'

function App() {
    return (
        <div className="App">
            <Header />
            <div className='container'>
                <div className='AppContent'>
                    <p>aaaaa</p>

                    <Switch>

                        <Route exact path='/' component={App1} />
                        <Route path='/top250'>
                            <App2 />
                        </Route>
                        <Route path='/rated' component={App3} />

                    </Switch>
                    <ContainerPopularFilms />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
