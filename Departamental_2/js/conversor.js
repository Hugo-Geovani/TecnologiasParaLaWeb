//Hugo Geovani Arroyo Castorena
//LONGITUD
function cambiarValor(){
    var valorlong1 = document.getElementById("valor_longitud_1");
    var valorlong2 = document.getElementById("valor_longitud_2");
    var selectlong1 = document.getElementById("select_longitud_1").value;
    var selectlong2 = document.getElementById("select_longitud_2").value;

//Conversor de unidades de longitud
if(selectlong1=="kilometro"){
    if(selectlong2=="kilometro"){
        valorlong2.value = valorlong1.value;
        document.getElementById("parrafo").innerHTML = "El valor se queda igual";
    }
    if(selectlong2=="metro"){
        valorlong2.value = valorlong1.value * 1000;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 1000";
    }
    if(selectlong2=="centimetro"){
        valorlong2.value = valorlong1.value * 100000;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 100000";
    }
    if(selectlong2=="milimetro"){
        valorlong2.value = valorlong1.value * 1000000;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 1000000";
    }
    if(selectlong2=="micrometro"){
        valorlong2.value = valorlong1.value * 1e+9;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 1e+9";
    }
    if(selectlong2=="nanometro"){
        valorlong2.value = valorlong1.value * 1e+12;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 1e+12";
    }
    if(selectlong2=="milla"){
        valorlong2.value = valorlong1.value / 1.609;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 1.609";
    }
    if(selectlong2=="yarda"){
        valorlong2.value = valorlong1.value * 1094;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 1094";
    }
    if(selectlong2=="pie"){
        valorlong2.value = valorlong1.value * 3281;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 3281";
    }
    if(selectlong2=="pulgada"){
        valorlong2.value = valorlong1.value * 39370;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 39370";
    }
    if(selectlong2=="milla_nautica"){
        valorlong2.value = valorlong1.value / 1.852;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 1.852";
    }
}
if(selectlong1=="metro"){
    if(selectlong2=="kilometro"){
        valorlong2.value = valorlong1.value / 1000;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 1000";
    }
    if(selectlong2=="metro"){
        valorlong2.value = valorlong1.value;
        document.getElementById("parrafo").innerHTML = "El valor de longitud queda igual";
    }
    if(selectlong2=="centimetro"){
        valorlong2.value = valorlong1.value * 100;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 100";
    }
    if(selectlong2=="milimetro"){
        valorlong2.value = valorlong1.value * 1000;
        document.getElementById("parrafo").innerHTML = "Mmultiplica el valor de longitud por 1000";
    }
    if(selectlong2=="micrometro"){
        valorlong2.value = valorlong1.value * 1e+6;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 1e+6";
    }
    if(selectlong2=="nanometro"){
        valorlong2.value = valorlong1.value *  1e+9;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 1e+9";
    }
    if(selectlong2=="milla"){
        valorlong2.value = valorlong1.value / 1609;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 1609";
    }
    if(selectlong2=="yarda"){
        valorlong2.value = valorlong1.value * 1.094;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 1.094";
    }
    if(selectlong2=="pie"){
        valorlong2.value = valorlong1.value * 3.281;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 3.281";
    }
    if(selectlong2=="pulgada"){
        valorlong2.value = valorlong1.value * 39.37;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 39.37";
    }
    if(selectlong2=="milla_nautica"){
        valorlong2.value = valorlong1.value / 1852;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 1852";
    }
}
if(selectlong1=="centimetro"){
    if(selectlong2=="kilometro"){
        valorlong2.value = valorlong1.value / 100000;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 100000";
    }
    if(selectlong2=="metro"){
        valorlong2.value = valorlong1.value / 100;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 100";
    }
    if(selectlong2=="centimetro"){
        valorlong2.value = valorlong1.value;
        document.getElementById("parrafo").innerHTML = "El valor de longitud queda igual";
    }
    if(selectlong2=="milimetro"){
        valorlong2.value = valorlong1.value * 10;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 10";
    }
    if(selectlong2=="micrometro"){
        valorlong2.value = valorlong1.value * 10000;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 10000";
    }
    if(selectlong2=="nanometro"){
        valorlong2.value = valorlong1.value *  1e+7;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 1e+7";
    }
    if(selectlong2=="milla"){
        valorlong2.value = valorlong1.value / 160934;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 160934";
    }
    if(selectlong2=="yarda"){
        valorlong2.value = valorlong1.value / 91.44;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 91.44";
    }
    if(selectlong2=="pie"){
        valorlong2.value = valorlong1.value / 30.48;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 30.48";
    }
    if(selectlong2=="pulgada"){
        valorlong2.value = valorlong1.value / 2.54;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 2.54";
    }
    if(selectlong2=="milla_nautica"){
        valorlong2.value = valorlong1.value / 185200;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 185200";
    }
}
if(selectlong1=="milimetro"){
    if(selectlong2=="kilometro"){
        valorlong2.value = valorlong1.value / 1e+6;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 1e+6";
    }
    if(selectlong2=="metro"){
        valorlong2.value = valorlong1.value / 1000;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 1000";
    }
    if(selectlong2=="centimetro"){
        valorlong2.value = valorlong1.value / 10;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 10";
    }
    if(selectlong2=="milimetro"){
        valorlong2.value = valorlong1.value;
        document.getElementById("parrafo").innerHTML = "El valor de longitud queda igual";
    }
    if(selectlong2=="micrometro"){
        valorlong2.value = valorlong1.value * 1000;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 1000";
    }
    if(selectlong2=="nanometro"){
        valorlong2.value = valorlong1.value *  1e+6;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 1e+6";
    }
    if(selectlong2=="milla"){
        valorlong2.value = valorlong1.value / 1.609e+6;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 1.609e+6";
    }
    if(selectlong2=="yarda"){
        valorlong2.value = valorlong1.value / 914;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 914";
    }
    if(selectlong2=="pie"){
        valorlong2.value = valorlong1.value / 305;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 305";
    }
    if(selectlong2=="pulgada"){
        valorlong2.value = valorlong1.value / 25.4;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre  25.4";
    }
    if(selectlong2=="milla_nautica"){
        valorlong2.value = valorlong1.value / 1.852e+6;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 1.852e+6";
    }
}
if(selectlong1=="micrometro"){
    if(selectlong2=="kilometro"){
        valorlong2.value = valorlong1.value / 1e+9;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 1e+9";
    }
    if(selectlong2=="metro"){
        valorlong2.value = valorlong1.value / 1e+6;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 1e+6";
    }
    if(selectlong2=="centimetro"){
        valorlong2.value = valorlong1.value / 10000;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 10000";
    }
    if(selectlong2=="milimetro"){
        valorlong2.value = valorlong1.value / 1000;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 1000";
    }
    if(selectlong2=="micrometro"){
        valorlong2.value = valorlong1.value;
        document.getElementById("parrafo").innerHTML = "El valor de longitud queda igual";
    }
    if(selectlong2=="nanometro"){
        valorlong2.value = valorlong1.value *  1000;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 1000";
    }
    if(selectlong2=="milla"){
        valorlong2.value = valorlong1.value / 1.609e+9;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 1.609e+9";
    }
    if(selectlong2=="yarda"){
        valorlong2.value = valorlong1.value / 914400;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 914400";
    }
    if(selectlong2=="pie"){
        valorlong2.value = valorlong1.value / 304800;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 304800";
    }
    if(selectlong2=="pulgada"){
        valorlong2.value = valorlong1.value / 25400;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre  25400";
    }
    if(selectlong2=="milla_nautica"){
        valorlong2.value = valorlong1.value / 1.852e+9;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 1.852e+9";
    }
}
if(selectlong1=="nanometro"){
    if(selectlong2=="kilometro"){
        valorlong2.value = valorlong1.value / 1e+12;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 1e+12";
    }
    if(selectlong2=="metro"){
        valorlong2.value = valorlong1.value / 1e+9;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 1e+9";
    }
    if(selectlong2=="centimetro"){
        valorlong2.value = valorlong1.value / 1e+7;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 1e+7";
    }
    if(selectlong2=="milimetro"){
        valorlong2.value = valorlong1.value / 1e+6;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 1e+6";
    }
    if(selectlong2=="micrometro"){
        valorlong2.value = valorlong1.value / 1000;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 1000";
    }
    if(selectlong2=="nanometro"){
        valorlong2.value = valorlong1.value;
        document.getElementById("parrafo").innerHTML = "El valor de longitud se mantiene igual";
    }
    if(selectlong2=="milla"){
        valorlong2.value = valorlong1.value / 1.609e+12;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 1.609e+12";
    }
    if(selectlong2=="yarda"){
        valorlong2.value = valorlong1.value / 9.144e+8;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 9.144e+8";
    }
    if(selectlong2=="pie"){
        valorlong2.value = valorlong1.value / 3.048e+8;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 3.048e+8";
    }
    if(selectlong2=="pulgada"){
        valorlong2.value = valorlong1.value / 2.54e+7;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre  2.54e+7";
    }
    if(selectlong2=="milla_nautica"){
        valorlong2.value = valorlong1.value / 1.852e+12;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 1.852e+12";
    }
}
if(selectlong1=="milla"){
    if(selectlong2=="kilometro"){
        valorlong2.value = valorlong1.value * 1.609;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 1.609";
    }
    if(selectlong2=="metro"){
        valorlong2.value = valorlong1.value * 1609;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 1609";
    }
    if(selectlong2=="centimetro"){
        valorlong2.value = valorlong1.value * 160934;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 160934";
    }
    if(selectlong2=="milimetro"){
        valorlong2.value = valorlong1.value * 1.609e+6;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 1.609e+6";
    }
    if(selectlong2=="micrometro"){
        valorlong2.value = valorlong1.value * 1.609e+9;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 1.609e+9";
    }
    if(selectlong2=="nanometro"){
        valorlong2.value = valorlong1.value * 1.609e+12;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 1.609e+12";
    }
    if(selectlong2=="milla"){
        valorlong2.value = valorlong1.value;
        document.getElementById("parrafo").innerHTML = "El valor de la longitud se mantiene igual";
    }
    if(selectlong2=="yarda"){
        valorlong2.value = valorlong1.value * 1760;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 1760";
    }
    if(selectlong2=="pie"){
        valorlong2.value = valorlong1.value * 5280;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 5280";
    }
    if(selectlong2=="pulgada"){
        valorlong2.value = valorlong1.value * 63360;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 63360";
    }
    if(selectlong2=="milla_nautica"){
        valorlong2.value = valorlong1.value / 1.151;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 1.151";
    }
}
if(selectlong1=="yarda"){
    if(selectlong2=="kilometro"){
        valorlong2.value = valorlong1.value / 1094;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 1094";
    }
    if(selectlong2=="metro"){
        valorlong2.value = valorlong1.value / 1.094;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 1.094";
    }
    if(selectlong2=="centimetro"){
        valorlong2.value = valorlong1.value * 91.44;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 91.44";
    }
    if(selectlong2=="milimetro"){
        valorlong2.value = valorlong1.value * 914;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 914";
    }
    if(selectlong2=="micrometro"){
        valorlong2.value = valorlong1.value * 914400;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 914400";
    }
    if(selectlong2=="nanometro"){
        valorlong2.value = valorlong1.value * 9.144e+8;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 9.144e+8";
    }
    if(selectlong2=="milla"){
        valorlong2.value = valorlong1.value / 1760;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 1760";
    }
    if(selectlong2=="yarda"){
        valorlong2.value = valorlong1.value;
        document.getElementById("parrafo").innerHTML = "El valor de longitud se mantiene igual";
    }
    if(selectlong2=="pie"){
        valorlong2.value = valorlong1.value * 3;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 3";
    }
    if(selectlong2=="pulgada"){
        valorlong2.value = valorlong1.value * 36;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 36";
    }
    if(selectlong2=="milla_nautica"){
        valorlong2.value = valorlong1.value / 2025;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 2025";
    }
}
if(selectlong1=="pie"){
    if(selectlong2=="kilometro"){
        valorlong2.value = valorlong1.value / 3281;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 3281";
    }
    if(selectlong2=="metro"){
        valorlong2.value = valorlong1.value / 3.281;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 3.281";
    }
    if(selectlong2=="centimetro"){
        valorlong2.value = valorlong1.value * 30.48;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 30.48";
    }
    if(selectlong2=="milimetro"){
        valorlong2.value = valorlong1.value * 305;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 305";
    }
    if(selectlong2=="micrometro"){
        valorlong2.value = valorlong1.value * 304800;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 304800";
    }
    if(selectlong2=="nanometro"){
        valorlong2.value = valorlong1.value * 3.048e+8;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por  3.048e+8";
    }
    if(selectlong2=="milla"){
        valorlong2.value = valorlong1.value / 5280;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 5280";
    }
    if(selectlong2=="yarda"){
        valorlong2.value = valorlong1.value / 3;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 3";
    }
    if(selectlong2=="pie"){
        valorlong2.value = valorlong1.value;
        document.getElementById("parrafo").innerHTML = "El valor de longitud se mantiene igual";
    }
    if(selectlong2=="pulgada"){
        valorlong2.value = valorlong1.value * 12;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 12";
    }
    if(selectlong2=="milla_nautica"){
        valorlong2.value = valorlong1.value / 6076;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 6076";
    }
}
if(selectlong1=="pulgada"){
    if(selectlong2=="kilometro"){
        valorlong2.value = valorlong1.value / 39370;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 39370";
    }
    if(selectlong2=="metro"){
        valorlong2.value = valorlong1.value / 39.37;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 39.37";
    }
    if(selectlong2=="centimetro"){
        valorlong2.value = valorlong1.value * 2.54;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 2.54";
    }
    if(selectlong2=="milimetro"){
        valorlong2.value = valorlong1.value * 25.4;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 25.4";
    }
    if(selectlong2=="micrometro"){
        valorlong2.value = valorlong1.value * 25400;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 25400";
    }
    if(selectlong2=="nanometro"){
        valorlong2.value = valorlong1.value * 2.54e+7;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por  2.54e+7";
    }
    if(selectlong2=="milla"){
        valorlong2.value = valorlong1.value / 63360;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 63360";
    }
    if(selectlong2=="yarda"){
        valorlong2.value = valorlong1.value / 36;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 36";
    }
    if(selectlong2=="pie"){
        valorlong2.value = valorlong1.value / 12;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 12";
    }
    if(selectlong2=="pulgada"){
        valorlong2.value = valorlong1.value;
        document.getElementById("parrafo").innerHTML = "El valor de longitud se mantiene igual";
    }
    if(selectlong2=="milla_nautica"){
        valorlong2.value = valorlong1.value / 72913;
        document.getElementById("parrafo").innerHTML = "Divide el valor de longitud entre 72913";
    }
}
if(selectlong1=="milla_nautica"){
    if(selectlong2=="kilometro"){
        valorlong2.value = valorlong1.value * 1.852;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 1.852";
    }
    if(selectlong2=="metro"){
        valorlong2.value = valorlong1.value * 1852;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 1852";
    }
    if(selectlong2=="centimetro"){
        valorlong2.value = valorlong1.value * 185200;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 185200";
    }
    if(selectlong2=="milimetro"){
        valorlong2.value = valorlong1.value * 1.852e+6;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 1.852e+6";
    }
    if(selectlong2=="micrometro"){
        valorlong2.value = valorlong1.value * 1.852e+9;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 1.852e+9";
    }
    if(selectlong2=="nanometro"){
        valorlong2.value = valorlong1.value * 1.852e+12;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 1.852e+12";
    }
    if(selectlong2=="milla"){
        valorlong2.value = valorlong1.value * 1.151;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 1.151";
    }
    if(selectlong2=="yarda"){
        valorlong2.value = valorlong1.value * 2025;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 2025";
    }
    if(selectlong2=="pie"){
        valorlong2.value = valorlong1.value * 6076;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 6076";
    }
    if(selectlong2=="pulgada"){
        valorlong2.value = valorlong1.value * 72913;
        document.getElementById("parrafo").innerHTML = "Multiplica el valor de longitud por 72913";
    }
    if(selectlong2=="milla_nautica"){
        valorlong2.value = valorlong1.value;
        document.getElementById("parrafo").innerHTML = "El valor de longitud se mantiene igual";
    }
}
}
//TEMPERATURA
function cambiarValorT(){
    var valortemp1 = document.getElementById("valor_temp_1");
    var valortemp2 = document.getElementById("valor_temp_2");
    var selectemp1 = document.getElementById("select_temp_1").value;
    var selectemp2 = document.getElementById("select_temp_2").value;

//Conversor de unidades de temperatura
if(selectemp1=="celcius"){
    if(selectemp2=="celcius"){
        valortemp2.value = valortemp1.value;
        document.getElementById("parrafot").innerHTML = "El valor se queda igual";
    }
    if(selectemp2=="fahrenheit"){
        valortemp2.value = ((valortemp1.value)*(9/5))+32;
        document.getElementById("parrafot").innerHTML = "("+valortemp1.value+"°C × 9/5) + 32 = "+valortemp2.value+"°F";
    }
    if(selectemp2=="kelvin"){
        valortemp2.value = ((valortemp1.value)*(1))+273.15;
        document.getElementById("parrafot").innerHTML = valortemp1.value+"°C + 273.15 = "+valortemp2.value+" K";
    }
}
if(selectemp1=="fahrenheit"){
    if(selectemp2=="celcius"){
        valortemp2.value = (((valortemp1.value)*(1))-32)*(5/9);
        document.getElementById("parrafot").innerHTML = "("+valortemp1.value+"°F − 32) × 5/9 = "+valortemp2.value+"°C";
    }
    if(selectemp2=="fahrenheit"){
        valortemp2.value = valortemp1.value;
        document.getElementById("parrafot").innerHTML = "El valor se queda igual";
    }
    if(selectemp2=="kelvin"){
        valortemp2.value = ((((valortemp1.value)*(1))-32)*(5/9))+273.15;
        document.getElementById("parrafot").innerHTML = "("+valortemp1.value+"°F − 32) × 5/9 + 273.15 = "+valortemp2.value+" K";
    }
}
if(selectemp1=="kelvin"){
    if(selectemp2=="celcius"){
        valortemp2.value = ((valortemp1.value)*(1))-273.15;
        document.getElementById("parrafot").innerHTML = valortemp1.value+" K − 273.15 = "+valortemp2.value+"°C";
    }
    if(selectemp2=="fahrenheit"){
        valortemp2.value = ((((valortemp1.value)*(1))-273.15)*(9/5))+32;
        document.getElementById("parrafot").innerHTML = "("+valortemp1.value+" K − 273.15) × 9/5 + 32 = "+valortemp2.value+"°F";
    }
    if(selectemp2=="kelvin"){
        valortemp2.value = valortemp1.value;
        document.getElementById("parrafot").innerHTML = "El valor se queda igual";
    }
}
}
//MASA
function cambiarValorM(){
    var valormasa1 = document.getElementById("valor_masa_1");
    var valormasa2 = document.getElementById("valor_masa_2");
    var selectmasa1 = document.getElementById("select_masa_1").value;
    var selectmasa2 = document.getElementById("select_masa_2").value;

//Conversor de unidades de masa
if(selectmasa1=="kilogramo"){
    if(selectmasa2=="kilogramo"){
        valormasa2.value = valormasa1.value;
        document.getElementById("parrafom").innerHTML = "El valor se queda igual";
    }
    if(selectmasa2=="gramo"){
        valormasa2.value = valormasa1.value * 1000;
        document.getElementById("parrafom").innerHTML = "Multiplica el valor de masa por 1000";
    }
    if(selectmasa2=="miligramo"){
        valormasa2.value = valormasa1.value * 1e+6;
        document.getElementById("parrafom").innerHTML = "Multiplica el valor de masa por 1e+6";
    }
    if(selectmasa2=="libra"){
        valormasa2.value = valormasa1.value * 2.205;
        document.getElementById("parrafom").innerHTML = "Multiplica el valor de masa por 2.205";
    }
}
if(selectmasa1=="gramo"){
    if(selectmasa2=="kilogramo"){
        valormasa2.value = valormasa1.value / 1000;
        document.getElementById("parrafom").innerHTML = "Divide el valor de masa entre 1000";
    }
    if(selectmasa2=="gramo"){
        valormasa2.value = valormasa1.value;
        document.getElementById("parrafom").innerHTML = "El valor se queda igual";
    }
    if(selectmasa2=="miligramo"){
        valormasa2.value = valormasa1.value * 1000;
        document.getElementById("parrafom").innerHTML = "Multiplica el valor de masa por 1000";
    }
    if(selectmasa2=="libra"){
        valormasa2.value = valormasa1.value / 454;
        document.getElementById("parrafom").innerHTML = "Divide el valor de masa entre 454";
    }
}
if(selectmasa1=="miligramo"){
    if(selectmasa2=="kilogramo"){
        valormasa2.value = valormasa1.value / 1e+6;
        document.getElementById("parrafom").innerHTML = "Divide el valor de masa entre 1e+6";
    }
    if(selectmasa2=="gramo"){
        valormasa2.value = valormasa1.value / 1000;
        document.getElementById("parrafom").innerHTML = "Divide el valor de masa entre 1000";
    }
    if(selectmasa2=="miligramo"){
        valormasa2.value = valormasa1.value;
        document.getElementById("parrafom").innerHTML = "El valor se queda igual";
    }
    if(selectmasa2=="libra"){
        valormasa2.value = valormasa1.value / 453592;
        document.getElementById("parrafom").innerHTML = "Divide el valor de masa entre 453592";
    }
}
if(selectmasa1=="libra"){
    if(selectmasa2=="kilogramo"){
        valormasa2.value = valormasa1.value / 2.205;
        document.getElementById("parrafom").innerHTML = "Divide el valor de masa entre 2.205";
    }
    if(selectmasa2=="gramo"){
        valormasa2.value = valormasa1.value * 454;
        document.getElementById("parrafom").innerHTML = "Multiplica el valor de masa por 454";
    }
    if(selectmasa2=="miligramo"){
        valormasa2.value = valormasa1.value * 453592;
        document.getElementById("parrafom").innerHTML = "Multiplica el valor de masa por 453592";
    }
    if(selectmasa2=="libra"){
        valormasa2.value = valormasa1.value;
        document.getElementById("parrafom").innerHTML = "El valor se queda igual";
    }
}
}