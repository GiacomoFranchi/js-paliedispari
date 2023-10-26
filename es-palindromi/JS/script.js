document.getElementById("invia").addEventListener("click", function(){
//Raccolta Dati
const input = document.getElementById("input")
const userParola = input.value;
const parolaReverse = palindromo(userParola);
console.log(userParola);
let risp = document.getElementById("risp")


if (userParola === parolaReverse) {
    console.log('La parola inserita è palindroma');
    risp.innerHTML = 'La parola inserita è palindroma'
} else {
    console.log('La parola inserita non è palindroma');
    risp.innerHTML = 'La parola inserita non è palindroma'
}

console.log(userParola, parolaReverse);
})

document.getElementById("annulla").addEventListener('click', function () {
    const input = document.getElementById("input")
    input.value = "";
    let risp = document.getElementById("risp")
    risp.innerHTML = "";

})



//Funzione

function palindromo (userParola) {


    let parolaInv = "";

    for (let i = userParola.length -1; i >= 0 ; i--) {
        const lettera = userParola[i];
        parolaInv += lettera;
    }

    return parolaInv;
}