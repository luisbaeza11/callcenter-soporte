// Base de datos de alarmas (puedes migrarla luego a un JSON externo o API)
const alarmas = {
    "A001": {
        "descripcion": "Sobrecarga de motor",
        "causa": "Voltaje irregular o fallo en el sensor",
        "solucion": "1. Apague la máquina. 2. Verifique el cableado. 3. Reinicie.",
        "urgencia": "Alta"
     },

    "A002": {
        "descripcion": "Hongo de emergmcia activp",
        "causa": "Se oprimio el Hongo del panel operador, falla posible en el contacto N.C.",
        "solucion": "1. Restablesca el Hongo de emergncia (rote y tire del hongo hacia arriba, oprima reset. 2. Verifique el cableado. 3. Reinicie.",
        "urgencia": "Alta"
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


function buscarMaquina() {
    const codigo = document.getElementById('codigoMaquina').value;
    const resultado = document.getElementById('resultado-maquina');
    
    // Limpiar resultados anteriores
    resultado.innerHTML = '';
    
    // Simulación de búsqueda (deberías reemplazar esto con tu lógica real)
    if (codigo === 'M001') {
        resultado.innerHTML = `
            <div class="machine-result">
                <h3>M001 - Máquina de Inyección</h3>
                <div class="machine-details">
                    <div class="machine-detail">
                        <p><strong>Ubicación:</strong> Planta 1, Línea A</p>
                        <p><strong>Estado:</strong> <span style="color:green">Operativa</span></p>
                    </div>
                    <div class="machine-detail">
                        <p><strong>Último mantenimiento:</strong> 15/05/2023</p>
                        <p><strong>Próximo mantenimiento:</strong> 15/06/2023</p>
                    </div>
                </div>
            </div>
        `;
    } else {
        resultado.innerHTML = '<p>No se encontró ninguna máquina con ese código.</p>';
    }
}
