function createVirus () {
    const virus = document.createElement('div');
    virus.classList.add("virus");

    virus.innerText = '🦠';

    virus.style.left = Math.random() * 100 + "vw";
    virus.style.animationDuration = Math.random() * 2 + 3 + "s";
 
    document.body.appendChild(virus);

    setTimeout(() => {
        virus.remove();
    }, 5000);
}

setInterval(createVirus, 500);

let i = 0
    document.getElementById('virus').addEventListener("click", () => {
        i++;
        document.getElementById('score').innerText = i;
        console.log(i);
    })