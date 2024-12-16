import _ from 'underscore';

// export const miNombre = 'Byron';

/**
 * Esta función me permite crear una nueva baraja revuelta
 * @param {Array<string>} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<string>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<string>} retorna un nuevo arreglo de cartas
 */
export const crearDeck = ( tiposDeCarta, tiposEspeciales ) => {

    if ( !tiposDeCarta || tiposDeCarta.length === 0 ) 
        throw new Error('TiposDeCarta es obligatorio como un arreglo de string');

    if ( !tiposEspeciales || tiposEspeciales.length === 0 ) 
        throw new Error('tiposEspeciales es obligatorio como un arreglo de string');

    let deck = [];

    deck = [];
    for ( let i = 2; i <= 10; i++ ) {
        for (let tipo of tiposDeCarta) {
            deck.push( i + tipo );
        }
        
    }

    for ( let tipo of tiposDeCarta ) {
        for (let esp of tiposEspeciales) {
            deck.push( esp + tipo );
        }
        
    }
    
    return _.shuffle( deck );
}

// export default crearDeck;