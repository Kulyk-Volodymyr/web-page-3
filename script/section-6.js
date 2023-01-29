const s6_1 = document.getElementById('s-6-1');
const s6_2 = document.getElementById('s-6-2');
const s6_3 = document.getElementById('s-6-3');
const s6_4 = document.getElementById('s-6-4');
const s6_5 = document.getElementById('s-6-5');
const s6_6 = document.getElementById('s-6-6');
const s6_7 = document.getElementById('s-6-7');
const s6_8 = document.getElementById('s-6-8');
const s6_unfoldButton = document.getElementById('s6-unfold-button');
const s6_hiddenContent = document.getElementById('s6-hidden-content');

function unfoldAll() {
    s6_unfoldButton.style.visibility = 'hidden';
    s6_1.classList.toggle('s-6-1-turn');
    setTimeout(function () {s6_2.classList.toggle('s-6-2-turn')}, 500);
    setTimeout(function () {s6_3.classList.toggle('s-6-3-turn')}, 1000);
    setTimeout(function () {s6_4.classList.toggle('s-6-4-turn')}, 1500);
    setTimeout(function () {s6_5.classList.toggle('s-6-5-turn')}, 2000);
    setTimeout(function () {s6_6.classList.toggle('s-6-6-turn')}, 2500);
    setTimeout(function () {s6_7.classList.toggle('s-6-7-turn')}, 3000);
    setTimeout(function () {s6_8.classList.toggle('s-6-8-turn')}, 3500);
    setTimeout(function () {s6_hiddenContent.classList.remove('s6-hidden-content-invisible')}, 4000);
    setTimeout(function () {s6_hiddenContent.classList.add('s6-hidden-content-visible')}, 4000);
    setTimeout(function () {s6_hiddenContent.classList.add('s6-hidden-content-visible-transition')}, 4100);
}

function rollUpAll() {
    s6_hiddenContent.classList.remove('s6-hidden-content-visible-transition');
    setTimeout(function () {s6_hiddenContent.classList.remove('s6-hidden-content-visible')}, 1000);
    setTimeout(function () {s6_hiddenContent.classList.add('s6-hidden-content-invisible')}, 1000);
    setTimeout(function () {s6_8.classList.toggle('s-6-8-turn')}, 1000);
    setTimeout(function () {s6_7.classList.toggle('s-6-7-turn')}, 1500);
    setTimeout(function () {s6_6.classList.toggle('s-6-6-turn')}, 2000);
    setTimeout(function () {s6_5.classList.toggle('s-6-5-turn')}, 2500);
    setTimeout(function () {s6_4.classList.toggle('s-6-4-turn')}, 3000);
    setTimeout(function () {s6_3.classList.toggle('s-6-3-turn')}, 3500);
    setTimeout(function () {s6_2.classList.toggle('s-6-2-turn')}, 4000);
    setTimeout(function () {s6_1.classList.toggle('s-6-1-turn')}, 4500);
    setTimeout(function () {s6_unfoldButton.style.visibility = 'initial'}, 4800);
}
