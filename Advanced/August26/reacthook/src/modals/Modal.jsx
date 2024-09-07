function Modal(){
    return(
        <div className="modal fade" id="rideModal" tabIndex="-1" aria-labelledby="rideModalLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="mountainModalLabel">Register for this Ride</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body ph-tab-bkgrd">
                    <div className="info-box">
                        <img src="img/AdobeStock_141353871.jpeg" alt="Mountain biking on a mountain" />
                        <h4>ride title</h4>
                        <h6>Adirondacks - $450</h6>
                        <p className="col3-content">Sign up for our exhilarating mountain biking tour to explore breathtaking trails and experience the thrill of the outdoors. Whether you're a seasoned rider or a beginner, our guided tours offer a perfect blend of adventure and scenic beauty.</p>
                        <form className="form-inline" style={{"marginTop": "10px", "width":"75%"}}>
                            <div className="row" style={{"borderRadius": "8px"}}>
                                <div className="col text-right">
                                    <label htmlFor="pplCountMtn">Riders</label>
                                </div>
                                <div className="col">
                                    <input type="number" id="pplCountMtn" className="form-control form-control-sm" min="1" max="5" defaultValue="1" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col text-right">
                                    <label htmlFor="totalMtn">Total</label>
                                </div>
                                <div className="col">
                                    <input readOnly type="text" id="totalMtn" className="form-control form-control-sm" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="collapse" id="collapseMtn">
                        <div className="card card-body" id="confirmMtn">
                            Cart confirmation
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
    );
}

export default Modal;