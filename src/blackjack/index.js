// import crearDeck, { miNombre }  from './usecases/crear-deck';
// import { crearDeck as crearNuevoDeck }  from './usecases/crear-deck';
import { crearDeck, pedirCarta, valorCarta, crearCarta, turnoComputadora, acumularPuntos } from './usecases/index';

/*
* 2C = Two of Clubs (Tréboles)
* 2D = Two of Diamonds
* 2H = Two of Hearts
* 2S = Two of Spades
*/

const miModulo = (() => {
  'use strict'

  let deck = [];
  const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

  let puntosJugadores = [];

  // Referencias HTML
  const btnNuevo = document.querySelector('#btnNuevo'),
          btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          divCartasJugadores = document.querySelectorAll('.divCartas'),
          puntosHTML = document.querySelectorAll('small'),
          txtGanador = document.querySelector('#txtGanador');

  const inicializarJuego = ( numJugadores = 2 ) => {
      deck = crearDeck( tipos, especiales );
      puntosJugadores = [];
      for( let i = 0; i<numJugadores; i++) {
          puntosJugadores.push(0);
      }

      puntosHTML.forEach( elem => elem.innerText = 0 );
      divCartasJugadores.forEach( elem => elem.innerHTML = '' );

      btnPedir.disabled = false;
      btnDetener.disabled = false;

      txtGanador.innerHTML = '¿Quién Ganará?'
  }

  // Eventos
  btnPedir.addEventListener('click', ( turno = 0) => {

      const carta = pedirCarta( deck );
      const puntosJugador = acumularPuntos( carta, 0, puntosJugadores, puntosHTML );

      crearCarta( carta, 0, divCartasJugadores );

      if( puntosJugador > 21 ) {
          btnDetener.disabled = true;
          btnPedir.disabled = true;
          turnoComputadora( puntosJugador, deck, puntosJugadores, txtGanador, puntosHTML, divCartasJugadores );
      } else if( puntosJugador === 21 ) {
          btnDetener.disabled = true;
          btnPedir.disabled = true;
          turnoComputadora( puntosJugador, deck, puntosJugadores, txtGanador, puntosHTML, divCartasJugadores );
      }

  });

  btnDetener.addEventListener('click', () => {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora( puntosJugadores[0], deck, puntosJugadores, txtGanador, puntosHTML, divCartasJugadores );
  });

  btnNuevo.addEventListener('click', () => {

      inicializarJuego();

  });

  return {
      nuevoJuego: inicializarJuego
  };

})();