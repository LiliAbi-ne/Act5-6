import { resolverTorresHanoi } from "./hanoi";

const torresHanoi = document.getElementById("solve").addEventListener("click", () => {
    const discosInput = document.getElementById("discos") as HTMLInputElement;
    const discos = parseInt(discosInput.value);

    if(!isNaN(discos) && discos > 0){
        const movimientos = resolverTorresHanoi(discos, 'A', 'C', 'B');
        let resultText = `Resolución de las Torres de Hanoi para ${discos} discos:<br>`;

        movimientos.forEach((movimiento, index) => {
            resultText += `Paso ${index + 1}. ${movimiento}<br>`;
        });
        document.getElementById("result").innerHTML = resultText;
    } else {
        alert("Por favor, ingrese un número válido de discos.");
    }
});