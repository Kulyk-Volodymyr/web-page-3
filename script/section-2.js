const asideDistance = parseInt(getComputedStyle(document.body).getPropertyValue('--s2-aside-distance'));
const outlineColor = getComputedStyle(document.body).getPropertyValue('--s2-color1');
let aside1hidden = true;
let aside2hidden = true;
let aside3hidden = true;
let aside4hidden = true;

const s2step1 = document.getElementById('s2-step1');
const s2line1 = document.getElementById('s2-lineToAside1');
const s2aside1 = document.getElementById('s2-aside1');
s2step1.addEventListener('click', moveAside1);

function moveAside1() {
    if (aside2hidden === false || aside3hidden === false || aside4hidden === false) {
        if (aside2hidden === false) aside2isMoving();
        if (aside3hidden === false) aside3isMoving();
        if (aside4hidden === false) aside4isMoving();
        setTimeout(aside1isMoving, 400)
    } else {
        aside1isMoving();
    }
}

function aside1isMoving() {
    let asideLineDistance = parseInt(getComputedStyle(document.body).getPropertyValue('--s2-aside-line-distance'));
    if (aside1hidden === true) {
        s2line1.classList.add('lineTakesAside');
        s2aside1.classList.add('aside1or3Appears');
        function clearSettings() {
            s2step1.style.outline = `4px solid ${outlineColor}`;
            s2line1.style.width = '60px';
            s2aside1.style.right = `${asideLineDistance}px`;
            s2line1.classList.remove('lineTakesAside');
            s2aside1.classList.remove('aside1or3Appears');
            aside1hidden = false;
        }
        setTimeout(clearSettings, 1600)
    } else {
        s2line1.classList.add('lineReturnsAside');
        s2aside1.classList.add('aside1or3Disappears');
        function clearSettings() {
            s2step1.style.outline = 'none';
            s2aside1.style.right = `${asideDistance + asideLineDistance}px`;
            s2line1.classList.remove('lineReturnsAside');
            s2aside1.classList.remove('aside1or3Disappears');
            aside1hidden = true;
        }
        function clearSettings1() {
            s2line1.style.width = '0px';
            s2aside1.style.right = `${asideDistance + asideLineDistance}px`;
        }
        setTimeout(clearSettings, 1600)
        setTimeout(clearSettings1, 800)
    }
}

const s2step2 = document.getElementById('s2-step2');
const s2line2 = document.getElementById('s2-lineToAside2');
const s2aside2 = document.getElementById('s2-aside2');
s2step2.addEventListener('click', moveAside2);

function moveAside2() {
    if (aside1hidden === false || aside3hidden === false || aside4hidden === false) {
        if (aside1hidden === false) aside1isMoving();
        if (aside3hidden === false) aside3isMoving();
        if (aside4hidden === false) aside4isMoving();
        setTimeout(aside2isMoving, 400)
    } else {
        aside2isMoving();
    }
}

function aside2isMoving() {
    let asideLineDistance = parseInt(getComputedStyle(document.body).getPropertyValue('--s2-aside-line-distance'));
    if (aside2hidden === true) {
        s2line2.classList.add('lineTakesAside');
        s2aside2.classList.add('aside2or4Appears');
        function clearSettings() {
            s2step2.style.outline = `4px solid ${outlineColor}`;
            s2line2.style.width = '60px';
            s2aside2.style.left = `${asideLineDistance}px`;
            s2line2.classList.remove('lineTakesAside');
            s2aside2.classList.remove('aside2or4Appears');
            aside2hidden = false;
        }
        setTimeout(clearSettings, 1600)
    } else {
        s2line2.classList.add('lineReturnsAside');
        s2aside2.classList.add('aside2or4Disappears');
        function clearSettings() {
            s2step2.style.outline = 'none';
            s2aside2.style.left = `${asideDistance + asideLineDistance}px`;
            s2line2.classList.remove('lineReturnsAside');
            s2aside2.classList.remove('aside2or4Disappears');
            aside2hidden = true;
        }
        function clearSettings1() {
            s2line2.style.width = '0px';
            s2aside2.style.left = `${asideDistance + asideLineDistance}px`;
        }
        setTimeout(clearSettings, 1600)
        setTimeout(clearSettings1, 800)
    }
}

