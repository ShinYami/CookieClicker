function increaseCurrentPlayerScore() {
    // STEP 3 (Daniel)
    // When you click the button, increase the variable storing the score by 'increment', then display the current score inside the label.
    let currentPlayerScore = localStorage.currentPlayerScore;
    let currentIncrement = localStorage.currentIncrement;

}

function purchaseMultiplier(idMultiplierButton) {
    // STEP 5 (Daniel)
    // The multiplier allows you to have a big score quickly, that shouldn't be free, it should be a purchase made with the current player score.
    // STEP 6 (Daniel)
    // You can't make credit, meaning that the player cannot have a negative score. Think about updating the score display after a purchase.
    // STEP 12 (Daniel)
    // Make it so that, if the player doesn't have the points to purchase a multiplier, he can't.
    let currentPlayerScore = localStorage.currentPlayerScore;
    let arrayLevelsMultipliers = localStorage.arrayLevelsMultipliers.split(",");
    let arrayCostsMultipliers = localStorage.arrayCostsMultipliers.split(",");

}

function displayMultiplierCounter(idMultiplierButton) {
    // STEP 7 (Patricia)
    // Display the 'counter' within the multiplier. 
    //For example, if the counter is worth 5, then the button should display something like multiplier x5.
    let arrayCountersMultipliers = localStorage.arrayCountersMultipliers.split(",");
    let numberToDisplay = arrayCountersMultipliers[idMultiplierButton];
    document.getElementById("btn0").innerHTML = numberToDisplay;
}

function increaseCostMultiplier(idMultiplierButton) {
    // STEP 8 (Stéphane)
    // Buying a lot of multiplier is way too easy. For more fun, make it so that each time a multiplier is purchased the cost of buying a new one is increased.
    let arrayLevelsMultipliers = localStorage.arrayLevelsMultipliers.split(",");
    let arrayCostsMultipliers = localStorage.arrayCostsMultipliers.split(",");

}

function displayMultiplierCost(idMultiplierButton) {
    // STEP 9 (Patricia)
    // In the text of the multiplier button you should also have the price of the upgrade.
    let arrayCostsMultipliers = localStorage.arrayCostsMultipliers.split(",");

}

function showTimer(remainingTime) {
    // See function purchaseBoost()

}

function purchaseBoost() {
    // STEP 11 (Stéphane)
    // Implement yet another improvement to buy, the bonus. It should grant the player a boost in score of 200% per click for 30 seconds. 
    // When purchased the player should see a timer with the remaining time inside the bonus button. ==> FUNCTION showTimer(remainingTime)
    // STEP 12 (Stéphane)
    // Make it so that, if the player doesn't have the points to purchase a multiplier, an auto-click or an other bonus, he can't.
    let remainingTime = localStorage.remainingTime;

}


function autoClicker(){
    // STEP 10 (Loris)
    // Implement a new improvement to buy, the auto-click. As the name might suggest this bonus will automatically add a click to your score each x seconds.
    // STEP 12 (Loris)
    // Make it so that, if the player doesn't have the points to purchase an auto-click, he can't.
} 

function initLocalStorage() {
    localStorage.setItem("currentPlayerScore", 0);
    localStorage.setItem("currentIncrement", 1);
    localStorage.setItem("arrayCountersMultipliers", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    localStorage.setItem("arrayLevelsMultipliers", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    localStorage.setItem("arrayCostsMultipliers", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    localStorage.setItem("remainingTime", 0);
}


document.getElementById("start").addEventListener("click", () => {
    // GLOBAL VARIABLES INITIALISATION
    if(!localStorage.currentPlayerScore>0){initLocalStorage();} 
    // STEP 4 (Stéphane)
    // Adding other buttons which will act as a multipliers. 
    // When called these buttons will permanently multiply the number of points per click, by two for example.
})

document.getElementById("btn0").addEventListener("click", () => {

    displayMultiplierCounter(0);

})

