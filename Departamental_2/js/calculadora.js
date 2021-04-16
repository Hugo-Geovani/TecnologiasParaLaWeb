
function sumaNumeros(){
    //Propiedad
    var primerNumero= parseInt(document.getElementById("numero1").value);
    var segundoNumero= parseInt(document.getElementById("numero2").value);
    //Todo del objeto
    document.getElementById("resultado").innerHTML= "Resultado: "+ (primerNumero + segundoNumero);
}
function restaNumeros(){
    var resultado= document.getElementById("numero1").value - document.getElementById("numero2").value;
    document.getElementById("resultado").innerHTML= "Resultado: "+resultado;
}
function multiplicaNumeros(){
    var resultado= document.getElementById("numero1").value * document.getElementById("numero2").value;
    document.getElementById("resultado").innerHTML= "Resultado: "+resultado;
}
function divideNumeros(){
    var resultado= document.getElementById("numero1").value / document.getElementById("numero2").value;
    document.getElementById("resultado").innerHTML= "Resultado: "+resultado;
}