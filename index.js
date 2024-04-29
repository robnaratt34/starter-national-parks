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