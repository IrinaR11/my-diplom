import React from 'react';
import {NavLink} from "react-router-dom";

const Events = () =>{
    return <section className="section blog-post-entry bg-light">
        <div className="container">
            <div className="row justify-content-center text-center mb-5">
                <div className="col-md-7">
                    <h2 className="heading" data-aos="fade-up">Events</h2>
                    <p data-aos="fade-up">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a
                        large language ocean.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 post" data-aos="fade-up" data-aos-delay="100">

                    <div className="media media-custom d-block mb-4 h-100">
                        <NavLink to="#" className="mb-4 d-block"><img src="images/img_1.jpg" alt="Image placeholder"
                                                                  className="img-fluid"/></NavLink>
                        <div className="media-body">
                            <span className="meta-post">February 26, 2018</span>
                            <h2 className="mt-0 mb-3"><NavLink to="#">Travel Hacks to Make Your Flight More Comfortable</NavLink></h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                                blind texts.</p>
                        </div>
                    </div>

                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 post" data-aos="fade-up" data-aos-delay="200">
                    <div className="media media-custom d-block mb-4 h-100">
                        <NavLink to="#" className="mb-4 d-block"><img src="images/img_2.jpg" alt="Image placeholder"
                                                                  className="img-fluid"/></NavLink>
                        <div className="media-body">
                            <span className="meta-post">February 26, 2018</span>
                            <h2 className="mt-0 mb-3"><a href="#">5 Job Types That Aallow You To Earn As You Travel The World</a></h2>
                            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 post" data-aos="fade-up" data-aos-delay="300">
                    <div className="media media-custom d-block mb-4 h-100">
                        <NavLink to="#" className="mb-4 d-block"><img src="images/img_3.jpg" alt="Image placeholder"
                                                                  className="img-fluid"/></NavLink>
                        <div className="media-body">
                            <span className="meta-post">February 26, 2018</span>
                            <h2 className="mt-0 mb-3"><NavLink to="#">30 Great Ideas On Gifts For Travelers</NavLink></h2>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. t is a
                                paradisematic country, in which roasted parts of sentences.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Events;