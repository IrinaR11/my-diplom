import React from 'react';
import {NavLink} from "react-router-dom";

const Articles =()=>{
    return <section className="section blog-post-entry bg-light" id="next">
        <div className="container">

            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 post mb-5" data-aos="fade-up" data-aos-delay="100">

                    <div className="media media-custom d-block mb-4 h-100">
                        <NavLink to="#" className="mb-4 d-block"><img src="images/img_1.jpg" alt="Image placeholder"
                                                                  className="img-fluid"/></NavLink>
                        <div className="media-body">
                            <span className="meta-post">February 26, 2018</span>
                            <h2 className="mt-0 mb-3"><a href="#">Travel Hacks to Make Your Flight More Comfortable</a>
                            </h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.</p>
                        </div>
                    </div>

                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 post mb-5" data-aos="fade-up" data-aos-delay="200">
                    <div className="media media-custom d-block mb-4 h-100">
                        <a href="#" className="mb-4 d-block"><img src="images/img_2.jpg" alt="Image placeholder"
                                                                  className="img-fluid"/></a>
                        <div className="media-body">
                            <span className="meta-post">February 26, 2018</span>
                            <h2 className="mt-0 mb-3"><a href="#">5 Job Types That Aallow You To Earn As You Travel The
                                World</a></h2>
                            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                                language ocean.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 post mb-5" data-aos="fade-up" data-aos-delay="300">
                    <div className="media media-custom d-block mb-4 h-100">
                        <a href="#" className="mb-4 d-block"><img src="images/img_3.jpg" alt="Image placeholder"
                                                                  className="img-fluid"/></a>
                        <div className="media-body">
                            <span className="meta-post">February 26, 2018</span>
                            <h2 className="mt-0 mb-3"><a href="#">30 Great Ideas On Gifts For Travelers</a></h2>
                            <p>A small river named Duden flows by their place and supplies it with the necessary
                                regelialia. t is a paradisematic country, in which roasted parts of sentences.</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 col-12 post mb-5" data-aos="fade-up" data-aos-delay="100">

                    <div className="media media-custom d-block mb-4 h-100">
                        <a href="#" className="mb-4 d-block"><img src="images/img_4.jpg" alt="Image placeholder"
                                                                  className="img-fluid"/></a>
                        <div className="media-body">
                            <span className="meta-post">February 26, 2018</span>
                            <h2 className="mt-0 mb-3"><a href="#">Travel Hacks to Make Your Flight More Comfortable</a>
                            </h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.</p>
                        </div>
                    </div>

                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 post mb-5" data-aos="fade-up" data-aos-delay="200">
                    <div className="media media-custom d-block mb-4 h-100">
                        <a href="#" className="mb-4 d-block"><img src="images/img_1.jpg" alt="Image placeholder"
                                                                  className="img-fluid"/></a>
                        <div className="media-body">
                            <span className="meta-post">February 26, 2018</span>
                            <h2 className="mt-0 mb-3"><a href="#">5 Job Types That Aallow You To Earn As You Travel The
                                World</a></h2>
                            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                                language ocean.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 post mb-5" data-aos="fade-up" data-aos-delay="300">
                    <div className="media media-custom d-block mb-4 h-100">
                        <a href="#" className="mb-4 d-block"><img src="images/img_2.jpg" alt="Image placeholder"
                                                                  className="img-fluid"/></a>
                        <div className="media-body">
                            <span className="meta-post">February 26, 2018</span>
                            <h2 className="mt-0 mb-3"><a href="#">30 Great Ideas On Gifts For Travelers</a></h2>
                            <p>A small river named Duden flows by their place and supplies it with the necessary
                                regelialia. t is a paradisematic country, in which roasted parts of sentences.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row" data-aos="fade">
                <div className="col-12">
                    <div className="custom-pagination">
                        <ul className="list-unstyled">
                            <li className="active"><span>1</span></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><span>...</span></li>
                            <li><a href="#">30</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Articles;