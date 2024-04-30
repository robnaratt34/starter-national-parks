//Can change text of site with either innerText or innerHTML
const descriptions = document.querySelectorAll(".description-display");
for (let desc of descriptions.values()){
    let content = desc.innerText;
    if(content.length>250){
        content = content.slice(0,250)
        content = content + '<a href="#">...</a>';
    }
    desc.innerHTML = content
}

/*Changes the style using the style property or
Adds and then removes a style use the classList property*/
const ratings = document.querySelectorAll(".rating-display .value");
for (let rating of ratings){
    let ratingValue = parseFloat(rating.innerText);
    if (ratingValue>4.7){
        //rating.style.fontWeight = "bold";
        rating.classList.add("high-rating");
        rating.classList.remove("value");
    }
}

//Creating a new DOM element
const parks = document.querySelectorAll(".park-display");
const header = document.querySelector("header");
const numParks = parks.length;
const newElement = document.createElement("div");
newElement.innerText = `${numParks} exciting parks to visit!`;
newElement.classList.add("header-statement");
header.appendChild(newElement);

//Adding event listeners
const allBtns = document.querySelectorAll(".rate-button")
allBtns.forEach((btn)=>{
    btn.addEventListener("click", (event)=>{
        const park = event.target.parentNode;
        park.style.backgroundColor= "#c8e6c9";
    })
})

//Sorting the parks
/*Long event Handler
const nameSorter = document.querySelector("#name-sorter")
nameSorter.addEventListener("click", (event)=>{
    event.preventDefault();
    const main = document.querySelector("main");
    const parks = main.querySelectorAll(".park-display");
    main.innerHTML="";
    const parksArray = Array.from(parks);
    parksArray.sort((parkA, parkB)=>{
        const parkAName = parkA.querySelector("h2").innerText;
        const parkBName = parkB.querySelector("h2").innerText;
        parkAName<parkBName? -1:1
    });
    parksArray.forEach((park)=>{
        main.appendChild(park);
    })
})
*/
//Shorter Event Handler by breaking into functions
const sortByName = (parkA,parkB) =>{
    const parkAName = parkA.querySelector("h2").innerText;
        const parkBName = parkB.querySelector("h2").innerText;
        parkAName<parkBName? -1:1
}

const nameSorterClickHandler = (event)=>{
    event.preventDefault();
    const main = document.querySelector("main");
    const parks = main.querySelectorAll(".park-display");
    main.innerHTML="";
    const parksArray = Array.from(parks);
    parksArray.sort(sortByName);
    parksArray.forEach((park)=>{
        main.appendChild(park);
    })
}
//Put event handler functions into DOMContentLoaded
const main=()=>{
    const nameSorter = document.querySelector("#name-sorter");
    nameSorter.addEventListener("click", nameSorterClickHandler);
}

//add event listener for DOMContentLoaded
window.addEventListener("DOMContentLoaded", main);