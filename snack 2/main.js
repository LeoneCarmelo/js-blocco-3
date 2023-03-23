/* A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */

const characters = ['pippo', 'PLUTO', 'Paperino']

characters.forEach((character) => {
    const char = character.toLowerCase().charAt(0).toUpperCase() + character.toLowerCase().slice(1)
    console.log(char)
})