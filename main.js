/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/
const { createApp } = Vue;   //LA V DI VUE MAIUSCOLA!!

createApp({
    data(){
        return {
            message: 'HELLO WORLD!!'
        }
    }
}).mount('#title')