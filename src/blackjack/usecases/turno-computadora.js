import { pedirCarta } from "./pedir-carta";
import { crearCarta } from "./crear-carta";
import { determinarGanador } from "./ganador";
import { acumularPuntos } from "./acumular-puntos";
/**
 * Turno de la computadora
 * @param {Number} puntosMinimos puntos mínimos que la computadora necesita para ganar
 * @param {Array<String>} deck cartas actuales del deck
 * @param {Array<Number>} puntosJugadores arreglo con los puntos de los jugadores
 * @param {HTMLElement} txtGanador elemento html para modificar texto del ganador
 * @param {HTMLElement} puntosHTML elemento html donde modifiar los puntos
 * @param {HTMLDivElement} divCartasJugadores Elemento html div donde agregar la carta
 */
export const turnoComputadora = ( puntosMinimos, deck = [], puntosJugadores, txtGanador, puntosHTML, divCartasJugadores ) => {

    if ( !puntosMinimos ) throw new Error('Puntos mínimos son necesarios');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );
        puntosComputadora = acumularPuntos( carta, puntosJugadores.length - 1, puntosJugadores, puntosHTML);
        crearCarta( carta, puntosJugadores.length - 1, divCartasJugadores);

    } while( (puntosComputadora < puntosMinimos) && puntosMinimos <= 21 );

    determinarGanador( txtGanador, puntosJugadores );
}