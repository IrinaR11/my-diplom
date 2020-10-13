import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = ()=>{
    return <div>
        <header className="site-header js-site-header">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-1 col-lg-1 site-logo" >
                        <img src="images/logotip.png" alt="Image" className="img-fluid"/>
                    </div>
                    <div className="col-4 col-lg-4 site-logo" data-aos="fade">
                        <NavLink to="/">SOUTHERN STAR CLUB</NavLink>
                    </div>
                    <div className="col-1 col-lg-1 site-logo" data-aos="fade">
                        <NavLink to="/about">About</NavLink>
                    </div>
                    <div className="col-1 col-lg-1 site-logo" data-aos="fade">
                        <NavLink to="/room">Rooms</NavLink>
                    </div>
                    <div className="col-1 col-lg-1 site-logo" data-aos="fade">
                        <NavLink to="/event">Events</NavLink>
                    </div>
                    <div className="col-2 col-lg-2 site-logo" data-aos="fade">
                        <NavLink to="/reservation">Reservation</NavLink>
                    </div>
                    <div className="col-1 col-lg-1 site-logo" data-aos="fade">
                        <NavLink to="/contact">Contact</NavLink>
                    </div>
                </div>
            </div>
        </header>
    </div>
}

export default Menu;