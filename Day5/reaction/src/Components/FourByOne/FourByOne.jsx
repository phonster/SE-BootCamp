import React from "react";
import Services from './Services';
import './FourByOne.css';

function ServiceCard(props) {
    return (
        <div className={'serviceCard'}>
            <h1>{props.name}</h1>
            <p>{props.icon}</p>
            <p>{props.info}</p>
        </div>
    );
}

function FourByOne(){
    return (
        <section id={'serviceSection'} style={{display: 'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>
          {Services.map(srv=><ServiceCard key={srv.id} id={srv.id} name={srv.name} icon={srv.icon} info={srv.info}/>)}
        </section>
    );
}

export default FourByOne;