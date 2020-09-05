"use strict";

document.addEventListener("DOMContentLoaded", function() {
    // const cells = document.getElementsByClassName('cell');
    const buttons = document.getElementsByClassName('done');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            console.log(this);
            this.parentNode.classList.add("active");
            // this.previousSibling.pause();
        })
    }
});
