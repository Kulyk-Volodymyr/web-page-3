let sectionsButton = document.querySelectorAll('div[class="section-header"] button');
let sectionsContent = document.querySelectorAll('section div[id$="-body"]');
let sectionsPointer = document.querySelectorAll('a[href^="#section-"]');
let contentHigherThanWindow = true;

function showHideContent(n) {
    if (sectionsButton[n].innerHTML === 'Hide content') {
        sectionsButton[n].innerHTML = 'Show content';
        sectionsContent[n].style.display = 'none';
        setSectionsPointers(); // scroll.js
    } else {
        sectionsButton[n].innerHTML = 'Hide content';
        sectionsContent[n].style.display = 'inherit';
        setSectionsPointers(); // scroll.js
    }
}
