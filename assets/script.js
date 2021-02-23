
 var clicks = 1;
function increaseCurrentPlayerScore(){
    // STEP 3 (Daniel)
    // When you click on the image, increase the variable storing the score by 'increment', then display the current score inside the label.
    let currentPlayerScore = localStorage.currentPlayerScore;
    let currentIncrement = localStorage.currentIncrement;

    currentPlayerScore = clicks;
    clicks += 1;
    document.getElementById("score").innerHTML = currentPlayerScore;

    //verify all spans to add the value that the player have
    var span = document.getElementsByTagName("button");
    for(var i=0; i< span.length; i++){
        document.getElementById("owned"+i).innerHTML = currentPlayerScore;
    }

}


function purchaseMultiplier(idMultiplierButton){

    let currentPlayerScore = localStorage.currentPlayerScore;
    let arrayLevelsMultipliers = localStorage.arrayLevelsMultipliers.split(",");
    let arrayCostsMultipliers = localStorage.arrayCostsMultipliers.split(",");
    // STEP 5 (Daniel)
    // The multiplier allows you to have a big score quickly, that shouldn't be free,
    // it should be a purchase made with the current player score.
    
    
    // STEP 6 (Daniel)
    // You can't make credit, meaning that the player cannot have a negative score. Think about updating the score display after a purchase.
    // STEP 12 (Daniel)
    // Make it so that, if the player doesn't have the points to purchase a multiplier, he can't.
    let arrayCountersMultipliers = localStorage.arrayCountersMultipliers.split(",");
    arrayCountersMultipliers[idMultiplierButton] = parseInt(arrayCountersMultipliers[idMultiplierButton]) + 1;
    localStorage.arrayCountersMultipliers = arrayCountersMultipliers; 
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
    let currentCost = parseInt(arrayCostsMultipliers[idMultiplierButton]);
    let currentLevel = parseInt(arrayLevelsMultipliers[idMultiplierButton]);
    let coeff = 1;
    switch(currentLevel){
        case "0": coeff = 2.10; break;
        case "1": coeff = 1.55; break;
        case "2": coeff = 1.60; break;
        case "3": coeff = 1.65; break;
        case "4": coeff = 1.70; break;
        case "5": coeff = 1.75; break;
        case "6": coeff = 1.80; break;
        case "7": coeff = 1.85; break;
        case "8": coeff = 1.90; break;
        case "9": coeff = 1.95; break;
        default: coeff = 1.55; break;
    }
    arrayCostsMultipliers[idMultiplierButton] = Math.round(currentCost * coeff);
    localStorage.arrayCostsMultipliers = arrayCostsMultipliers; 
    arrayLevelsMultipliers[idMultiplierButton] = currentLevel + 1;
    localStorage.arrayLevelsMultipliers = arrayLevelsMultipliers; 
}

function displayMultiplierCost(idMultiplierButton) {
    // STEP 9 (Patricia)
    // In the text of the multiplier button you should also have the price of the upgrade.
    let arrayCostsMultipliers = localStorage.arrayCostsMultipliers.split(",");

}

function calculateIncrement(){
    let newInc = 1;
    let tempInc = 0;
    let coeff = 1;
    let base = 1;
    let nbPurchased = 0;
    let arrayCountersMultipliers = localStorage.arrayCountersMultipliers.split(",");
    let arrayIncrementsMultipliers = localStorage.arrayIncrementsMultipliers.split(",");
    for(let i=0; i<10; i++){
        nbPurchased = arrayCountersMultipliers[i];
        coeff = 1.10 + (Math.round(nbPurchased/5)) * 0.1;
        tempInc = base * nbPurchased * coeff;
        arrayIncrementsMultipliers[i] = tempInc;
        newInc += tempInc;
        base *= 20;
    }
    localStorage.arrayIncrementsMultipliers = arrayIncrementsMultipliers;
    return newInc;
}

function updateIncrement(updateMode, newIncrement){
    if(updateMode === "auto"){
        localStorage.currentIncrement = calculateIncrement();
    }else{
        localStorage.currentIncrement = newIncrement;
    }
}

function showTimer(){
    // See function purchaseBoost()
    console.log("on passe ici...");
   let remainingTime = parseInt(localStorage.remainingTime);
   let currentIncrement = parseInt(localStorage.currentIncrement);
   let target = document.getElementById("timing");
   target.innerHTML = remainingTime + " seconds";
   let loop = setInterval(executeLoop,1000);
   function executeLoop(){
       if(remainingTime==0){
           clearInterval(loop);
           console.log("Temps écoulé!");
           target.innerHTML = "";
            //currentIncrement = currentIncrement / 2;
            updateIncrement("auto",0);
            localStorage.currentIncrement = currentIncrement;
       }else{
           remainingTime--;
           target.innerHTML = remainingTime + " seconds";
           localStorage.remainingTime = remainingTime;
       }
   }
}

