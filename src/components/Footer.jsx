import React from 'react';
import {NavLink} from "react-router-dom";

const Footer = () =>{
    return <footer className="section footer-section">
        <div className="container">
            <div className="row mb-4">
                <div className="col-md-3 mb-5">
                    <ul className="list-unstyled link">
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/room">Rooms</NavLink></li>
                        <li><NavLink to="/restaur">Restaurant</NavLink></li>
                    </ul>
                </div>
                <div className="col-md-3 mb-5">
                    <ul className="list-unstyled link">
                        <li><NavLink to="/event">Events</NavLink></li>
                        <li><NavLink to="/reservation">Reservation</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
                <div className="col-md-3 mb-5 pr-md-5 contact-info">
                    <p><span className="d-block"><span className="ion-ios-location h5 mr-3 text-primary"></span>Address:</span>
                        <span> South Beach Road 114-115 Land, Aqaba 77110 Jordan</span></p>
                    <p><span className="d-block"><span className="ion-ios-telephone h5 mr-3 text-primary"></span>What's up:</span>
                        <span> +962 7 7784 8046</span></p>
                    <p><span className="d-block"><span className="ion-ios-telephone h5 mr-3 text-primary"></span>Phone:</span>
                        <span> +962 7 7784 8046</span></p>
                    <p><span className="d-block"><span className="ion-ios-email h5 mr-3 text-primary"></span>Email:</span>
                        <span> parkhotelsouthernstarclub@gmail.com</span></p>
                </div>
                <div className="col-md-3 mb-5">
                    <p>Sign up for our newsletter</p>
                    <form action="#" className="footer-newsletter">
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email..."/>
                            <button type="submit" className="btn"><span className="fa fa-paper-plane"></span></button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row pt-5">
                <p className="col-md-6 text-left">
                    Copyright &copy;
                    <script>document.write(new Date().getFullYear());</script>
                    All rights reserved | This template is made with <i className="icon-heart-o" aria-hidden="true"></i> by
                    <NavLink to="https://colorlib.com" target="_blank">Colorlib</NavLink>
                </p>

                <p className="col-md-6 text-right social">
                    <NavLink to="https://www.tripadvisor.ru/Hotel_Review-g298101-d4359770-Reviews-Southern_Star_Club-Aqaba_Al_Aqabah_Governorate.html"><span className="fa fa-tripadvisor"></span></NavLink>
                    <NavLink to="https://www.facebook.com/ParkHotelSSC/"><span className="fa fa-facebook"></span></NavLink>
                    <NavLink to="https://vk.com/southernstarclub"><span className="fa fa-vk"></span></NavLink>
                    <NavLink to="https://www.instagram.com/southern_star_club_park_hotel/" target="_blank">
                        <span className="fa fa-instagram"></span></NavLink>
                </p>
            </div>
        </div>
    </footer>
}

export default Footer;