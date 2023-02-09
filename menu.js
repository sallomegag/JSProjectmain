'use strict'

//accordion
let accordion = document.querySelectorAll('.container');

for (let item of accordion) {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    })
}