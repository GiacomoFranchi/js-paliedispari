# ESERCIZIO

## Descrizione
**Palindroma**
Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma (non usare funzioni predefinite di js).

## Svolgimento
**Raccolta dati:**
1. creare una variabile 'userParola' a cui associare l'input dell'utente 

## Svolgimento

1. Creare una funzione che prende come dato in ingresso "userParola"
    - Aprire un ciclo for che lavora finche il parametro "i" che ha valore uguale alla lunghezza della parola non diventa minore di 0
    - associaare alla variabile "lettera" userParola[i]
    - aggiungere a ogni cilo la variabile "lettera" alla variabile "parolaInv"
    così da avere a fine ciclo la "userParola" invertita che avremop come dato in uscita e che assoceremo alla const "parolaReverse"
2. creare un eventListener che si attiva al "click" sul bottone "avanti"
    - dichiarare la variabile creata
    - porre la condizione per cui se "userParola" è identica a "parolaReverse"
        - allora la parola è palindroma
        - altrimenti non è palindroma
3. creare un eventListener che si attiva al "click" sul bottone "annulla"
    - quando la condizione si verifica le variabili "input" e "risp" vengono svuotate

## Output
Associare al id "risp" in HTML la const "risp" dopodichè aggiungere nel ciclo if del programma la risposta. in base all' esito della verifica:
    - se è verificata allora stampare 'La parola inserita è palindroma'
    - altrimenti stampare'La parola inserita non è palindroma'