let personnages = [
    {nom_complet: "Harry Potter",age: 12,moldu: false,attaque: 15,vie: 125},
    {nom_complet: "Tom Jedusor",age: 31,moldu: false,attaque: 16,vie: 120},
    {nom_complet: "Hermione Granger",age: 12,moldu: true,attaque: 12,vie: 110},
    {nom_complet: "Albus Dumbledore",age: 65,moldu: false,attaque: 18,vie: 90},
    {nom_complet: "Ron Weasley", age: 12, moldu: false, attaque: 11, vie: 85},
    {nom_complet: "Sirius Black", age: 35, moldu: false, attaque: 10, vie: 100},
    {nom_complet: "Luna Lovegood", age: 14, moldu: false, attaque: 9, vie: 80},
    {nom_complet: "Severus Rogue", age: 40, moldu: false, attaque: 13, vie: 105},
    {nom_complet: "Bellatrix Lestrange", age: 35, moldu: false, attaque: 12, vie: 95},
    {nom_complet: "Nymphadora Tonks", age: 8, moldu: false, attaque: 8, vie: 85}
]

//ex 1 e 2
class sorcier{
    constructor(nom_complet,age,moldu,attaque,vie) {
        const [prenom,nom,age,initials] = this.separerNom(nom_complet)
        this.prenom= prenom;
        this.nom= nom;
        this.age= age;
        this.moldu= moldu;
        this.initials= initials;
        this.attaque= attaque
        this.vie= vie
        
//ex 3 
    if(this.age <= 10)
    console.error("trop jeune pour participer");
    }
    
    
        separerNom(nom_complet){ 
        const[nom,prenom] = nom_complet.split(" ")
        const initials = nom[0] + prenom[0]
        return [nom,prenom,initials]
        }
}

//ex 4
function sorciers(personnages){
    return personnages.map(personnage => new sorcier(
        personnage.nom_complet,
        personnage.age,
        personnage.moldu,
        personnage.attaque,
        personnage.vie
    ))
}
//ex 5

let majeures = []
function majeur(personnage){
    if(personnage.age >=18){
    console.log("le sorcier est majeur" + personnage.age);
    return true;
}
    else{
        console.log("le sorcier n'est pas majeur",+ personnage.age)
        return false
    }
}
//ex 6
personnages.forEach(personnage => {
    majeur(personnage)
});
console.log("ces personnages sont " + majeures)

//ex 7
class Sorcier {
    constructor(nom, vie, age, attaque, moldu) {
        this.nom = nom;
        this.vie = vie;
        this.age = age;
        this.attaque = attaque;
        this.moldu = moldu;
    }

    copieSorciers() {
        return new Sorcier(this.nom, this.vie, this.age, this.attaque, this.moldu);
    }
}
let nom_complet = "Harry Potter";
let age = 12;
let moldu = false;
let attaque = 15;
let vie = 125;

let sorcierOriginal = new Sorcier(nom_complet, vie, age, attaque, moldu);
let copie = sorcierOriginal.copieSorciers();
console.log(copie);

//ex 8 e 9
const combat = function(nomPerso1, nomPerso2) {
    const tableauDeCombat = personnages.slice()
    let perso1 = tableauDeCombat.filter((perso) => { return perso.nom === nomPerso1 })
    perso1 = perso1[0]
    
    let perso2 = tableauDeCombat.filter((perso) => { return perso.nom === nomPerso2 })
    perso2 = perso2[0]
    
    if(perso1.moldu==true && perso2.moldu==false){
        console.log(`${perso1}`,"attaque avant")
    }
    else if (perso1.moldu==false && perso2.moldu==true){
        console.log(`${perso2}`,"attaque avant")
    }
    else{
        console.error("aucun des deux peut se combattre");
    }
    let gagnant = null
    while (gagnant === null) {
    perso2.vie = perso2.vie - perso1.attaque
    if (perso2.vie <= 0) {
    gagnant = perso1
    break
    }
    
    perso1.vie = perso1.vie - perso2.attaque
    if (perso1.vie <= 0) {
    gagnant = perso2
    break;
    }
    }
    console.log(`Le gagnant est: ${gagnant.initial}`)
}

//10
let estoqueVitories = {}
function torneio(sorciers){
    sorciers.forEach(sorcier => {
        estoqueVitories[sorcier.nom] = 0;
    });
    
    for(let i=0;i<sorciers.length;i++){
        for(let j = i+1;j<sorciers.length;j++){
        
        combat(sorciers[i].nom,sorciers[j].nom)

        if(gagnant !==null){
            estoqueVitories[gagnant.nom]++;
        }
    }
}
        resetVie(sorciers)

        const vainqueurs = Object.keys(estoqueVitories).filter(nom => estoqueVitories[nom] === Math.max(...Object.values(estoqueVitories)));
        console.log("le vainquer etait" + vainqueurs)

    
    function resetVie(sorciers) {
        sorciers.forEach((sorcier) => {
            sorcier.vie = sorcier.vies;
        });
    }
    
}
