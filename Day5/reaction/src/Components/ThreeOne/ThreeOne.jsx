import React from "react";
import Services from "./Services";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCaravan, faClock, faPaperPlane, faBars, faRobot } from '@fortawesome/free-solid-svg-icons'
import './ThreeOne.css';

function ServiceCard(props){
    return(
      <div className={'serviceCard'}>
          <h1>{props.name}</h1>
          <p>{props.icon}</p>
          <p>{props.info}</p>
      </div>
    );
  }

function ThreeOne(){
    return (
    <section id={'serviceSection'} style={{display: 'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>
      {Services.map(srv=><ServiceCard key={srv.id} id={srv.id} name={srv.name} icon={srv.icon} info={srv.info}/>)}
    </section>
);
}

export default ThreeOne;