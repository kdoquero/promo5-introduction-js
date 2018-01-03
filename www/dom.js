//let para = docdocument.getElementById('para');

let para = document.querySelector('#para');

console.log(para.textContent);

para.style.color ='red';

let laClasse = document.querySelectorAll('.laClasse');

for (let i of laClasse) {
    i.style.fontSize ='70px';
    
}

let span = document.querySelector('p span');

span.textContent ='inside para';

let titre = document.querySelector('h1');


   alert(titre.textContent);



   document.querySelector("section").style.border = '2px solid black';

   let mot = prompt("tapez un mot");
   let lastSpan = document.querySelector('section > span');
   lastSpan.textContent = mot;