const s2step3 = document.getElementById('s2-step3');
const s2line3 = document.getElementById('s2-lineToAside3');
const s2aside3 = document.getElementById('s2-aside3');
s2step3.addEventListener('click', moveAside3);

function moveAside3() {
    if (aside1hidden === false || aside2hidden === false || aside4hidden === false) {
        if (aside1hidden === false) aside1isMoving();
        if (aside2hidden === false) aside2isMoving();
        if (aside4hidden === false) aside4isMoving();
        setTimeout(aside3isMoving, 400)
    } else {
        aside3isMoving();
    }
}

function aside3isMoving() {
    let asideLineDistance = parseInt(getComputedStyle(document.body).getPropertyValue('--s2-aside-line-distance'));
    if (aside3hidden === true) {
        s2line3.classList.add('lineTakesAside');
        s2aside3.classList.add('aside1or3Appears');
        function clearSettings() {
            s2step3.style.outline = `4px solid ${outlineColor}`;
            s2line3.style.width = '60px';
            s2aside3.style.right = `${asideLineDistance}px`;
            s2line3.classList.remove('lineTakesAside');
            s2aside3.classList.remove('aside1or3Appears');
            aside3hidden = false;
        }
        setTimeout(clearSettings, 1600)
    } else {
        s2line3.classList.add('lineReturnsAside');
        s2aside3.classList.add('aside1or3Disappears');
        function clearSettings() {
            s2step3.style.outline = 'none';
            s2aside3.style.right = `${asideDistance + asideLineDistance}px`;
            s2line3.classList.remove('lineReturnsAside');
            s2aside3.classList.remove('aside1or3Disappears');
            aside3hidden = true;
        }
        function clearSettings1() {
            s2line3.style.width = '0px';
            s2aside3.style.right = `${asideDistance + asideLineDistance}px`;
        }
        setTimeout(clearSettings, 1600)
        setTimeout(clearSettings1, 800)
    }
}

const s2step4 = document.getElementById('s2-step4');
const s2line4 = document.getElementById('s2-lineToAside4');
const s2aside4 = document.getElementById('s2-aside4');
s2step4.addEventListener('click', moveAside4);

function moveAside4() {
    if (aside1hidden === false || aside2hidden === false || aside3hidden === false) {
        if (aside1hidden === false) aside1isMoving();
        if (aside2hidden === false) aside2isMoving();
        if (aside3hidden === false) aside3isMoving();
        setTimeout(aside4isMoving, 400)
    } else {
        aside4isMoving();
    }
}

function aside4isMoving() {
    let asideLineDistance = parseInt(getComputedStyle(document.body).getPropertyValue('--s2-aside-line-distance'));
    if (aside4hidden === true) {
        s2line4.classList.add('lineTakesAside');
        s2aside4.classList.add('aside2or4Appears');
        function clearSettings() {
            s2step4.style.outline = `4px solid ${outlineColor}`;
            s2line4.style.width = '60px';
            s2aside4.style.left = `${asideLineDistance}px`;
            s2line4.classList.remove('lineTakesAside');
            s2aside4.classList.remove('aside2or4Appears');
            aside4hidden = false;
        }
        setTimeout(clearSettings, 1600)
    } else {
        s2line4.classList.add('lineReturnsAside');
        s2aside4.classList.add('aside2or4Disappears');
        function clearSettings() {
            s2step4.style.outline = 'none';
            s2aside4.style.left = `${asideDistance + asideLineDistance}px`;
            s2line4.classList.remove('lineReturnsAside');
            s2aside4.classList.remove('aside2or4Disappears');
            aside4hidden = true;
        }
        function clearSettings1() {
            s2line4.style.width = '0px';
            s2aside4.style.left = `${asideDistance + asideLineDistance}px`;
        }
        setTimeout(clearSettings, 1600)
        setTimeout(clearSettings1, 800)
    }
}
