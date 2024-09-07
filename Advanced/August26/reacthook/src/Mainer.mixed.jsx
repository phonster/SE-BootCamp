import { useState } from 'react'
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



function Mainer() {
    const [ride, setRide] = useState(null);
    const [total, setTotal] = useState(" ");
    const [riderCount, setRiderCount] = useState(1);
    const [isCollapsed, setIsCollapsed] = useState(true);

    function toggleRide(ride) {
        let rideCost = ride?ride.cost:0;
        setTotal("$" + rideCost);
        setRiderCount(1);
        setRide(ride);
        setIsCollapsed(true);
    }
    function handleInput(event){
        let rideCost = ride?ride.cost:0;
        setRiderCount(event.target.value);
        setTotal("$" + event.target.value * rideCost);
        console.log(event.target.value, ride.rideID, ride.imgurl, event.target.value * rideCost);
        // thisRide.counter = event.target.value;
    }
    function CardPro(ride) {
        return (
            <div className="info-box" key={ride.rideID}>
                <img src={ride.imgurl} alt="Mountain biking on a mountain" />
                <h4>{ride.title}</h4>
                <h6>{ride.description}</h6>
                <button className="btn red-button" onClick={() => toggleRide(ride)} data-bs-toggle="modal" data-bs-target="#rideModal">{ride.buttonname}</button>
                <p className="col3-content">Join a ride</p>
            </div>
        );
    }
    
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
            <section id="rideModalWindow">
                <div className="modal fade" id="rideModal" tabIndex="-1" aria-labelledby="rideModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="mountainModalLabel">Register for this Ride</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body ph-tab-bkgrd">
                                <div className="info-box">
                                    <img src={ride?.imgurl} alt="Add alt text to rides array" />
                                    <h4>{ride?.title}</h4>
                                    <h6>{ride?.description}</h6>
                                    <p className="col3-content">{ride?.content}</p>
                                    <form className="form-inline" style={{ "marginTop": "10px", "width": "75%" }}>
                                        <div className="row" style={{ "borderRadius": "8px" }}>
                                            <div className="col text-right">
                                                <label htmlFor="pplCountMtn">Riders</label>
                                            </div>
                                            <div className="col">
                                                <input onChange={(event) => handleInput(event)} type="number" id="pplCountMtn" className="form-control form-control-sm" min="1" max="5" value={riderCount}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col text-right">
                                                <label htmlFor="totalMtn">Total</label>
                                            </div>
                                            <div className="col">
                                                <input readOnly type="text" id="totalMtn" className="form-control form-control-sm" value={total}/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="collapse" id="collapseMtn">
                                    <div className="card card-body" id="confirmMtn">
                                        Cart confirmation<p />
                                        Adding {riderCount} riders to {ride?.title} for a total of {total}
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-bs-toggle="collapse" href="#collapseMtn">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Mainer;