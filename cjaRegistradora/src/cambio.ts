export function calularCambio(cantidad: number): {[denominacion: string]: number}{
    const denominaciones: number[] = [100, 50, 20, 10, 5, 1, 0.50, 0.20, 0.01];
    const resultado: {[denominacion: string]: number} = {};

    for(let denominacion of denominaciones){
        const cantidadDenominacion = Math.floor(cantidad / denominacion);
        if(cantidadDenominacion > 0){
            resultado[denominacion.toFixed(2)] = cantidadDenominacion;
            cantidad -= cantidadDenominacion * denominacion;
        }
    }
    return resultado;
}