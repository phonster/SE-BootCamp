import React from "react";
import {useState} from 'react';

function Header() {
    const [birthYear, setBirthYear] = useState('');
    const [discount, setDiscount] = useState("21");
    const handleBirthYear = (event) => {
        let inputBirthYear = event.target.value;
        if(inputBirthYear > 1924 && inputBirthYear < 2024){
            setBirthYear(inputBirthYear);
            setDiscount(2024-inputBirthYear);
        }
        else{
            setBirthYear(inputBirthYear);
        }
    }
    return (
        <div id="header" className="text-center p-3 border border-warning bg-warning bg-gradient">
            <h2>Fall Tours {discount}% Off Sale</h2>
                <div className="d-flex flex-row d-inline-flex form-group row">
                Enter birth year <input type="text" value={birthYear} onChange={handleBirthYear} className="form-control" style={{"width":"100px", "height":"1.75em", "marginLeft": "5px", "marginRight":"5px"}} /> for discount
                </div>
        </div>
    );
}

export default Header;