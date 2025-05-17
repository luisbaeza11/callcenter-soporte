// Base de datos de alarmas (puedes migrarla luego a un JSON externo o API)
const alarmas = {
    "A001": {
        "descripcion": "Sobrecarga de motor",
        "causa": "Voltaje irregular o fallo en el sensor",
        "solucion": "1. Apague la máquina. 2. Verifique el cableado. 3. Reinicie.",
        "urgencia": "Alta"
    }

    "A002": {
        "descripcion": "Hongo de emergencia activo",
        "causa": "El hongo de emergencia fue oprimido en el panel operador",
        "solucion": "1. Gire el hongo de emergencia para desenclavarlo. 2. Jale hacia arriba.",
        "urgencia": "Alta"
    }
    },

    "B205": {
        "descripcion": "Fuga de refrigerante",
        "causa": "Tubería obstruida o conexión floja",
        "solucion": "1. Revise las conexiones. 2. Limpie las tuberías. 3. Rellene refrigerante.",
        "urgencia": "Media"
    }
};

function buscarAlarma() {
    const codigo = document.getElementById("codigoAlarma").value.toUpperCase();
    const resultadoDiv = document.getElementById("resultado");

    if (alarmas[codigo]) {
        resultadoDiv.innerHTML = `
            <h3>Alarma ${codigo}: ${alarmas[codigo].descripcion}</h3>
            <p><strong>Causa:</strong> ${alarmas[codigo].causa}</p>
            <p><strong>Solución:</strong> ${alarmas[codigo].solucion}</p>
            <p><strong>Urgencia:</strong> ${alarmas[codigo].urgencia}</p>
        `;
    } else {
        resultadoDiv.innerHTML = "<p>❌ Código no encontrado. Verifique o contacte a soporte.</p>";
    }
}
