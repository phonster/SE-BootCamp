import React from "react";
import {useState} from 'react';

function Nav() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginName, setLoginName] = useState('');
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    
    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    }
    const handleLastName = (event) => {
        setLastName(event.target.value);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleLogin = (event) => {
        if (firstName && lastName && email && password){
            setLoginName(`Hello ${firstName} ${lastName}`);
            setIsLoginModalOpen(false);
        }
        else{
            setLoginName('');
        }
    }
    return (
        <>
            <section>
                <nav className="navbar navbar-expand-md navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand nav" href="#">
                            <svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fa5e5e" d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2l0 82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9l0-107.2c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" /></svg>
                            <span className="nav ps-3">Studio</span></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#header">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#features">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#pricing">Pricing</a>
                                </li>
                            </ul>
                            <span className={loginName != ''?'':'d-none'} style={{"paddingRight": "10px"}}>{loginName}</span>
                            <span className="navbar-text">
                                <button className="btn btn-sm btn-danger" title="Login to Studio" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
                            </span>
                        </div>
                    </div>
                </nav>
            </section>
            <section>
                <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-box">
                        <div className="modal-content modal-box">
                            <div className="modal-header">
                                <h5 className="modal-title text-white" id="loginModalLabel">Join Us</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body modal-box">
                                <div className="container modal-box">
                                    <div className="row g-0 modal-box">
                                        <div className="col-sm-6 col-12">
                                            <div className="p-0 d-grid">
                                                <button className="btn rounded-0 text-bg-success">Sign Up</button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <div className="p-0 d-grid">
                                                <button className="btn btn-secondary rounded-0">Log In</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-0 modal-box">
                                        <div className="col-12">
                                            <div className="p-1 text-white text-center">
                                                <h2>Sign Up for Free</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-1 ph-input-row modal-box">
                                        <div className="col-sm-6 col-12">
                                            <div className="p-1 input-group">
                                                <input type="text" id="first_name" name="first_name"
                                                    className="form-control rounded-0 ph-grey-placeholder ph-tr-input"
                                                    placeholder="First Name*"
                                                    onChange={handleFirstName}
                                                    value={firstName} />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <div className="p-1 input-group">
                                                <input type="text" id="last_name" name="last_name"
                                                    className="form-control rounded-0 ph-grey-placeholder ph-tr-input"
                                                    placeholder="Last Name*"
                                                    onChange={handleLastName}
                                                    value={lastName} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-md-4 mt-1 ph-input-row modal-box">
                                        <div className="col-12">
                                            <div className="p-1 input-group">
                                                <input type="text" id="email_address" name="email_address"
                                                    className="form-control rounded-0 ph-grey-placeholder ph-tr-input"
                                                    placeholder="Email Address*"
                                                    onChange={handleEmail}
                                                    value={email} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-md-4 mt-1 ph-input-row modal-box">
                                        <div className="col-12">
                                            <div className="p-1 input-group">
                                                <input type="text" id="password" name="password"
                                                    className="form-control rounded-0 ph-grey-placeholder ph-tr-input"
                                                    placeholder="Set A Password*"
                                                    onChange={handlePassword}
                                                    value={password} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-0 modal-box">
                                        <div className="col-12">
                                            <div className="p-0 mt-4 d-grid text-center">
                                                <button onClick={handleLogin} className="btn btn-lg rounded-0 text-bg-success fw-bold ph-wide-kern" data-bs-dismiss="modal">GET
                                                    STARTED</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Nav;