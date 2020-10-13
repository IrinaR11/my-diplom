import React from "react";
import {NavLink} from "react-router-dom";

const Offers =()=>{
    return <section className="section bg-light">

        <div className="container">
            <div className="row justify-content-center text-center mb-5">
                <div className="col-md-7">
                    <h2 className="heading" data-aos="fade">Great Offers</h2>
                    <p data-aos="fade">Far far away, behind the word mountains, far from the countries Vokalia and
                        Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the
                        coast of the Semantics, a large language ocean.</p>
                </div>
            </div>

            <div className="site-block-half d-block d-lg-flex bg-white" data-aos="fade" data-aos-delay="100">
                <NavLink to="/" className="image d-block bg-image-2" style={{backgroundImage: "url('images/img_1.jpg')"}}></NavLink>
                <div className="text">
                    <span className="d-block mb-4"><span className="display-4 text-primary">$199</span> <span
                        className="text-uppercase letter-spacing-2">/ per night</span> </span>
                    <h2 className="mb-4">Family Room</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,
                        a large language ocean.</p>
                    <p><NavLink to="/reservation" className="btn btn-primary text-white">Book Now</NavLink></p>
                </div>
            </div>
            <div className="site-block-half d-block d-lg-flex bg-white" data-aos="fade" data-aos-delay="200">
                <NavLink to="#" className="image d-block bg-image-2 order-2"
                   style={{backgroundImage: "url('images/img_2.jpg')"}}></NavLink>
                <div className="text order-1">
                    <span className="d-block mb-4"><span className="display-4 text-primary">$299</span> <span
                        className="text-uppercase letter-spacing-2">/ per night</span> </span>
                    <h2 className="mb-4">Presidential Room</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,
                        a large language ocean.</p>
                    <p><NavLink to="/reservation" className="btn btn-primary text-white">Book Now</NavLink></p>
                </div>
            </div>

        </div>
    </section>
}

export default Offers;