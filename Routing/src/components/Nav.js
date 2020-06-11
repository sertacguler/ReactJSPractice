import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: 'white'
    };

    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark ">
                <img src="https://pngimg.com/uploads/star/star_PNG1597.png" className="ml-5" width="50px" alt=""></img>
                <div className="collapse navbar-collapse ml-5" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-5">
                        <Link style={navStyle} to='/shop'><li className="nav-item nav-link active">Home</li></Link>
                        <Link style={navStyle} to='/about'><li className="nav-item nav-link active">About</li></Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
