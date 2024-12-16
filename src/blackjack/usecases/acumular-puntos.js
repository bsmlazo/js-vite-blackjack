import { valorCarta } from "./valor-carta";
/**
 * Acumular puntos
 * @param {String} carta número y pinta de la carta a voltear. Ejemplo: 2C
 * @param {Number} turno jugador que voltea la carta, Ejemplo: 0
 * @param {Array<Number>} puntosJugadores arreglo con los puntos de los jugadores
 * @param {HTMLElement} puntosHTML elemento html donde modifiar los puntos
 * @returns {Number} - retorna el total de puntos acumulados
 */
export const acumularPuntos = ( carta, turno, puntosJugadores, puntosHTML ) => {

    if ( !carta ) throw new Error('Agumento carta es necesario');
    if ( turno === '' || turno === undefined ) throw new Error('Argumento turno es necesario');
    if ( !puntosJugadores || puntosJugadores.length === 0) throw new Error('Arreglo de puntosJugadores vacío');
    if ( !puntosHTML ) throw new Error('Agumento puntosHTML es necesario');

    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}