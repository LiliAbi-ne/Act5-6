export function resolverTorresHanoi(discos, origen, destino, auxiliar) {
    const movimientos = [];
    ;
    function mover(d, origen, destino, auxiliar) {
        if (d === 1) {
            movimientos.push(`Mover disco 1 de ${origen} a ${destino}`);
            return;
        }
        else {
            mover(d - 1, origen, auxiliar, destino);
            movimientos.push(`Mover disco ${d} de ${origen} a ${destino}`);
            mover(d - 1, auxiliar, destino, origen);
        }
    }
    mover(discos, origen, "destino", auxiliar);
    return movimientos;
}
