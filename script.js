function calcularHorario() {
    // Pegando os valores do usuário
    const entrada = document.getElementById("entrada").value;
    const almoco = parseInt(document.getElementById("almoco").value, 10);
    const carga = document.getElementById("carga").value;

    // Validando os campos
    if (!entrada || !almoco || !carga) {
        document.getElementById("resultado").innerText = "Por favor, preencha todos os campos.";
        return;
    }

    // Convertendo os horários para minutos
    const [entradaHora, entradaMin] = entrada.split(":").map(Number);
    const [cargaHora, cargaMin] = carga.split(":").map(Number);

    const entradaEmMinutos = entradaHora * 60 + entradaMin;
    const cargaEmMinutos = cargaHora * 60 + cargaMin;

    // Calculando o horário de saída
    const saidaEmMinutos = entradaEmMinutos + cargaEmMinutos + almoco;

    // Convertendo de volta para HH:mm
    const saidaHora = Math.floor(saidaEmMinutos / 60);
    const saidaMin = saidaEmMinutos % 60;

    // Formatando o resultado
    const horarioSaida = `${saidaHora.toString().padStart(2, '0')}:${saidaMin.toString().padStart(2, '0')}`;
    document.getElementById("resultado").innerText = `Horário de saída: ${horarioSaida}`;
}
