import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from "./components/Menu";
import Uppic from "./components/Uppic";
import Booking from "./components/Booking";
import Welcome from "./components/Welcome";
import Rooms from "./components/Rooms";
import Photos from "./components/Photos";
import Restaurant from "./components/Restaurant";
import Reviews from "./components/Reviews";
import Events from "./components/Events";
import Reserve from "./components/Reserve";
import Footer from "./components/Footer";
import Articles from "./components/Articles";
import Offers from "./components/Offers";
import Contactus from "./components/Contactus";
import Reserveform from "./components/Reserveform";
import {BrowserRouter,Route} from "react-router-dom";
import ReviewsP from "./components/ReviewsP";
import Leadership from "./components/Leadership";

function App() {
  return (
      <div>
          <BrowserRouter>
            <Menu/>
            <Route exact path = "/" render={()=>{
                return <div>
                    <Uppic h1="A Best Place To Stay"
                           span="Welcome To Our Hotel"/>
                    <Booking/>
                    <Welcome/>
                    <Rooms/>
                    <Photos/>
                    <Restaurant/>
                    <ReviewsP/>
                    <Events/>
                    <Reserve/>
                </div>
            }}/>
            <Route path = "/room" render={()=>{
                return <div>
                    <Uppic h1="Rooms" span="HOME • ROOMS"/>
                    <Booking/>
                    <Rooms/>
                    <Offers/>
                    <Reserve/>
                </div>
            }}/>
            <Route path = "/about" render={()=>{
                return <div>
                    <Uppic h1="About Us" span="HOME • ABOUT"/>
                    <Welcome/>
                    <Leadership/>
                    <Photos/>
                    <Reserve/>
                </div>
            }}/>
              <Route path = "/restaur" render={()=>{
                  return <div>
                      <Uppic h1="Restaurant" span="HOME • RESTAURANT"/>
                      <Restaurant/>
                      <Reserve/>
                  </div>
              }}/>
            <Route path = "/event" render={()=>{
                return <div>
                    <Uppic h1="Events" span="HOME • EVENTS"/>
                    <Articles/>
                    <Reserve/>
                </div>
            }}/>

            <Route path = "/contact" render={()=>{
                return <div>
                    <Uppic h1="Contact" span="HOME • CONTACT"/>
                    <Contactus/>
                    <ReviewsP/>
                    <Reserve/>
                </div>
            }}/>

            <Route path = "/reservation" render={()=>{
                return <div>
                    <Uppic h1="Reservation Form" span="HOME • RESERVATION"/>
                    <Reserveform/>
                    <ReviewsP/>
                    <Reserve/>
                </div>
            }}/>

            <Footer/>
          </BrowserRouter>
      </div>
  );
}

export default App;
