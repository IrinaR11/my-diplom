import React from 'react';
import {NavLink} from "react-router-dom";

const Uppic = (props)=>{
    return <div>
        <section className="site-hero overlay" style={{backgroundImage: "url(images/main.jpg)"}}
                 data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row site-hero-inner justify-content-center align-items-center">
                    <div className="col-md-10 text-center" data-aos="fade-up">
                        <h1 className="heading">{props.h1}</h1>
                        <span className="custom-caption text-uppercase text-white d-block  mb-3">
                            {props.span}
                        </span>

                    </div>
                </div>
            </div>

        </section>
    </div>
}

export default Uppic;