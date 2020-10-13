import React from 'react';

const ReviewsP = () =>{
    return <section className="section testimonial-section">
        <div className="container">
            <div className="row justify-content-center text-center mb-5">
                <div className="col-md-7">
                    <h2 className="heading" data-aos="fade-up">People Says</h2>
                </div>
            </div>
            <div className="row justify-content-center">
                <div id="carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner" >
                        <div className="carousel-item active">
                            <img src="images/review-1.jpg" alt="Image placeholder" className="mx-auto align-items-center"/>
                        </div>
                        <div className="carousel-item">
                            <img src="images/review-2.jpg" alt="Image placeholder" className="mx-auto align-items-center"/>
                        </div>
                        <div className="carousel-item">
                            <img src="images/review-3.jpg" alt="Image placeholder" className="mx-auto align-items-center"/>
                        </div>
                        <div className="carousel-item">
                            <img src="images/review-4.jpg" alt="Image placeholder" className="mx-auto align-items-center"/>
                        </div>
                        <div className="carousel-item">
                            <img src="images/review-5.jpg" alt="Image placeholder" className="mx-auto align-items-center"/>
                        </div>
                        <div className="carousel-item">
                            <img src="images/review-6.jpg" alt="Image placeholder" className="mx-auto align-items-center"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
}

export default ReviewsP;