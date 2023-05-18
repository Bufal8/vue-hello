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
            message: 'HELLO WORLD!!',
            image:"https://images.unsplash.com/photo-1683807179527-8e586297cb55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
        }
    }
}).mount('#app')

// export default{
//     data(){
//         return{
//         }
//     }
// }