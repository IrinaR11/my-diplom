import React from "react";

class Contactus extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value:''};
        this.handleChange = this.handleChange.bind(this);
        this.sendMail = this.sendMail.bind(this);

    }

    handleChange(event) {
        this.setState({value:event.target.value});
    }

    sendMail(event){
        let formData = new FormData();
        formData.append("text",this.state.value);
        fetch("http://irina11.beget.tech/sendMail", {
            method:"POST",
            body: formData
        });
        event.preventDefault();
    }

    render() {
        return <section className="section contact-section" id="next">
            <div className="container">
                <div className="row">
                    <div className="col-md-7" data-aos="fade-up" data-aos-delay="100">

                        <form action="#" method="post" className="bg-white p-md-5 p-4 mb-5 border" onSubmit={this.sendMail}>
                            <div className="row mb-4">
                                <div className="col-md-12 form-group">
                                    <label htmlFor="message">Write Message</label>
                                    <textarea className="form-control " cols="30"
                                              rows="8" value={this.state.value} onChange={this.handleChange}></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="submit" value="Send Message"
                                           className="btn btn-primary text-white font-weight-bold"/>
                                </div>
                            </div>
                        </form>

                    </div>
                    <div className="col-md-5" data-aos="fade-up" data-aos-delay="200">
                        <div className="row">
                            <div className="col-md-10 ml-auto contact-info">
                                <p><span className="d-block">Address:</span>
                                    <span> South Beach Road 114-115 Land, Aqaba 77110 Jordan</span>
                                </p>
                                <p><span className="d-block">Phone:</span> <span> +962 7 7784 8046</span></p>
                                <p><span className="d-block">Email:</span>
                                    <span> parkhotelsouthernstarclub@gmail.com</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
}

export default Contactus;