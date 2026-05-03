"use strict"


const toggleDarkBttn = document.querySelector('.themeBttn');
//theme change when contrast theme button is clicked
toggleDarkBttn.addEventListener('click', () => {
    // uses backup class option "dark-mode" created in css to toggle on and off the theme colors with transition
document.body.classList.toggle('dark-theme')});

