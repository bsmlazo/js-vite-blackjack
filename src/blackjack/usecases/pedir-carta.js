/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck deck completo de cartas
 * @returns {String} retorna nueva carta del deck
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0) throw new Error('No hay cartas en el deck');

    return deck.pop();
}