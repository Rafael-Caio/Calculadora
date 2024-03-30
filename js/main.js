function raiz () {
    var raiz = Math.sqrt(document.getElementById('resultado').value)
    document.getElementById('resultado').value = raiz
}

function calcular (tipo, valor) {
    
    if (tipo === "ação") {
        
        if (valor == 'c') {
            document.getElementById('resultado').value = ''
        }
        
        if (valor === '+' || valor === '-' || valor === '*' || valor === "/" || valor === '%' || valor === '.' || valor === '√'){
            document.getElementById('resultado').value += valor
        }
        
        if (valor === '=') {
            var valor_campo = eval(document.getElementById('resultado').value)
            /*o interpretador javascript consegui identificar se os valores atribuidos mesmo 
            como uma string, se trata de calculo aritimético. A função eval() se comorta do 
            mesmo jeito. Então iremos emprega-la.*/
            document.getElementById('resultado').value = valor_campo
           
        }

    }else if(tipo === "valor") {
        
        document.getElementById('resultado').value += valor
    }
}