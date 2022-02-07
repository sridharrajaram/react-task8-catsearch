import React from 'react';
import {
    Link
} from "react-router-dom";
import "./App.css"


function Navbar() {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <Link to="/" className="navbar-brand">CATAAS REACT</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/explorer" className="nav-link">Explore <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/postcat" className="nav-link">Post a cat <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/integration" className="nav-link">Integration <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/about" className="nav-link">About <span className="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item d-lg-flex d-none">
                            <a className="nav-link" href="https://twitter.com/apicataas" target="_blank">
                                <i className="fab fa-twitter"></i>
                            </a>

                            <a className="nav-link" href="https://www.buymeacoffee.com/kevinbalicot" target="_blank">
                                Buy me a <i className="fa fa-beer"></i>
                            </a>
                        </li>
                    </ul>

                    
                </div>
            </nav>
        </div>
    )
}
export default Navbar
