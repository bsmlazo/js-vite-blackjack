/**
 * 
 * @param {HTMLElement} txtGanador elemento html para modificar texto del ganador
 * @param {Array<Number>} puntosJugadores arreglo con los puntos de los jugadores
 */
export const determinarGanador = ( txtGanador, puntosJugadores ) => {
    const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

    txtGanador.innerHTML = ( puntosMinimos > 21 || (puntosComputadora <= 21 && puntosComputadora > puntosMinimos) ) ? 'Gana la computadora... sigue intentando...' :
                            ( puntosComputadora > 21 || puntosComputadora < puntosMinimos) ? 'Ganaste! Felicitaciones!!!' : 
                            'Vaya! Ha sido un empate, vuelve a intentarlo!!';
}