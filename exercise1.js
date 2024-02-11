let adultes = prompt("combien d'adultes sont?")
let enfants = prompt("combien d'enfants sont")
let salaireAnne = prompt("combien vous touchez")
let calculImpot = ""
let famille = 0
const adulte = 1
const enfant = 0.5
function impots(salaireAnne,adultes,enfants){
    if(adultes >=1 && enfants >=0){
        famille = adulteadultes + enfantenfants
        calculImpot = salaireAnne / famille
    }
    if(salaireAnne <= 10777){
        console.log("rien a payer");
    }
    else if (salaireAnne > 10777 && salaire <=27478){ 
        calculImpot = salaireAnne - 10777
            calculImpot = calculImpot * 0.11
            console.log("il faut payer",`${calculImpot}`, "dans l'impôt")
        }
        else if (salaireAnne > 27479 && salaireAnne <=78570){
            calculImpot = salaireAnne - 24478
            calculImpot = calculImpot * 0.30
            console.log("il faut payer",`${calculImpot}`)
        }
        else if(salaireAnne >78571 && salaireAnne <=168994){ 
            calculImpot = salaireAnne - 78570
            calculImpot = calculImpot * 0.41
            console.log("il faut payer",`${calculImpot}`)
        }
        else {
            salaireAnne >168994 
            calculImpot = salaireAnne - 168994
            calculImpot = calculImpot * 0.45
            console.log("il faut payer",`${calculImpot}`);
        }
        if(famille > 1){
            calculImpot * famille
        }
        }
    