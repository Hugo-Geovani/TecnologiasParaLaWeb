var idSeleccionadoParaActualizar=0;
var idSeleccionadoParaEliminar=0;

//Controlador
function actionCreate() {
    var tabla = $('#dataTable').DataTable();
    var eje_tematico_create = document.getElementById("eje_tematico_create").value;
    var modalidad_create = document.getElementById("modalidad_create").value;
    var descripcion_create = document.getElementById("descripcion_create").value;
    var factor_create = document.getElementById("factor_create").value;
    var ejemplos_create = document.getElementById("ejemplos_create").value;
    //MODELO DE DATOS
    //GUADAR INFO EN BASE DE DATOS => $ = jquery
    $.ajax({
        url: "../php/crud-denominacion.php",
        type: 'POST',
        data: {
          eje_tematico: eje_tematico_create,
          modalidad: modalidad_create,
          descripcion: descripcion_create,
          factor: factor_create,
          ejemplos: ejemplos_create,
          accion: 'create',
        },
        success: function( respuesta ) {

          var objetoJSON = JSON.parse(respuesta);

          if(objetoJSON.estado==1){
            //Mostrar en la tabla los datos
            var Botones = '<button type="button" class="btn btn-primary mb-1"data-toggle="modal" data-target=".modal-actualizar" onclick="recuperaRegistroActualizar('+objetoJSON.id+');"><i class="ti-pencil"></i> Editar </button>';
            Botones = Botones+' <button type="button" class="btn btn-danger mb-1" data-toggle="modal" data-target=".bd-example-modal-sm" onclick="identificaEliminar('+objetoJSON.id+');"><i class="ti-trash"></i> Eliminar </button>';
            ///////////
            tabla.row.add( [
                eje_tematico_create,
                modalidad_create,
                descripcion_create,
                Botones
            ] ).draw( false );

            alert(objetoJSON.mensaje);

            $('#modal-lg').modal('hide');
          }
          else{
            alert(objetoJSON.mensaje);
          }
        }
      });
}
function actionRead() {
  //GET
  $.ajax({
    url: "../php/crud-denominacion.php",
    type: 'GET',
    data: {
      accion: 'read'
    },
    success: function( respuesta ) {
      var objetoJSON = JSON.parse(respuesta);
      if(objetoJSON.estado==1){
        var tabla = $('#dataTable').DataTable();
        // Procesar todos los registros que me esta regresando
        for(denominacion of objetoJSON.denominaciones){
          //Mostrar en la tabla los datos
          var Botones = '<button type="button" class="btn btn-primary mb-1"data-toggle="modal" data-target=".modal-actualizar" onclick="recuperaRegistroActualizar('+denominacion.id+');"><i class="ti-pencil"></i> Editar </button>';
          Botones = Botones+' <button type="button" class="btn btn-danger mb-1" data-toggle="modal" data-target=".bd-example-modal-sm" onclick="identificaEliminar('+denominacion.id+');"><i class="ti-trash"></i> Eliminar </button>';
          ///////////
          tabla.row.add( [
              denominacion.eje_tematico,
              denominacion.modalidad,
              denominacion.descripcion,
              Botones
          ] ).node().id = 'row_'+denominacion.id;
          tabla.draw( false );
        }       
      }
    }
  });
}

function actionUpdate() {
  //PUT
  var eje_tematico_actualizar = document.getElementById("eje_tematico_actualizar").value;
  var modalidad_actualizar    = document.getElementById("modalidad_actualizar").value;
  var descripcion_actualizar  = document.getElementById("descripcion_actualizar").value;
  var factor_actualizar       = document.getElementById("factor_actualizar").value;
  var ejemplos_actualizar     = document.getElementById("ejemplos_actualizar").value;

  $.ajax({
    url: "../php/crud-denominacion.php",
    method: 'POST',
    data: {
      id           : idSeleccionadoParaActualizar,
      eje_tematico : eje_tematico_actualizar,
      modalidad    : modalidad_actualizar,
      descripcion  : descripcion_actualizar,
      factor       : factor_actualizar,
      ejemplos     : ejemplos_actualizar,
      accion       : 'update'
    },
    success: function (resultado){
      //Si todo Ok
      alert(resultado);
    }
  });
  alert("Actualizar registro update");
}

function recuperaRegistroActualizar(id){
  alert(id);
  idSeleccionadoParaActualizar=id;
  $.ajax({
    url: "../php/crud-denominacion.php",
    method: 'GET',
    data: {
      id: idSeleccionadoParaActualizar,
      accion: 'read'
    },
    success: function( resultado ) {
      var objetoJSON = JSON.parse(resultado);
      if(objetoJSON.estado==1){
        document.getElementById("eje_tematico_actualizar").value = objetoJSON.eje_tematico;
        document.getElementById("modalidad_actualizar").value = objetoJSON.modalidad;
        document.getElementById("descripcion_actualizar").value = objetoJSON.descripcion;
        document.getElementById("factor_actualizar").value = objetoJSON.factor;
        document.getElementById("ejemplos_actualizar").value = objetoJSON.ejemplos;
      }
      else{
        alert(objetoJSON.mensaje);
      }
    }
  });
}

function actionDelete() {
  $.ajax({
    url: "../php/crud-denominacion.php",
    type: 'POST',
    data: {
      id: idSeleccionadoParaEliminar,
      accion: 'delete'
    },
  success: function(resultado){
    var objetoJSON = JSON.parse(resultado);
    if(objetoJSON.estado==1){
      //Quitar el registro eliminado
      var tabla = $('#dataTable').DataTable();
      tabla.row("#row_"+idSeleccionadoParaEliminar).remove().draw();

      alert(objetoJSON.mensaje);
      $('#modal-default').modal('hide');
    }
    else{
      alert(objetoJSON.mensaje);
    }
  }
  });
}

function identificaEliminar(id){
  //alert("El id del registro a eliminar es "+id);
  idSeleccionadoParaEliminar=id;
}

