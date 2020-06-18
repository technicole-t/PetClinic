const apiUrl = "http://localhost:9966/petclinic/api/";
const cardStyle = "card w-50 border border-indo m5";

function getOwners () {
   // const searchBar = document.getElementById("search")
    fetch(apiUrl + "owners")
    .then(res => res.json())
    .then(json => ownerOutput.innerText = JSON.stringify(json, undefined, 2))
    .then(json => {
        const owners = document.getElementById("ownerOutput")
        const ownersDiv = createElement("h1", "", owners, cardStyle);
        owners.addEventListener("click", function() {
            window.location = "../html/index.html";
        })
    })
    .catch(err => console.log(err))
}


   function getOwnerPets() {
     fetch(apiUrl + 'owners')
     .then(res => res.json())
     .then(json => ownerPetOutput.innerText = JSON.stringify(json, undefined, 2))
     .then(json => { 
        console.log(json.getOwnerPets);
         json.getOwnerPets.forEach(owner => {  
            const ownersWithPets = document.getElementById("OwnerPetOutput")
            const ownersWithPetsDiv = createElement("h1", "", ownersWithPets, cardStyle)
            ownersWithPets.addEventListener("click",function() {
               window.location = "../html/index.html";
         });
         createElement("h4", `owner name ${ownersWithPets.firstName}, pets ${ownersWithPets.pets}`)
     })
     .catch(err => console.log(err))
 })


// id, firstName, lastName, address, city, pets [], telephone
// pets is an array of objects - id, name, birthDate,owners, visits [], type{id, name}

function createElement(elementType, text, appendTo, className) {
    const element = document.createElement(elementType);
    element.innerText = text;
    appendTo.appendChild(element);
    element.className = className;
    return element;
   }