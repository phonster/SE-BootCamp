import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './Nav.css';

function Nav() {
    return (
        <nav id="navBar">
            <ul>
                <li id="loginBtn"><a href={"#navBar"}>Login</a></li>
                <li><a href={"#navBar"}>Home</a></li>
                <li><a href={"#navBar"}>License</a></li>
                <li><a href={"#navBar"}>Register</a></li>
                <li><a href={"#navBar"}>EZPass</a></li>
                <li><a href={"#navBar"}><FontAwesomeIcon icon={faBars} /></a></li>
            </ul>
        </nav>
    );
}

export default Nav;