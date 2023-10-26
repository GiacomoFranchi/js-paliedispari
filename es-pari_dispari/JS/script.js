
//EVENTO INIZIALE

//SCELTA PARI
document.getElementById("pari").addEventListener('click', function(){

    const sceltaUtente = "pari"
    console.log(sceltaUtente);
// CLick su start
document.getElementById("start").addEventListener('click', function(){
    
    //Raccolta dati
    const pcNum = numRandGen(1,5);
    const num = document.getElementById("user-num");
    const userNum = parseInt(num.value);
    console.log(pcNum, userNum);

    const risp = document.querySelector(".risp");
    const risult = document.querySelector(".risultato");

    //Controllo numero
    if (userNum < 1 || userNum > 5 ){
        alert("DA 1 A 5!")
        //Cancellare numero in input??
    } 

    // Somma numeri
     let sommaNum = userNum + pcNum;
    console.log(sommaNum);
    

    // Controllo pari/dispari
    let msg = "HAI PERSO"
    if (sommaNum % 2 == 0 ) {
        msg = "HAI VINTO"

    }
    console.log(msg);

    //OUTPUT
    risp.innerHTML = `Il tuo numero è ${userNum} il mio numero è ${pcNum} 
    la somma dei due fa ${sommaNum}`
    risult.innerHTML = msg
})

// CLick su cancel
document.getElementById("cancel").addEventListener('click', function(){
    
    const num = document.getElementById("user-num");
    num.value = "";

    const risp = document.querySelector(".risp");
    risp.innerHTML = "";

    const risult = document.querySelector(".risultato");
    risult.innerHTML = "";
})
})



//SCELTA DISPARI
document.getElementById("dispari").addEventListener('click', function(){

    const sceltaUtente = "dispari"
    console.log(sceltaUtente);
// CLick su start
document.getElementById("start").addEventListener('click', function(){
    
    //Raccolta dati
    const pcNum = numRandGen(1,5);
    const num = document.getElementById("user-num");
    const userNum = parseInt(num.value);
    console.log(pcNum, userNum);

    const risp = document.querySelector(".risp");
    const risult = document.querySelector(".risultato");

    //Controllo numero
    if (userNum < 1 || userNum > 5 ){
        alert("DA 1 A 5!")
        //Cancellare numero in input??
    } 

    // Somma numeri
     let sommaNum = userNum + pcNum;
    console.log(sommaNum);
    

    // Controllo pari/dispari
    let msg = "HAI VINTO"
    if (sommaNum % 2 == 0 ) {
        msg = "HAI PERSO"

    }
    console.log(msg);

    //OUTPUT
    risp.innerHTML = `Il tuo numero è ${userNum} il mio numero è ${pcNum} 
    la somma dei due fa ${sommaNum}`
    risult.innerHTML = msg
})

// CLick su cancel
document.getElementById("cancel").addEventListener('click', function(){
    
    const num = document.getElementById("user-num");
    num.value = "";

    const risp = document.querySelector(".risp");
    risp.innerHTML = "";

    const risult = document.querySelector(".risultato");
    risult.innerHTML = "";
})
})




// FUNZIONI
function numRandGen (numMin, numMax) {
    pcNum = Math.floor(Math.random() * (numMax - numMin +1) ) + numMin;
console.log(pcNum);
return pcNum; 
}