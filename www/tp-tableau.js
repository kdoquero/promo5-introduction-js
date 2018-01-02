/*let voiture = [];

for (let nom = 0; nom <= 3; nom++) {
    voiture.push(prompt("entrer nom de voiture"));
    console.log(voiture);
   
}

for (let nom of voiture) {
    console.log(nom);
    console.log(voiture.length);
}
*/
let voiture = ["306","aventador"];
let start = "start";
let show = "show";
let length ="length";
let reset ="reset";
let stop ="stop";

while (true) {
   let choix = prompt("quoi faire ?");

    if (choix == start ) {
        for (let nom = 0; nom <= 3; nom++) {
            voiture.push(prompt("entrer nom de voiture"));
        }
    }  
    
    else if (choix == show) {
        for (let nom of voiture) {
            console.log(nom);
        }

    }

    else if (choix == length) {
        for (let nom of voiture) {
            console.log(voiture.length);
        }    
    }
    
    else if (choix == reset) {
        let voiture = [];
    } 

    else if (choix == stop) {
        break;
    }

}
