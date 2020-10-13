import React from 'react';

const Restaurant = () =>{
    return <section className="section bg-image overlay" style={{backgroundImage: "url('images/menu-3.jpg')"}}>
        <div className="container">
            <div className="row justify-content-center text-center mb-5">
                <div className="col-md-7">
                    <h2 className="heading text-white" data-aos="fade">Our Restaurant Menu</h2>
                    <p className="text-white" data-aos="fade" data-aos-delay="100">Restaurant Southern Star Club is
                        an international cuisine, which has absorbed the most exquisite dishes from Arabic, Russian
                        and European cuisines. Pleasant, cozy and quiet atmosphere away from the city noise.
                        Here you can enjoy Breakfast with views of the rising sun of the East, lunch in a shady cool
                        with sea views or dinner to admire the beautiful sunset of Aqaba Golf.
                        The freshest ingredients are used. Reservation of seats and meals is required.</p>
                </div>
            </div>
            <div className="food-menu-tabs" data-aos="fade">
                <ul className="nav nav-tabs mb-5" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active letter-spacing-2" id="mains-tab" data-toggle="tab" href="#mains" role="tab"
                           aria-controls="mains" aria-selected="true">Mains</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link letter-spacing-2" id="desserts-tab" data-toggle="tab" href="#desserts" role="tab"
                           aria-controls="desserts" aria-selected="false">Desserts</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link letter-spacing-2" id="drinks-tab" data-toggle="tab" href="#drinks" role="tab"
                           aria-controls="drinks" aria-selected="false">Drinks</a>
                    </li>
                </ul>
                <div className="tab-content py-5" id="myTabContent">


                    <div className="tab-pane fade show active text-left" id="mains" role="tabpanel" aria-labelledby="mains-tab">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="food-menu mb-5">
                                    <span className="d-block text-primary h4 mb-3">$20.00</span>
                                    <h3 className="text-white"><a href="#" className="text-white">Murgh Tikka Masala</a></h3>
                                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                                <div className="food-menu mb-5">
                                    <span className="d-block text-primary h4 mb-3">$35.00</span>
                                    <h3 className="text-white"><a href="#" className="text-white">Fish Moilee</a></h3>
                                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                                <div className="food-menu mb-5">
                                    <span className="d-block text-primary h4 mb-3">$15.00</span>
                                    <h3 className="text-white"><a href="#" className="text-white">Safed Gosht</a></h3>
                                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="food-menu mb-5">
                                    <span className="d-block text-primary h4 mb-3">$10.00</span>
                                    <h3 className="text-white"><a href="#" className="text-white">French Toast Combo</a></h3>
                                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                                <div className="food-menu mb-5">
                                    <span className="d-block text-primary h4 mb-3">$8.35</span>
                                    <h3 className="text-white"><a href="#" className="text-white">Vegie Omelet</a></h3>
                                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                                <div className="food-menu mb-5">
                                    <span className="d-block text-primary h4 mb-3">$22.00</span>
                                    <h3 className="text-white"><a href="#" className="text-white">Chorizo &amp; Egg Omelet</a></h3>
                                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="tab-pane fade text-left" id="desserts" role="tabpanel" aria-labelledby="desserts-tab">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="food-menu mb-5">
                                    <span className="d-block text-primary h4 mb-3">$11.00</span>
                                    <h3 className="text-white"><a href="#" className="text-white">Banana Split</a></h3>
                                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                                <div className="food-menu mb-5">
                                    <span className="d-block text-primary h4 mb-3">$72.00</span>
                                    <h3 className="text-white"><a href="#" className="text-white">Sticky Toffee Pudding</a></h3>
                                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                                <div className="food-menu mb-5">
                                    <span className="d-block text-primary h4 mb-3">$26.00</span>
                                    <h3 className="text-white"><a href="#" className="text-white">Pecan</a></h3>
                                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="food-menu mb-5">
                                    <span className="d-block text-primary h4 mb-3">$42.00</span>
                                    <h3 className="text-white"><a href="#" className="text-white">Apple Strudel</a></h3>
                                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                                <div className="food-menu mb-5">
                                    <span className="d-block text-primary h4 mb-3">$7.35</span>
                                    <h3 className="text-white"><a href="#" className="text-white">Pancakes</a></h3>
                                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                                <div className="food-menu mb-5">
                                    <span className="d-block text-primary h4 mb-3">$22.00</span>
                                    <h3 className="text-white"><a href="#" className="text-white">Ice Cream Sundae</a></h3>
                                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade text-left" id="drinks" role="tabpanel" aria-labelledby="drinks-tab">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="food-menu mb-5">
                                    <span className="d-block text-primary h4 mb-3">$32.00</span>
                                    <h3 className="text-white"><a href="#" className="text-white">Spring Water</a></h3>
                                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                                <div className="food-menu mb-5">
                                    <span className="d-block text-primary h4 mb-3">$14.00</span>
                                    <h3 className="text-white"><a href="#" className="text-white">Coke, Diet Coke, Coke Zero</a></h3>
                                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                                <div className="food-menu mb-5">
                                    <span className="d-block text-primary h4 mb-3">$93.00</span>
                                    <h3 className="text-white"><a href="#" className="text-white">Orange Fanta</a></h3>
                                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="food-menu mb-5">
                                    <span className="d-block text-primary h4 mb-3">$18.00</span>
                                    <h3 className="text-white"><a href="#" className="text-white">Lemonade, Lemon Squash</a></h3>
                                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                                <div className="food-menu mb-5">
                                    <span className="d-block text-primary h4 mb-3">$38.35</span>
                                    <h3 className="text-white"><a href="#" className="text-white">Sparkling Mineral Water</a></h3>
                                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                                <div className="food-menu mb-5">
                                    <span className="d-block text-primary h4 mb-3">$69.00</span>
                                    <h3 className="text-white"><a href="#" className="text-white">Lemon, Lime &amp; Bitters</a></h3>
                                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Restaurant;