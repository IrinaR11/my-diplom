import React from 'react';
import Rooms from "./Rooms";
import {NavLink} from "react-router-dom";

const Photos = () =>{
        return <section className="section slider-section bg-light">
            <div className="container">
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-md-7">
                        <h2 className="heading" data-aos="fade-up">Photos</h2>
                    </div>
                </div>
                <div className="row justify-content-center text-center mb-5" >
                    <div className="col-md-12">
                        <div id="carousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="images/photo-1.jpg" height= "500px" alt="Image placeholder" className="mx-auto align-items-center"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="images/photo-2.jpg" height= "500px" alt="Image placeholder" className="mx-auto align-items-center"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="images/photo-3.jpg" height= "500px" alt="Image placeholder" className="mx-auto align-items-center"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="images/photo-4.jpg" height= "500px" alt="Image placeholder" className="mx-auto align-items-center"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="images/photo-5.jpg" height= "500px" alt="Image placeholder" className="mx-auto align-items-center"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="images/photo-6.jpg" height= "500px" alt="Image placeholder" className="mx-auto align-items-center"/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>

}

export default Photos;

