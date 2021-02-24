
function increaseCurrentPlayerScore(){
    // (Daniel)
    // When you click on the image, increase the variable storing the score by 'increment', then display the current score inside the label.
    let currentIncrement = parseInt(document.getElementById("increment").innerHTML);
    let currentPlayerScore = parseInt(document.getElementById("score").innerHTML);
    currentPlayerScore +=currentIncrement;
    document.getElementById("score").innerHTML = currentPlayerScore;
    
}

function autoClicker(){
    // STEP 10 (Loris)
    // Implement a new improvement to buy, the auto-click. As the name might suggest this bonus will automatically add a click to your score each x seconds.
    // STEP 12 (Loris)
    // Make it so that, if the player doesn't have the points to purchase an auto-click, he can't.
    let currentIncrement = localStorage.currentIncrement;
}

function updateIncrement(value){
}

function showTimer(){
    // function which displays boost duration & update increment when boost finished -> See also function purchaseBoost()
    // this boost lasts 30 seconds (bonus duration displayed all along)
    // when time elapsed => stop displaying chrono & increment back to initial value (+ eventual intermediate multiplier purchase)
    let remainingTime = parseInt(localStorage.remainingTime);
    let currentIncrement = parseInt(document.getElementById("increment").innerHTML);
    let initialIncrement = parseInt(localStorage.initialIncrement);
    let target = document.getElementById("timing");
    target.innerHTML = remainingTime + " seconds";
    let loop = setInterval(executeLoop,1000);
    function executeLoop(){
        if(remainingTime==0){
             // when time elapsed 
             clearInterval(loop);
             target.innerHTML = ""; // stop displaying chrono 
             let intermediateIncrements = currentIncrement - (initialIncrement * 2); // increment back to initial value (+ eventual intermediate multiplier purchase)
             let newIncrement = initialIncrement + intermediateIncrements;
             document.getElementById("increment").innerHTML = newIncrement; 
        }else{
             remainingTime--;
             target.innerHTML = remainingTime + " seconds";
             localStorage.remainingTime = remainingTime;
        }
    }
 }
 
 function purchaseBoost(){
     // function which allows or not to purchase a boost of 200% 
     // when launching this boost (purchase ok) => increment * 2
     let currentPlayerScore = parseInt(document.getElementById("score").innerHTML);
     let currentIncrement = parseInt(document.getElementById("increment").innerHTML);
     let minScore = 15 * currentIncrement; // cost for purchasing a boost
     let okPurchase = false;
     if(currentPlayerScore >= minScore){
         document.getElementById("score").innerHTML = currentPlayerScore - minScore; 
         currentIncrement = currentIncrement * 2;    // when launching this boost => increment * 2
         document.getElementById("increment").innerHTML = currentIncrement; 
         okPurchase = true;
     }
     return okPurchase;
 }
 
 document.getElementById("boost").addEventListener("click",()=>{
     let currentIncrement = parseInt(document.getElementById("increment").innerHTML);
     if(!(localStorage.remainingTime>0)){
         if(purchaseBoost()){
             localStorage.setItem("remainingTime",30);            
             localStorage.setItem("initialIncrement",currentIncrement);
             showTimer();
         }        
     }
 })
window.onload = function(){
    //initialisation 
    localStorage.remainingTime = 0;
    // initialiser le prix des multipliers
   // let span = document.getElementsByTagName("button");
    //for(let i=0; i<span.length; i++){
        //document.getElementById("cost"+i).innerHTML = 1;
    //}
    
    // clique sur virus on augmente le score de increment [ Daniel]
       
    
    // clique sur sneezing [ Loris ]
        // retirer le cout de l'autoclick si cout inférieur score
        // répéter l'autoclick à l'infini toutes les x secondes
        // incrémenter le owned
        // Si temps => pas de crédit = grisé (changer class)
    
    // clique sur Transportation/Schools/BBQ/....
        // retirer le cout de l'autoclick si cout inférieur score
        // incrémenter le owned
        // augmenter l'incrément

    // fonction pour mettre à jour l'incrément [ Patricia ]

    // fonction qui déclenche un boost de 200% [ Stéphane ]
        // doubler l'incrément
        // lancer un chrono
        // à la fin du temps, il faut diviser l'incrément par 2

//}
}
document.getElementById("start").addEventListener("click", ()=> {
    let element = document.getElementById('shop');
    element.classList.remove('visible');

})

