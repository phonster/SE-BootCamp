import React from "react";
import Animals from "./Animals";

function createPetCard(animal){
    return (
        <div>
            <h1>{animal.name}</h1>
            <img src={animal.url} width={200} alt={animal.alt} />
            <p>Pet Type: {animal.type}</p>
            <p>Age: {animal.age}</p>
            <p>ID: {animal.id}</p>
            <button>More</button>
        </div>
    );
}

function MyPet(){
    return(
        Animals.map(createPetCard)
    );
}
export default MyPet;