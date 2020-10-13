import React from "react";

const Leadership =()=>{
    return <div className="container section">

        <div className="row justify-content-center text-center mb-5">
            <div className="col-md-7 mb-5">
                <h2 className="heading" data-aos="fade-up">Leadership</h2>
            </div>
        </div>

        <div className="row">
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="block-2">
                    <div className="flipper">
                        <div className="front" style={{backgroundImage: "url(images/person_3.jpg)"}}>
                            <div className="box">
                                <h2>Will Peters</h2>
                                <p>President</p>
                            </div>
                        </div>
                        <div className="back">
                            <blockquote>
                                <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an
                                    almost unorthographic life One day however a small line of blind text by the name of
                                    Lorem Ipsum decided to leave for the far World of Grammar.&rdquo;</p>
                            </blockquote>
                            <div className="author d-flex">
                                <div className="image mr-3 align-self-center">
                                    <img src="images/person_3.jpg" alt=""/>
                                </div>
                                <div className="name align-self-center">Will Peters <span
                                    className="position">President</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div className="block-2">
                    <div className="flipper">
                        <div className="front" style={{backgroundImage: "url(images/person_1.jpg)"}}>
                            <div className="box">
                                <h2>Jane Williams</h2>
                                <p>Business Manager</p>
                            </div>
                        </div>
                        <div className="back">
                            <blockquote>
                                <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an
                                    almost unorthographic life One day however a small line of blind text by the name of
                                    Lorem Ipsum decided to leave for the far World of Grammar.&rdquo;</p>
                            </blockquote>
                            <div className="author d-flex">
                                <div className="image mr-3 align-self-center">
                                    <img src="images/person_1.jpg" alt=""/>
                                </div>
                                <div className="name align-self-center">Jane Williams <span className="position">Business Manager</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
                <div className="block-2">
                    <div className="flipper">
                        <div className="front" style={{backgroundImage: "url(images/person_2.jpg)"}}>
                            <div className="box">
                                <h2>Jeffrey Neddery</h2>
                                <p>Marketing Director</p>
                            </div>
                        </div>
                        <div className="back">
                            <blockquote>
                                <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an
                                    almost unorthographic life One day however a small line of blind text by the name of
                                    Lorem Ipsum decided to leave for the far World of Grammar.&rdquo;</p>
                            </blockquote>
                            <div className="author d-flex">
                                <div className="image mr-3 align-self-center">
                                    <img src="images/person_2.jpg" alt=""/>
                                </div>
                                <div className="name align-self-center">Jeffrey Neddery <span className="position">Marketing Director</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default Leadership;
