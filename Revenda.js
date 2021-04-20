function  revender ( ) {

    var  veiculo  =  documento . getElementById ( 'txtVeiculo' ) . valor ;
    var  valorTotal  =  document . getElementById ( 'txtPreco' ) . valor ;

    var  entrada  =  ( valorTotal  *  0,5 ) . toLocaleString ( 'pt-br' , { estilo : 'moeda' ,  moeda : 'BRL' } ) ;
    var  parcela  =  ( [ valorTotal  *  0.5 ] / 12 ) . toLocaleString ( 'pt-br' , { estilo : 'moeda' ,  moeda : 'BRL' } ) ;

    documento . getElementById ( 'outVeiculo' ) . textContent  =  veiculo ;
    documento . getElementById ( 'outPreco' ) . textContent  =  `Entrada de $ { entrada } + 12x de $ { parcela } ` ;

}

var  btnRevender  =  document . getElementById ( 'btnRevender' ) ;
btnRevender . addEventListener ( 'clique' ,  revender ) ;