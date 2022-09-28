import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='nav-container'>
            <div className="nav">
                <a href="/home">Home</a>
                <a href="/players">Player</a>
                <a href="/team">Team</a>
                <a href="/gellary">Gellary</a>
                <a href="/register">Register</a>
            </div>
        </div>
    );
};

export default Header;