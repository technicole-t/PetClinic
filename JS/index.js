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


function createElement(elementType, text, appendTo, className) {
    const element = document.createElement(elementType);
    element.innerText = text;
    appendTo.appendChild(element);
    element.className = className;
    return element;
   }
// id, firstName, lastName, address, city, pets [], telephone
// pets is an array of objects - id, name, birthDate,owners, visits [], type{id, name}