

function increaseCurrentPlayerScore(){
    // STEP 3
    // When you click the button, increase the variable storing the score by 'increment', then display the current score inside the label.
    let currentPlayerScore = localStorage.currentPlayerScore;
    let currentIncrement = localStorage.currentPlayerScore;

}

function purchaseMultiplier(idMultiplierButton){
    // STEP 5
    // The multiplier allows you to have a big score quickly, that shouldn't be free, it should be a purchase made with the current player score.
    // STEP 6
    // You can't make credit, meaning that the player cannot have a negative score. Think about updating the score display after a purchase.
    let currentPlayerScore = localStorage.currentPlayerScore;
    let arrayLevelsMultipliers = localStorage.arrayLevelsMultipliers.split(",");
    let arrayCostsMultipliers = localStorage.arrayCostsMultipliers.split(",");

}

function displayMultiplierCounter(idMultiplierButton, counter){
    // STEP 7
    // Display the 'counter' within the multiplier. For example, if the counter is worth 5, then the button should display something like multiplier x5.
    let arrayCountersMultipliers = localStorage.arrayCountersMultipliers.split(",");
}

function increaseCostMultiplier(idMultiplierButton){

    let arrayCostsMultipliers = localStorage.arrayCostsMultipliers.split(",");

}

function displayMultiplierCost(idMultiplierButton){
    // STEP 9
    // In the text of the multiplier button you should also have the price of the upgrade.
    let arrayCostsMultipliers = localStorage.arrayCostsMultipliers.split(",");

}

function initLocalStorage(){
    localStorage.setItem("currentPlayerScore",0);
    localStorage.setItem("currentIncrement",1);
    localStorage.setItem("arrayCountersMultipliers", [0,0,0,0,0,0,0,0,0,0]);
    localStorage.setItem("arrayLevelsMultipliers", [0,0,0,0,0,0,0,0,0,0]);
    localStorage.setItem("arrayCostsMultipliers", [0,0,0,0,0,0,0,0,0,0]);
}


document.getElementById("start").addEventListener("click", () => {
    // GLOBAL VARIABLES INITIALISATION
    if(!localStorage.currentPlayerScore>0){initLocalStorage();}

    // STEP 4
    // Adding other buttons which will act as a multipliers. 
    // When called these buttons will permanently multiply the number of points per click, by two for example.
})