const TowardsMouseArea = document.getElementById("s3-towards-mouse-area");
TowardsMouseArea.addEventListener("mouseover", towardsEvent);
TowardsMouseArea.addEventListener("mousemove", towardsEvent);
TowardsMouseArea.addEventListener("mouseout", towardsEvent);
const ClickMeDiv = document.getElementById("s3-towards-mouse-item");

function towardsEvent(e) {
    let mouseXcoord = e.clientX - TowardsMouseArea.getBoundingClientRect().x;
    let mouseYcoord = e.clientY - TowardsMouseArea.getBoundingClientRect().y;
    if (e.type === "mousemove") {
        ClickMeDiv.style.left = mouseXcoord - 50 + 'px';
        ClickMeDiv.style.top = mouseYcoord - 50 + 'px';
    } else if (e.type === "mouseover") {
        ClickMeDiv.style.left = mouseXcoord - 50 + 'px';
        ClickMeDiv.style.top = mouseYcoord - 50 + 'px';
    } else if (e.type === "mouseout") {
        ClickMeDiv.style.left = 'calc(50% - 50px)';
        ClickMeDiv.style.top = 'calc(50% - 50px)';
    }
}

const BackwardsMouseArea = document.getElementById("s3-backwards-mouse-area");
BackwardsMouseArea.addEventListener("mousemove", backwardsEvent);
BackwardsMouseArea.addEventListener("mouseout", backwardsEvent);
BackwardsMouseArea.addEventListener("mouseover", backwardsEvent);
const DontClickMeDiv = document.getElementById("s3-backwards-mouse-item");

function backwardsEvent(e) {
    let mouseXcoord = e.clientX - BackwardsMouseArea.getBoundingClientRect().x;
    let mouseYcoord = e.clientY - BackwardsMouseArea.getBoundingClientRect().y;
    let areaWidth = BackwardsMouseArea.getBoundingClientRect().width;
    let areaHeight = BackwardsMouseArea.getBoundingClientRect().height;
    if (e.type === "mousemove" || "mouseover") {
        if (mouseXcoord <= areaWidth / 2) {
            DontClickMeDiv.style.left = mouseXcoord + (areaWidth / 2) - 50 + 'px';
        } else {
            DontClickMeDiv.style.left = mouseXcoord - (areaWidth / 2) - 50 + 'px'
        }

        if (mouseYcoord <= areaHeight / 2) {
            DontClickMeDiv.style.top = mouseYcoord + (areaHeight / 2) - 50 + 'px';
        } else {
            DontClickMeDiv.style.top = mouseYcoord - (areaHeight / 2) - 50 + 'px'
        }
    } else if (e.type === "mouseout") {
        DontClickMeDiv.style.left = 'calc(50% - 50px)';
        DontClickMeDiv.style.top = 'calc(50% - 50px)';
    }
}
