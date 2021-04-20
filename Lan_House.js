
function  calcular ( ) {

    var  valor  =  documento . getElementById ( 'txtValor' ) . valor ;
    var  consumo  =  documento . getElementById ( 'txtConsumo' ) . valor ;

    var  total  =  ( Mat . ceil ( consumo / 15 ) * valor ) . toLocaleString ( 'pt-br' , { estilo : 'moeda' ,  moeda : 'BRL' } ) ;

    documento . getElementById ( 'outTotal' ) . textContent  =  'Valor a Pagar'  + total ;

}

var  btnCalcular  =  documento . getElementById ( 'btnCalcular' ) ;
btnCalcular . addEventListener ( 'click' ,  calcular ) ;