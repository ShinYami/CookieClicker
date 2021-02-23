let clicks = 1;
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
        //document.getElementById("owned"+i).innerHTML = currentPlayerScore;
    }
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

window.onload = function(){
    // initialiser le prix des multipliers
    let span = document.getElementsByTagName("button");
    for(let i=0; i<span.length; i++){
        //document.getElementById("cost"+i).innerHTML = 1;
    }
    
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

}

document.getElementById("start").addEventListener("click", ()=> {
    let element = document.getElementById('shop');
    element.classList.remove('visible');
})
