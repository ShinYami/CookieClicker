document.getElementById("start").addEventListener("click", ()=> {
    let element = document.getElementById('shop');
    element.classList.remove('visible');

    let score = 0;
    let scoreNumber = document.getElementById('score');
    let bonusOnePrice = parseInt(document.getElementById('cost0').textContent);
    let owned0 = 0;
    let bonusTwoPrice = parseInt(document.getElementById('cost1').textContent);
    

    document.getElementById('virus').addEventListener('click', () => {
        score++
        scoreNumber.innerText = score;
        
    });

    
    document.getElementById('autoClicker').addEventListener('click', () => {
        
        if (score >= bonusOnePrice) {
            score = score - bonusOnePrice;
            scoreNumber.innerText = score;
        
            owned0++;
            //console.log(owned0);
            document.getElementById('owned0').innerText = owned0;

            bonusOnePrice = bonusOnePrice *2;
            //console.log(bonusOnePrice);
            document.getElementById('cost0').innerText = bonusOnePrice;



            setInterval(function(){ 
                score++
                scoreNumber.innerText = score;
                ; }, 1000);
               
        }
    });

});



