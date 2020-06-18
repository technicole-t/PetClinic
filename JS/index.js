const apiUrl = "http://localhost:9966/petclinic/api/";


function getOwners () {
   // const searchBar = document.getElementById("search")
    fetch(apiUrl + "owners")
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
}

// id, firstName, lastName, address, city, pets [], telephone

// pets is an array of objects - id, name, birthDate,owners, visits [], type{id, name}