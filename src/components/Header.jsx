import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <nav>
                {

                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container">

                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/about">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/services">Services</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>



                }
            </nav>
        </header>
    );
};

export default Header;
