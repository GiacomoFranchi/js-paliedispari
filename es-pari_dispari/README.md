# ESERCIZIO

## Descrizione
**Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto

## Svolgimento:

**Raccolta dati**
1. Associare alla costante pcNum la funzione numRandGen (da noi generata)
2. Associare alle costanti "num, risp, e risultato" le rispettive classi nel doc html
3. Associare alla costante userNum il valore della costante num

## Logica del programma
1. Creare la funzione numRandGen che avrà come parametri 1 e 5 (il range di numeri scelto per l'esercizio) 
    - associamo a pc num il numero generato da Math.floor(Math.random() * (numMax - numMin +1) ) + numMin;
    - riportiamo come risultato il numero creato
2. creare un event listener per la scelta pari del giocatore 
    - creare un secondo event listener che fa partire il programma al click su invio
    -controllare se il numero è minore di 1 o maggiore di 5
    -sommare "userNum" a "pcNum" cosi da avere "sommaNum"
    -controllare se la somma da un numero pari usando (sommaNum % 2)
        - se il numero è pari l'output dirà che l'utente ha vinto
        - altrimenti dirà che il pc ha vinto
3. creare un event listener per cancellare i dati con un click sul bottone cancel
    - associare alle variabili risp e risult all'interno di HTML delle stringhe vuote
    - associare al valore di "num" un valore nullo così da svuotare la barra di input
4. creare un event listener per la scelta dispari del giocatore
    