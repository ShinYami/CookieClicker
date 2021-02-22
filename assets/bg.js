function createVirus () {
    const virus = document.createElement('div');
    virus.classList.add("virus");

    virus.innerText = '🦠';

    virus.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(virus);
}

setInterval(createVirus, 500);