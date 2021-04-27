function  calcular ( ) {

    var nome=documento.getElementById('txtAluno').valor;
    var av1 = parseFloat(document.getElementById('txtAv1').value);
    var  av2 = parseFloat(document.getElementById ('txtAv2').value);
    var  av3 = parseFloat(document.getElementById ('txtAv3').value);
    var  mediaAluno;


    if( av1<4 && av2<4)  {
        documento.getElementById('outSituacao').textContent=`$ { nome },Você está reprovado!`
    }
    else{
        if (av1>=4 && av2>=4)
        {
            mediaAluno=(av1+av2)/2;

            if (mediaAluno<6){
        if  (av1 >= av2 && av3>=4);
        {
            mediaAluno=(av1+av3)/2;
        }
        senão 
        {
            if (av3>=4)
            {
                mediaAluno = (av2+av3)/2;
            }
        }
            }
        }   
    else {
        if  (av1>=4 && av1>av2 && av3>=4)
        {
            mediaAluno = (av1+av3)/2;
        }
        else  {
            if  ( av2>=4 && av3 >= 4) {
                mediaAluno = (av2+av3)/2;
            }
            else {
                documento.getElementById('outSituacao').textContent = `$ {nome}, Você está reprovado!`
                mediaAluno='Indefinida';
            }
        }
        }

    if  ( mediaAluno >= 6) {
        documento . getElementById ( 'outMedia' ) . textContent  =  'Média:'  + mediaAluno ;
        documento . getElementById ( 'outSituacao' ) . textContent  =  `Parabéns $ { nome } , Você foi Aprovado, parabéns!`
    }
    else  {
        documento.getElementById('outMedia').textContent='Média:'+mediaAluno;
        documento.getElementById('outSituacao').textContent=nome+', você foi Reprovado, estude mais!';
    }
}   
}


documento.getElementById('btnMedia').addEventListener('click',calcular);