import React from "react";
import Rides from "./Rides";

const cardImg1 = "img/AdobeStock_141353871.jpeg";
const cardImg2 = "img/OIP.jpg";
const cardImg3 = "img/nice-bike-path.jpg";

function ManualCard(props) {
    return (
        <div className="info-box">
            <h5>{props.title}</h5>
            <h3>{props.description}</h3>
        </div>
    );
}

function Card(props) {
    return (
        <div className="info-box">
            <h4>{props.title}</h4>
            <h6>{props.description}</h6>
            <p className="col3-content">Sign up for our exhilarating mountain biking tour to explore breathtaking trails and experience the thrill of the outdoors. Whether you're a seasoned rider or a beginner, our guided tours offer a perfect blend of adventure and scenic beauty.</p>
        </div>
    );
}

function CardPro(ride) {
    return (
        <div className="info-box" key={ride.rideID}>
            <img src={ride.imgurl} alt="Mountain biking on a mountain" />
            <h4>{ride.title}</h4>
            <h6>{ride.description}</h6>
            <button className="btn red-button" data-bs-toggle="modal" data-bs-target="#mountainModal">{ride.buttonname}</button>
            <p className="col3-content">Join a ride</p>
        </div>
    );
}

function Main() {
    return (
        <section aria-label="Cycling into sunrise - handlebar point of view" title="Cycling into sunrise - handlebar point of view">
            <div id="hero"><h2>Your Ride Awaits</h2></div>
            <div className="my-row">
                {Rides.map(CardPro)}
            </div>
            <h2 id="features" className="mt-5">Features <span className="badge text-bg-primary">Classic Rides</span></h2>
            <section className="my-row">
                {Rides.map(ride => <Card key={ride.rideID} title={ride.title} description={ride.description} imgurl={ride.imgurl} buttonname={ride.buttonname} />)}
            </section>
            <h2 id="pricing" className="mt-5">Pricing Section <span className="badge text-bg-danger">New Prices</span></h2>
            <section className="my-row">
                <ManualCard title="Mountain Biking" description="Poconos - $789" buttonname="Mountain" imgurl={cardImg1} />
                <ManualCard title="Road Biking" description="Hudson Valley - $189" buttonname="Road" imgurl={cardImg2} />
                <ManualCard title="Touring" description="Empire State - $389" buttonname="Tour" imgurl={cardImg3} />
            </section>

        </section>
    )
}

export default Main;