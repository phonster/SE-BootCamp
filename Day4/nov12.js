class PetOwner {
    constructor(name, pet, type, age){
        this.name = name;
        this.pet = pet;
        this.type = type;
        this.age = age;
    }
    get capName(){
        return(this.name.toUpperCase());
    }
    showSummary(){
        return(`Owner ${this.capName} has a ${this.type} named ${this.pet} who is ${this.age} year(s) old`);
    }
}

var owners = new Array();
owners.push(new PetOwner('peter1', 'rex1', 'dog', 2));
owners.push(new PetOwner('peter2', 'rex2', 'cat', 3));
owners.push(new PetOwner('peter3', 'rex3', 'dog', 4));

var d_output = document.getElementById("output");
for(var i=0; i< owners.length; i++){
    console.log(owners[i].pet);
    var chld = document.createElement("p");
    //chld.textContent = `Owner ${owners[i].capName} has a ${owners[i].type} named ${owners[i].pet} who is ${owners[i].age} year(s) old`;
    chld.textContent = owners[i].showSummary();
    d_output.appendChild(chld);
}

console.log(2);
console.log('2');

function checkAge(age){
    if(age >= 16){
        return (`You are ${age} years old! You can apply.`);
    }
    else{
        return(`Unfortunately ${age} is too young.`);
    }
}
// alert(checkAge(15));

document.querySelector("#mainheading").addEventListener('click', function(){
    this.textContent = "Better Heading";
    this.className = "niceHeading";
});