function purchaseBoost() {
    // STEP 11 (Stéphane)
    // Implement yet another improvement to buy, the bonus. It should grant the player a boost in score of 200% per click for 30 seconds. 
    // When purchased the player should see a timer with the remaining time inside the bonus button. ==> FUNCTION showTimer(remainingTime)
    // STEP 12 (Stéphane)
    // Make it so that, if the player doesn't have the points to purchase a multiplier, an auto-click or an other bonus, he can't.
    let remainingTime = localStorage.remainingTime;
    let currentPlayerScore = parseInt(localStorage.currentPlayerScore);
    let currentIncrement = parseInt(localStorage.currentIncrement);
    let minScore = 15 * currentIncrement;
    let okPurchase = false;
    if(currentPlayerScore >= minScore){
        localStorage.currentPlayerScore = currentPlayerScore - minScore;
        document.getElementById("score").innerHTML = currentPlayerScore - minScore; // à remplacer par appel fonction màj score
        currentIncrement = currentIncrement * 2;
        localStorage.currentIncrement = currentIncrement;
        okPurchase = true;
    }
    return okPurchase;
}


function autoClicker(){
    // STEP 10 (Loris)
    // Implement a new improvement to buy, the auto-click. As the name might suggest this bonus will automatically add a click to your score each x seconds.
    // STEP 12 (Loris)
    // Make it so that, if the player doesn't have the points to purchase an auto-click, he can't.
    let currentIncrement = localStorage.currentIncrement;

}

function initLocalStorage(){
    localStorage.setItem("currentPlayerScore",0);
    localStorage.setItem("currentIncrement",1);
    localStorage.setItem("arrayCountersMultipliers", [0,0,0,0,0,0,0,0,0,0]);
    localStorage.setItem("arrayLevelsMultipliers", [0,0,0,0,0,0,0,0,0,0]);
    localStorage.setItem("arrayCostsMultipliers", [1,100,10000,1000000,100000000,10000000000,1000000000000,100000000000000,10000000000000000,1000000000000000000]);
    localStorage.setItem("arrayIncrementsMultipliers",[0,0,0,0,0,0,0,0,0,0]);
    localStorage.setItem("remainingTime",0);
}

window.onload = function(){
    document.getElementById("start").addEventListener("click", () => {
        // GLOBAL VARIABLES INITIALISATION        
        localStorage.clear();
        initLocalStorage();
    })
    for(let i=0; i<4; i++){
        // STEP 4 (Stéphane)
        // Adding other buttons which will act as multipliers. 
        let arrayCostsMultipliers = localStorage.arrayCostsMultipliers.split(",");
        let arrayNbPurchase = localStorage.arrayCountersMultipliers.split(",");
        document.getElementById("CMbtn"+i).innerHTML = arrayCostsMultipliers[i] + " ["+ arrayNbPurchase[i] +"]";;
        document.getElementById("btn"+i).addEventListener("click",()=>{
            purchaseMultiplier(i);
            //==========
            increaseCostMultiplier(i); // insérer dans fonction purchaseMultiplier SI currentPlayerScore suffisant!!!
            updateIncrement("auto",0); // insérer dans fonction purchaseMultiplier SI currentPlayerScore suffisant!!!            
            arrayCostsMultipliers = localStorage.arrayCostsMultipliers.split(","); // augmenter counters dans fonction purchaseMultiplier SI currentPlayerScore suffisant!!!
            arrayNbPurchase = localStorage.arrayCountersMultipliers.split(",");
            document.getElementById("CMbtn"+i).innerHTML = arrayCostsMultipliers[i] + " ["+ arrayNbPurchase[i] +"]";            
            //==========
        })    
    }    
    document.getElementById("testIncrease").addEventListener("click",()=>{
        increaseCostMultiplier(1);
    })
    document.getElementById("bonus").addEventListener("click",()=>{
        if(purchaseBoost()){
            localStorage.remainingTime = 30;
            showTimer();
        };
    })
    document.getElementById("clickVirus").addEventListener("click",()=>{
        let score = parseInt(document.getElementById("score").innerHTML);
        score += parseInt(localStorage.currentIncrement);
        //localStorage.currentIncrement = score;
        let currentPlayerScore = parseInt(localStorage.currentPlayerScore) + parseInt(localStorage.currentIncrement);
        localStorage.currentPlayerScore = currentPlayerScore;
        document.getElementById("score").innerHTML = score;
    })
}
