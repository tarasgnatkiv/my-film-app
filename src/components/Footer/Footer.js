import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className='footerBody'>
                    <h2>Contact us</h2>
                    <div className='connect'>
                        <div className='contatItems'>
                            <div className='contact'>
                                <a href='tel:+380995217717'>
                                    <img src='/img/Footer/phone.svg' alt='' />
                                </a>
                                <span>+38 099 521 7717</span>
                            </div>
                            <div className='contact'>
                                <a href='mailto:tarasgnatkiv@gmail.com'>
                                    <img src='/img/Footer/gmail.svg' alt='' />
                                </a>
                                <span>tarasgnatkiv@gmail.com</span>
                            </div>
                        </div>
                        <div className='socialItems'>
                            <div className='social'>
                                <a href='https://www.instagram.com/chelovek_afk/' target='blank'>
                                    <img src='/img/Footer/instagram.svg' alt='' />
                                </a>
                            </div>
                            <div className='social'>
                                <a href='https://www.facebook.com/taras.hnatkiv' target='blank'>
                                    <img src='/img/Footer/facebook.svg' alt='' />
                                </a>
                            </div>
                            <div className='social'>
                                <a href='https://join.skype.com/invite/kosZin4JTfWb' target='blank'>
                                    <img src='/img/Footer/skype.svg' alt='' />
                                </a>
                            </div>
                            <div className='social'>
                                <a href='https://github.com/tarasgnatkiv' target='blank'>
                                    <img src='/img/Footer/github.svg' alt='' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='copyright'>
                        <img src='/img/Footer/logoReact.png' alt='' />
                        <p>&#0169; Copyright by Taras Hnatkiv</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;