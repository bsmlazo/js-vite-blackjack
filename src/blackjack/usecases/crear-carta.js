/**
 * 
 * @param {String} carta número y pinta de la carta a voltear
 * @param {Number} turno jugador que voltea la carta, Ejemplo: 0
 * @param {HTMLDivElement} divCartasJugadores Elemento html div donde agregar la carta
 */
export const crearCarta = ( carta, turno, divCartasJugadores) => {
    
    if ( !carta ) throw new Error('Argumento carta es necesario');
    if ( turno === '' || turno === undefined ) throw new Error('Argumento turno es necesario');
    if ( !divCartasJugadores ) throw new Error('Argumento divCartasJugadores es necesario');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append( imgCarta );
}