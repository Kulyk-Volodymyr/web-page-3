const card1 = document.getElementById('s1-card-1-1');
card1.addEventListener('click', flipCard1);
function flipCard1() {
    card1.classList.toggle('flipCard1');
}

const card2 = document.getElementById('s1-card-2-1');
card2.addEventListener('click', flipCard2);
function flipCard2() {
    card2.classList.toggle('flipCard2');
}

const card3 = document.getElementById('s1-card-3-1');
card3.addEventListener('click', flipCard3);
function flipCard3() {
    card3.classList.toggle('flipCard3');
}

const card4 = document.getElementById('s1-card-4-1');
card4.addEventListener('click', flipCard4);
function flipCard4() {
    card4.classList.toggle('flipCard4');
}
