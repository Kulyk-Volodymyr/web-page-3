window.onscroll = function() {pageScrolling()};
    
function pageScrolling() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("indicator-body").style.height = scrolled + "%";
}

function setSectionsPointers() {
    let sections = document.getElementsByTagName('section');
    let pointers = document.querySelectorAll("div[class='section-pointer']");
    for (let i = 0; i < sections.length; i++) {
        let sectionTop = sections[i].getBoundingClientRect().top + window.scrollY;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let pointerTop = (sectionTop * 100) / height;
        if (pointerTop >= 100) pointerTop = 100;
        if (pointerTop < 0) pointerTop = 0;
        pointers[i].style.top = pointerTop + "%";
    }
}

setSectionsPointers()
