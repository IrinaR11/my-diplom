import React from 'react';
import {NavLink} from "react-router-dom";

const Rooms = ()=> {
    return <section className="section">
        <div className="container">
            <div className="row justify-content-center text-center mb-5">
                <div className="col-md-7">
                    <h2 className="heading" data-aos="fade-up">Rooms &amp; Suites</h2>
                    <p data-aos="fade-up" data-aos-delay="100">Comfortable bungalows, family rooms, and apartments with kitchenette,
                        terrace overlooking to the sea.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-4" data-aos="fade-up">
                    <NavLink to="/room" className="room">
                        <figure className="img-wrap">
                            <img src="images/rooms-studio-1-standart.jpg" alt="Free website template" className="img-fluid mb-3"/>
                        </figure>
                        <div className="p-3 text-center room-info">
                            <h2>Standart Studio</h2>
                            <span className="text-uppercase letter-spacing-1">80$ / per night (Sleeps 3 people)</span>
                        </div>
                    </NavLink>
                </div>

                <div className="col-md-6 col-lg-4" data-aos="fade-up">
                    <a href="#" className="room">
                        <figure className="img-wrap">
                            <img src="images/rooms-studio-2-deluxe.jpg" alt="Free website template" className="img-fluid mb-3"/>
                        </figure>
                        <div className="p-3 text-center room-info">
                            <h2>Studio Deluxe</h2>
                            <span className="text-uppercase letter-spacing-1">100$ / per night (Sleeps 4 people)</span>
                        </div>
                    </a>
                </div>

                <div className="col-md-6 col-lg-4" data-aos="fade-up">
                    <a href="#" className="room">
                        <figure className="img-wrap">
                            <img src="images/rooms-studio-3-family.jpg" alt="Free website template" className="img-fluid mb-3"/>
                        </figure>
                        <div className="p-3 text-center room-info">
                            <h2>Family Studio</h2>
                            <span className="text-uppercase letter-spacing-1">120$ / per night (Sleeps 5 people)</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>

}

export default Rooms;