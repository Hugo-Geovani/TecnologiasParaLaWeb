//Hecho por: Hugo Geovani Arroyo Castorena

var display = document.getElementById("display");
var x=0;
//Esta funcion es para ingresar los digitos en el display, no te permite ingresar dos signos consecutivos.
function ingresarDigito(digito){
    if(display.value==0){
        display.value = digito;
        x=digito;
    }
    else{
        if(typeof digito == 'number'){
            display.value += digito;
            x=digito;
        }
        else{
            if(typeof x != 'number'){}
            else{
                display.value += digito;
                x=digito;
            }
        }
    }
}
function limpiarPantalla(){
    display.value = 0;
    x=0;
}
function teclaIgual(){
    display.value = eval(display.value);
}

function calcularExponente(){
    if(typeof x == 'number'){
        var pot = prompt("Potencia a la cual lo quiere elevar: ");
        var numero = eval(display.value);
        var res = Math.pow(numero,pot);
        display.value = res;
    }
}

function calcularRaiz(){
    var numero = eval(display.value);
    var raiz = Math.sqrt(numero);
    display.value = raiz;
}

function calcularLog(){
    var numero = eval(display.value);
    var log = Math.log10(numero);
    display.value = log;
}

function calcularLn(){
    var numero = eval(display.value);
    var ln = Math.log(numero);
    display.value = ln;
}

function factorial(){
    var n = eval(display.value);
    var fact = calcularFactorial(n);
    display.value = fact;
}

function calcularFactorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return calcularFactorial(n - 1) * n;
    }
}

function calcularPorcentaje(){
    if(typeof x == 'number'){
        var porcen= eval(display.value);
        var numero = prompt("Usted desea obtener el "+porcen+"% de: ");
        var res = (numero * porcen)/100; 
        display.value = res;
    }
}