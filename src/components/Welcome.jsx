import React from 'react';
import Booking from "./Booking";
import {NavLink} from "react-router-dom";

const Welcome = ()=> {
    return <section className="py-5 bg-light">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-12 col-lg-7 ml-auto order-lg-2 position-relative mb-5" data-aos="fade-up">
                    <figure className="img-absolute">
                        <img src="images/food-1.jpg" alt="Image" className="img-fluid"/>
                    </figure>
                    <img src="images/welcome.jpg" alt="Image" className="img-fluid rounded"/>
                </div>
                <div className="col-md-12 col-lg-4 order-lg-1" data-aos="fade-up">
                    <h2 className="heading">Welcome!</h2>
                    <p className="mb-4">First russian hotel in Jordan at the South Beach of Aqaba
                        surrounded by lush landscaped gardens and really beautiful views on the Aqaba Gulf Red Sea and
                        mountains of the Sinai. Only 500 meters from the beach and coral reef with greatest divesites.
                        Comfortable bungalows, family rooms, and apartments with kitchenette,
                        terrace overlooking to the sea, BBQ area, deep pools.
                        Own diving center organize amazing diving, boat trips and courses different levels PADI, SSI,
                        CMAS. Snorkel equipment available anytime. Restaurant offers delicious oriental local, Russian
                        and Italian cuisine. Membership club's card offers.</p>
                    <p><NavLink to="/about" className="btn btn-primary text-white py-2 mr-3">Learn More</NavLink> <span
                        className="mr-3 font-family-serif"><em>or</em></span>
                        <NavLink to="https://vimeo.com/channels/staffpicks/93951774" data-fancybox
                        className="text-uppercase letter-spacing-1">See video</NavLink></p>
                </div>

            </div>
        </div>
    </section>
}

export default Welcome;

