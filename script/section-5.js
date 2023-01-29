const s5card1 = document.getElementById('s5-card-1');
const s5card2 = document.getElementById('s5-card-2');
s5card1.addEventListener('click', moveCard1);
s5card2.addEventListener('click', moveCard1);
let indicator1 = 0;
function moveCard1() {
    if (indicator1 === 0) {
        s5card1.classList.add('s5-card-1-move-down');
        s5card2.classList.add('s5-card-2-move-top');
        indicator1 = 1;
        function changeZindex() {
            s5card1.style.zIndex = 2;
            s5card2.style.zIndex = 3;
        }
        setTimeout(changeZindex, 1000)
        function removeMoveClass() {
            s5card1.classList.remove('s5-card-1-move-down');
            s5card2.classList.remove('s5-card-2-move-top');
        }
        setTimeout(removeMoveClass, 2000)
    } else {
        s5card1.classList.add('s5-card-1-move-top');
        s5card2.classList.add('s5-card-2-move-down');
        indicator1 = 0;
        function changeZindex() {
            s5card1.style.zIndex = 3;
            s5card2.style.zIndex = 2;
        }
        setTimeout(changeZindex, 1000)
        function removeMoveClass() {
            s5card1.classList.remove('s5-card-1-move-top');
            s5card2.classList.remove('s5-card-2-move-down');
        }
        setTimeout(removeMoveClass, 2000)
    }
}

const s5card3 = document.getElementById('s5-card-3');
const s5card4 = document.getElementById('s5-card-4');
s5card3.addEventListener('click', moveCard2);
s5card4.addEventListener('click', moveCard2);
let indicator2 = 0;
function moveCard2() {
    if (indicator2 === 0) {
        s5card3.classList.add('s5-card-3-move-down');
        s5card4.classList.add('s5-card-4-move-top');
        indicator2 = 1;
        function changeZindex() {
            s5card3.style.zIndex = 2;
            s5card4.style.zIndex = 3;
        }
        setTimeout(changeZindex, 1000)
        function removeMoveClass() {
            s5card3.classList.remove('s5-card-3-move-down');
            s5card4.classList.remove('s5-card-4-move-top');
        }
        setTimeout(removeMoveClass, 2000)
    } else {
        s5card3.classList.add('s5-card-3-move-top');
        s5card4.classList.add('s5-card-4-move-down');
        indicator2 = 0;
        function changeZindex() {
            s5card3.style.zIndex = 3;
            s5card4.style.zIndex = 2;
        }
        setTimeout(changeZindex, 1000)
        function removeMoveClass() {
            s5card3.classList.remove('s5-card-3-move-top');
            s5card4.classList.remove('s5-card-4-move-down');
        }
        setTimeout(removeMoveClass, 2000)
    }
}