import { calularCambio } from "./cambio.js";
document.getElementById('calculate').addEventListener('click', () => {
    const amountInput = document.getElementById('amount');
    const amount = parseFloat(amountInput.value);
    if (!isNaN(amount) && amount > 0) {
        const result = calularCambio(amount);
        let resultText = "Cambio para $" + amount.toFixed(2) + ":<br>";
        for (const denominacion in result) {
            resultText += result[denominacion] + " monedas de $" + denominacion + "<br>";
        }
        document.getElementById('result').innerHTML = resultText;
    }
    else {
        document.getElementById('result').textContent = 'Por favor, ingrese un monto valido.';
    }
});
