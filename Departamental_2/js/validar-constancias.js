var idSeleccionarConstanciaRecuperar = 0;
//Controlador
//alert("hola");
function actionRead(){
    $.ajax({
        url: "../php/validar-constancias.php",
        type: 'GET',
        data: {
          accion: 'read'
        },
        success: function( respuesta ) {
            var objetoJSON = JSON.parse(respuesta);
            if(objetoJSON.estado==1){
                var tabla = $('#dataTable').DataTable();

                for(constancia of objetoJSON.constancias){
                    var botones = '<button type="button" class="btn btn-warning mb-1 col-md-12"data-toggle="modal" data-target=".modal-validar" onclick="accionRecuperarUnaConstancia('+constancia.id+');"><i class="ti-view-list"></i><i class="ti-check"></i></button>';

                    tabla.row.add( [
                        constancia.programa,
                        constancia.nombre,
                        constancia.actividad,
                        constancia.horas,
                        botones
                    ] ).node().id = 'row_'+constancia.id;
                    tabla.draw( false );
                }
            }
        }
    });
}

function accionRecuperarUnaConstancia(id){
    idSeleccionarConstanciaRecuperar = id;
    $.ajax({
        url: "../php/validar-constancias.php",
        type: 'GET',
        data: {
          id: idSeleccionarConstanciaRecuperar,
          accion: 'read'
        },
        success: function( respuesta ) {
            //alert(respuesta);
            var objetoJSON = JSON.parse(respuesta);
            if(objetoJSON.estado==1){   
                document.getElementById("nombre_validar").innerHTML     = objetoJSON.nombre;
                document.getElementById("actividad_validar").value      = objetoJSON.actividad;
                document.getElementById("fecha_inicio_validar").value   = objetoJSON.fecha_inicio;
                document.getElementById("fecha_fin_validar").value      = objetoJSON.fecha_fin;
                document.getElementById("horas_validar").value          = objetoJSON.horas;
                document.getElementById("observaciones_validar").value  = objetoJSON.observaciones;
            }
            else{
                alert(objetoJSON.mensaje);
            }
        }
    });
}

function accionValidarConstancia(){
    var constancia_valida               = document.getElementById("constancia_valida").value;
    var observaciones_encargado_validar = document.getElementById("observaciones_encargado").value;

    $.ajax({
        url: "../php/validar-constancias.php",
        method: "POST",
        data: {
          id: idSeleccionarConstanciaRecuperar,
          valida: constancia_valida,
          observaciones_encargado: observaciones_encargado_validar,
          accion: 'update'
        },
        success: function( respuesta ) {
            //alert(respuesta);
            var objetoJSON = JSON.parse(respuesta);
            if(objetoJSON.estado==1){
                alert(objetoJSON.mensaje);
                $('#modal-validar').modal('hide');
                var tabla = $('#dataTable').DataTable();
                tabla.row("#row_"+idSeleccionarConstanciaRecuperar).remove().draw();
            }
            else{
                alert(objetoJSON.mensaje);
            }
        }
    });
}