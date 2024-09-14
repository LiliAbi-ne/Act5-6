export function resolverTorresHanoi(discos: number, origen: string, destino:string, auxiliar: string): string[]{
    const movimientos: string[] = [];;

    function mover(d: number, origen: string, destino: string, auxiliar: string): void {
        if (d === 1) {
            movimientos.push(`Mover disco 1 de ${origen} a ${destino}`);
            return;
        }else {
            mover(d - 1, origen, auxiliar, destino);
            movimientos.push(`Mover disco ${d} de ${origen} a ${destino}`);
            mover(d - 1, auxiliar, destino, origen);
        }
    }
    mover(discos, origen, "destino", auxiliar);
    return movimientos;
}
