import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import Search from '../Search/Search';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            search: false,
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleClick() {
        this.setState({
            clicked: !this.state.clicked
        })
        if (!this.state.clicked) {
            document.body.classList.add('lock');
        } else {
            document.body.classList.remove('lock');
        }
    }

    handleSearch() {
        this.setState({
            search: !this.state.search
        })
    }

    render() {
        return (
            <>
                <header className='header'>
                    <div className='container'>
                        <div className='headerBody'>
                            <div className='headerLeft'>
                                <div className='headerLogo'>
                                    <img src='/img/Header/logoReact.png' alt='' />
                                    <h1>React<span>Films</span></h1>
                                </div>
                                <nav className={this.state.clicked ? 'headerMenu active' : 'headerMenu'}>
                                    <ul className='headerList'>
                                        <li>
                                            <Link to={'/'} className="headerLink" onClick={this.handleClick}>Popular</Link>
                                        </li>
                                        <li>
                                            <Link to={'/top250'} className="headerLink" onClick={this.handleClick}>Top250</Link>
                                        </li>
                                        <li>
                                            <Link to={'/rated'} className="headerLink" onClick={this.handleClick}>Rated</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className='headerRight'>
                                <div className='headerSearch'>
                                    <button className='btnSearch' onClick={this.handleSearch}>
                                        <img src='/img/Header/search.png' alt='' />
                                        <p>Search</p>
                                    </button>
                                    <div
                                        className={this.state.clicked ? 'headerBurger active' : 'headerBurger'}
                                        onClick={this.handleClick}>
                                        <span></span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </header>
            </>
        );
    }
}

export default Header;