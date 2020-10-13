import React from 'react';
import {NavLink} from "react-router-dom";

const Reserve =()=>{
    return <section className="section bg-image overlay" style={{backgroundImage:"url('images/main.jpg')"}}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-md-6 text-center mb-4 mb-md-0 text-md-left" data-aos="fade-up">
                    <h2 className="text-white font-weight-bold">A Best Place To Stay. Reserve Now!</h2>
                </div>
                <div className="col-12 col-md-6 text-center text-md-right" data-aos="fade-up" data-aos-delay="200">
                    <NavLink to="/reservation" className="btn btn-outline-white-primary py-3 text-white px-5">Reserve Now</NavLink>
                </div>
            </div>
        </div>
    </section>
}

export default Reserve;