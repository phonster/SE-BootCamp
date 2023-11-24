import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faRobot, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

import './Nav.css';

function Nav() {
    const [modalViewState, setModalView] = useState('modalHide');
    function closeModal(){
        setModalView('modalHide');
    }
    function openModal(){
        setModalView('modalShow');
    }
    return (
        <div>
            <nav id="navBar">
                <ul>
                    <li id="loginBtn"><button onClick={openModal}>Login</button></li>
                    <li><a href="#navBar">Home</a></li>
                    <li><a href="#navBar">License</a></li>
                    <li><a href="#navBar">Register</a></li>
                    <li><a href="#navBar">EZPass</a></li>
                    <li><a href="#navBar"><FontAwesomeIcon icon={faBars} /></a></li>
                </ul>
            </nav>
            <div id="modalLogin" className={modalViewState}>
                <div className="form-container">
                    <div className="closeBtn" onClick={closeModal}>
                        <FontAwesomeIcon icon={faCircleXmark} className='green-x' />
                    </div>
                    <form className="grid-form">
                        <div className="grid-itm1 fill-space">
                            <input className="green-button" type="button" value="Sign Up" id="regform_signup" />
                        </div>
                        <div className="grid-itm2 fill-space">
                            <input className="off-button" type="button" value="Log In" />
                        </div>
                        <div className="grid-itm8 fill-space">
                            <h2>Sign up For Free</h2>
                        </div>
                        <div className="grid-itm3 fill-space">
                            <input type="text" name="" id="" placeholder="First Name*" />
                        </div>
                        <div className="grid-itm4 fill-space">
                            <input type="text" name="" id="" placeholder="Last Name*" />
                        </div>
                        <div className="grid-itm5 fill-space">
                            <input type="text" name="" id="" placeholder="Email Address*" />
                        </div>
                        <div className="grid-itm6 fill-space">
                            <input type="text" name="" id="regform_pw" placeholder="Set A Password*" />
                        </div>
                        <div className="grid-itm7 fill-space"><input className="green-button" type="button" value="Get Started" /></div>
                        <div className="grid-foot fill-space">&copy; 2023 Phonster <FontAwesomeIcon icon={faRobot} className={'logo-icon'}/>This footer contains no arms</div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Nav;