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


