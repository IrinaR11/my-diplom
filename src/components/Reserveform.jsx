import React from 'react';

const Reserveform = () =>{
    return <section className="section contact-section" id="next">
        <div className="container">
            <div className="row">
                <div className="col-md-7" data-aos="fade-up" data-aos-delay="100">

                    <form action="#" method="post" className="bg-white p-md-5 p-4 mb-5 border">
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label className="text-black font-weight-bold" htmlFor="name">Name</label>
                                <input type="text" id="name" className="form-control "/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label className="text-black font-weight-bold" htmlFor="phone">Phone</label>
                                <input type="text" id="phone" className="form-control "/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 form-group">
                                <label className="text-black font-weight-bold" htmlFor="email">Email</label>
                                <input type="email" id="email" className="form-control "/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label className="text-black font-weight-bold" htmlFor="checkin_date">Date Check
                                    In</label>
                                <input type="text" id="checkin_date" className="form-control"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label className="text-black font-weight-bold" htmlFor="checkout_date">Date Check
                                    Out</label>
                                <input type="text" id="checkout_date" className="form-control"/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label htmlFor="adults" className="font-weight-bold text-black">Adults</label>
                                <div className="field-icon-wrap">
                                    <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                    <select name="" id="adults" className="form-control">
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                        <option value="">4+</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="children" className="font-weight-bold text-black">Children</label>
                                <div className="field-icon-wrap">
                                    <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                    <select name="" id="children" className="form-control">
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                        <option value="">4+</option>
                                    </select>
                                </div>
                            </div>
                        </div>


                        <div className="row mb-4">
                            <div className="col-md-12 form-group">
                                <label className="text-black font-weight-bold" htmlFor="message">Notes</label>
                                <textarea name="message" id="message" className="form-control " cols="30"
                                          rows="8"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <input type="submit" value="Reserve Now"
                                       className="btn btn-primary text-white py-3 px-5 font-weight-bold"/>
                            </div>
                        </div>
                    </form>

                </div>
                <div className="col-md-5" data-aos="fade-up" data-aos-delay="200">
                    <div className="row">
                        <div className="col-md-10 ml-auto contact-info">
                            <p><span className="d-block">Address:</span>
                                <span className="text-black"> South Beach Road 114-115 Land, Aqaba 77110 Jordan</span>
                            </p>
                            <p><span className="d-block">Phone:</span> <span
                                className="text-black"> +962 7 7784 8046</span></p>
                            <p><span className="d-block">Email:</span> <span
                                className="text-black"> parkhotelsouthernstarclub@gmail.com</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Reserveform;