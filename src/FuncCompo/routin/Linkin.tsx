import React from 'react';
import { NavLink } from 'react-router-dom';

const Linkin = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">Dashboard</NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Linkin;