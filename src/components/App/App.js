import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
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
                    <Switch>
                        <Redirect exact from="/" to="/home" />
                        <Route exact path='/home' component={ContainerPopularFilms} />
                        <Route exact path='/top250' component={App2} />
                        <Route exact path='/rated' component={App3} />
                    </Switch>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
