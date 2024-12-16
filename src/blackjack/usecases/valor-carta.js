/**
 * Obtener el valor de la carta
 * @param {String} carta número y pinta de la carta a voltear. Ejemplo: 2C
 * @returns {Number} retorna el valor entero de la carta
 */
export const valorCarta = ( carta ) => {

    if ( !carta || carta == '') throw new Error('El parámetro es obligatorio y debe contener una carta válida');

    const valor = carta.substring(0, carta.length - 1);
    
    return valor === 'A' ? 11 :
                    ( valor === 'J' || valor === 'Q' || valor === 'K' ) ? 10 :
                    valor * 1;
}