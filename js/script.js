/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1,
utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine,
presa anch’essa da un data.
*/
const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        subtitle: 'Evan You creator of Vue.js',
        imageLink: 'https://images.ctfassets.net/zojzzdop0fzx/4xN2UpeCLW0Skkj9sqlW4t/9a3c344547f631ec77f2f68cd013c3f7/Eng_Leadership_-_Erica_Stanley.png'
      }
    }
  }).mount('#app')