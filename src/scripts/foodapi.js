// This fetch gets data from the database; the function iterates the data
// fetch("http://localhost:8088/food")
//     .then(foods => foods.json())
//     .then(parsedFoods => {
//         parsedFoods.forEach(food => {
//             console.log(food);
//             const foodAsHTML = foodFactory(food)
//             addFoodToDom(foodAsHTML)
            
//         } )
//     })
    fetch("http://localhost:8088/food")
    .then(response => response.json())
    .then(myParsedFoods => {
        myParsedFoods.forEach(food => {
            console.log(food) // Should have a `barcode` property

            // Now fetch the food from the Food API
            fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
                .then(response => response.json())
                .then(productInfo => {

                    if (productInfo.product.ingredients_text) {
                      food.ingredients = productInfo.product.ingredients_text
                    } else {
                      food.ingredients = "no ingredients listed"
                    } if (productInfo.product.origins) {
                      food.origins = productInfo.product.origins
                    } else {
                      food.origins = "no country of origin listed"
                    } if (productInfo.product.calories) {
                      food.calories = productInfo.product.calories
                    } else {
                      food.calories = "no calories listed"
                    } if (productInfo.product.fat) {
                      food.fat = productInfo.product.fat
                    } else {
                      food.fat = "no fat listed"
                    } if (productInfo.product.sugar) {
                      food.sugar = productInfo.product.sugar
                    } else {
                      food.sugar = "no sugar listed"
                    }

                    // Produce HTML representation
                    const foodAsHTML = foodFactory(food)
                    // Add representaiton to DOM
                    addFoodToDom(foodAsHTML)
                })
        })
    })
// const addFoodToDom = (str) => {
//     document.querySelector(".foodList").innerHTML += str
// }
// This variable is where the content shows up in the DOM
const foodContainer = document.querySelector(".foodList");

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
            <div>${food.ingredients}</div>
            <div>${food.origin}</div>
            <div>${food.calories}</div>
            <div>${food.fat}</div>
            <div>${food.sugar}</div>
            
        </div>
    `
}  
// complete--create DOM element/container in index.html with a class of foodList---
// complete--make a function that returns a string template of HTML---
// complete--make a fuction to put the HTML representation into the DOM, innerhtml---    