const express = require('express');
const pets = require("./data/pets.json");
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.json());

app.get('/allpets', (req, res) => {
    res.json(pets);
});

app.get('/allpets/random', (req, res) => {
    // let randNum = Math.random() * (pets.length - 1);
    let petLength = pets.length;
    let randNum = Math.floor(Math.random() * petLength);
    // let randNum = Math.floor(Math.random());
    console.log(`Random number is ????`);
    console.log(`Random: ${randNum} and pet Length = ${petLength}`);
    // res.send("Calling all pets method");
    res.json(pets[randNum]);
});

app.get('/allpets/:id', (req, res) => {
    let thisId = req.params.id;
    // const found = array.find(element => element > 10);
    // res.send(pets.find(pet => pet.id == thisId));
    let pet = pets.find(pet => pet.id == thisId);
    
    if(pet){
        // res.send(pets.find(pet => pet.id == thisId));
        res.json(pet);
    }
    else{
        res.send(`Pet ID ${thisId} not found`);
    }
    // if(pets.find(pet => pet.id == thisId)){

    //     res.json(pet);
    // }

});

app.post('/allpets', (req, res) => {
    const {name, type, age} = req.body;
    const petIds = pets.map(pet => pet.id);
    console.log(petIds);

    const newPet = {
        id: (petIds.length > 0?Math.max(...petIds) + 1:1),
        name: name,
        type: type,
        age: age
    };
    
    pets.push(newPet);

    const filePath = path.join(`${__dirname}/data`, 'pets.json');

    fs.writeFile(filePath, JSON.stringify(pets, null, 2), (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return res.status(500).send('Internal Server Error');
        }

        // Send a success response
        // res.send('JSON data saved successfully');
        res.json(newPet);
    });

    // res.send(filePath);

    console.log(req.body);
});

function getNextPetId(){
    const petIds = pets.map(pet => pet.id);
    let newId = petIds.length > 0?Math.max(...petIds) + 1:1;
    return(newId);
}

function isValidPet(checkPet){
    // destructure the object
    // If each element is defined, then object is valid
    const {name, type, age} = checkPet;
    if(name && type && typeof age == 'number'){
        console.log(`name: ${name}, type: ${type}, age: ${age}`);
        return true;
    }
    else{
        console.log(`name: ${name}, type: ${type}, age: ${age}`);
        return false;
    }
}

function writePetsToFile(petObj){
    const filePath = path.join(`${__dirname}/data`, 'pets.json');

    fs.writeFile(filePath, JSON.stringify(petObj, null, 2), (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return res.status(500).send('Internal Server Error');
        }
    });
    return true;

}

function addPet(singlePet){
    const {name, type, age} = singlePet;

    const newPet = {
        id: getNextPetId(),
        name: name,
        type: type,
        age: age
    };

    pets.push(newPet);
    if(writePetsToFile(pets)){
        return(`Successfully added new pet ${newPet.name}`);
    }
    else{
        return("Problem writing pets to file");
    }
}
app.post('/allpets/addone', (req, res) => {
    if(!isValidPet(req.body)){
        res.end("Invalid input");
        return;
    }
    let tryAddPet = addPet(req.body);
    res.send(tryAddPet);
});

app.post('/allpets/addmany', (req, res) => {
    const petsArray = req.body;
    // Check petsArray. If number, string, or undefined, exit
    // If isArray, loop and add each valid pet object
    // If single element, add the single pet

    let objType = typeof petsArray;

    if(objType == 'string' || objType == 'number' || objType == 'undefined'){
        res.send("Please send JSON objects");
        return false;
    }
    // Else assume object is type Object
    console.log(Array.isArray(petsArray));
    // Check if object is an array
    if(Array.isArray(petsArray)){
        // Loop through each element and check if it is a valid pet object
        petsArray.forEach((p) => {
            if(!isValidPet(p)){ 
                res.send("Please submit valid Pet objects 1");
                return false;
            }
            else{
                let tryAddPet = addPet(p);
            }
        })
    }
    else{
        console.log(petsArray);
        if(!isValidPet(petsArray)){ 
            res.send("Please submit valid Pet objects 2");
            return false;
        }
        else{
            let tryAddPet = addPet(petsArray);
        } 
    }
    res.end("done")

});
const port = 3000;
app.listen(port, () => { console.log(`Listening to port ${port}`) });