//let btn = document.querySelector('button');
let btnUp = document.querySelector('#btnplus');
let btnDown = document.querySelector('#btnmoins');
let span = document.querySelector('span');


let comp = 0;

btnUp.addEventListener('click', function() {
    comp++;
    console.log(comp);
    span.textContent = comp;

    
});

btnDown.addEventListener('click', function() {
    comp--;
    console.log(comp);
    span.textContent = comp;
    
});

