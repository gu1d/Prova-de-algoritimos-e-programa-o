function Calcular() {
    var saque = Number(document.getElementById('txtValor_saque').value);
    var nota_100 = 0;
    var nota_50 = 0;
    var nota_10 = 0;
    
    if (saque%10 == 0){

        while (saque >= 100){
            saque = saque-100;
            nota_100++; 
            if (nota_100<0) {
                document.getElementById('outNota100').textContent = " "
            } else {
                document.getElementById('outNota100').textContent = `${nota_100} notas de R$100` 
            }
        }

        while (saque >= 50){
            saque = saque-50;
            nota_50++;
            if (nota_50<0) {
                document.getElementById('outNota50').textContent = " "
            } else {
                document.getElementById('outNota50').textContent = `${nota_50} notas de R$50` 
            }
        }

        while (saque >= 10){
            saque = saque-10;
            nota_10++;
            if (nota_10<0) {
                document.getElementById('outNota10').textContent = " "
            } else {
                document.getElementById('outNota10').textContent = `${nota_10} notas de R$10` 
            }
        }
    }

    else {
        alert('O valor não corresponde!');
    }

  

}

document.getElementById('btnVerificar').addEventListener('click', Calcular)