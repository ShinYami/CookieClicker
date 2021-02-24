function increaseCurrentPlayerScore(){
    // (Daniel)
    // When you click on the image, increase the variable storing the score by 'increment', then display the current score inside the label.
    let currentIncrement = parseInt(document.getElementById("increment").innerHTML);
    let currentPlayerScore = parseInt(document.getElementById("score").innerHTML);
    currentPlayerScore +=currentIncrement;
    document.getElementById("score").innerHTML = currentPlayerScore;
    
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
    localStorage.remainingTime = 0;
}

document.getElementById("start").addEventListener("click", ()=> {
    let element = document.getElementById('shop');
    element.classList.remove('visible');

    let resetVisible = document.getElementById('reset');
    resetVisible.classList.remove('visible');


    document.getElementById('virus').addEventListener('click', () => { 
        increaseCurrentPlayerScore();
    })
})


document.getElementById('autoClicker').addEventListener('click', () => {

        let score = parseInt(document.getElementById('score').innerHTML);
        let increment = parseInt(document.getElementById('increment').innerHTML);
        let target = document.getElementById('score');
        let cost = parseInt(document.getElementById('cost0').innerHTML);
        let owned = parseInt(document.getElementById('owned0').innerHTML);

        if (score >= cost) {
            score -= cost;
            target.innerHTML = score;
            document.getElementById('owned0').innerHTML = owned + 1;

            cost = cost *2;
            let bonusIncrement = Math.floor(cost*0.03);
            document.getElementById('cost0').innerHTML = cost;
            document.getElementById('increment').innerHTML = increment + bonusIncrement;

            //console.log(cost);
            console.log(bonusIncrement);
            
            setInterval(function(){ 
                score = parseInt(document.getElementById('score').innerHTML);
                increment = parseInt(document.getElementById('increment').innerHTML);
                score = score + increment;
                target.innerHTML = score;
                ; }, 1000);
        }
});

document.getElementById('reset').addEventListener('click', ()=> {
    document.location.reload();
})

document.getElementById('multiplier').addEventListener('click', () => {
    
        let score = parseInt(document.getElementById('score').innerHTML);
        let increment = parseInt(document.getElementById('increment').innerHTML);
        let target = document.getElementById('score');
        let cost = parseInt(document.getElementById('cost1').innerHTML);
        let owned = parseInt(document.getElementById('owned1').innerHTML);

        if (score >= cost) {
            score -= cost;
            target.innerHTML = score;
            document.getElementById('owned1').innerHTML = owned + 1;

            cost = cost *2;
            let bonusIncrement = Math.floor(cost*0.05);
            document.getElementById('cost1').innerHTML = cost;
            document.getElementById('increment').innerHTML = increment + bonusIncrement;

            console.log(cost);
            console.log(bonusIncrement);
            
        }
})

document.getElementById('End').addEventListener('click', () => {
    
    let source = document.getElementById('End'); 
    let score = parseInt(document.getElementById('score').innerHTML);
    let cost = parseInt(document.getElementById('cost4').innerHTML);
    if (score >= cost) {
        source.setAttribute("href", "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    } 
})
