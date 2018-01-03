let personne = {
    name : "Kevin",
    surName : "DOQUERO",
    age : 30,
    isDev : true,
    presentation : function pres() {
        console.log(`Voici ${this.name} ${this.surName}, il a ${this.age} ans`);
        if (this.isDev) {
            console.log('je suis dev');
        } 
        else {
            console.log('je ne suis pas dev');
        }
    },

    addresse : {
        numero : 30,
        rue : "Victor Hugo",
        ville : "Sainte-Rose"
    }
}
personne.presentation();
//console.log(`Voici ${personne.name} ${personne.surName}, il a ${personne.age} ans`);

personne.name = "Laurent";
personne.age++
personne.isDev = false;
personne.presentation();
//console.log("Voici " + personne.name +" "+ personne.surName +" , il a "+ personne.age + " ans.");
console.log(personne.addresse.ville);