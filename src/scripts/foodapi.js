// This variable is where the content shows up in the DOM
const foodContainer = document.querySelector(".foodList");

// This fetch gets data from the database; the function iterates the data
fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            console.log(food);
            const foodAsHTML = foodFactory(food)
            addFoodToDom(foodAsHTML)
            
        } )
    })
// const addFoodToDom = (str) => {
//     document.querySelector(".foodList").innerHTML += str
// }
function addFoodToDom(foodEntry) {
    
    foodContainer.innerHTML += foodEntry;
};
// A function that turns data from database into a literal HTML string  
const foodFactory = (food) => {
    return `
        <div class="foodCard">
            <h3>${food.name}</h3>
            <div>${food.category}</div>
            <div>${food.ethnicity}</div>
        </div>
    `
} 




// function addFoodToDom(food) {
//     foodContainer.innerHTML += food
//     const foodAsHTML = foodFactory(food)
// };

// Put literal string HTML into DOM
// "someVariable".innerHTML += "someFoodComponent"




// for (let i = 0; i < food.length; i++) {
//     const foodObj = food[i];
//     foodContainer.innerHTML += createFoodComponent(
//         foodObj.name,
//         foodObj.subject,
//         foodObj.info
//     )
     
  
// }






// complete--create DOM element/container in index.html with a class of foodList---
// incomplete--make a function that returns a string template of HTML---
// incomplete--make a fuction to put the HTML representation into the DOM, innerhtml--- TEST    