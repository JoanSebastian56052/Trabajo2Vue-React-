<template>
<div class="container">

  <table class="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Dirección</th>
            <th>Telefono</th>
            <th>Ocupación</th>
            <th>Fecha de Nacimiento</th>
            <th>Edad</th>
            <th>Género</th>
          </tr>
        </thead>
         <tbody class="text-left" >
        <tr v-for="paciente in listaPacientes">
          <td >{{paciente.id}}</td>
          <td >{{paciente.nombre}}</td>
          <td >{{paciente.apellido}}</td>
          <td >{{paciente.direccion}}</td>
          <td >{{paciente.telefono}}</td>
          <td >{{paciente.ocupacion}}</td>
          <td >{{paciente.fechaNacimiento}}</td>
          <td >{{paciente.edad}}</td>
          <td >{{paciente.genero}}</td>
        </tr>
      </tbody>
    </table>

    <button href="#modal1" data-toggle="modal">Nuevo Paciente</button>

    <div class="modal fade" id="modal1">
       <div class="modal-dialog">
         <div class="modal-content">
           <div class="modal-header">
             <button type="button" class="close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span>
                    <span class="sr-only">Close</span>
             </button>
             <h4 class="modal-title" style="font-family: 'Times New Roman';font-size: 40px;" >Ingresar Nuevo Paciente</h4>

           </div>

           <div class="modal-body">
              <h5 class="text-left" style="font-family: 'Times New Roman';font-size: 20px;">Ingrese la siguiente información referente al registro de un nuevo Paciente.</h5>


              <form role="form" id="myForm" >
                <div class="form-group">
                  <label for="entradaNombres">Nombres</label>
                  <input type="nombres" class="form-control"
                  id="entradaNombres" placeholder="Ingrese los Nombres" v-model="nuevoNombre" />
                </div>
                <div class="form-group">
                  <label for="entradaApellidos">Apellidos</label>
                  <input type="apellidos" class="form-control"
                  id="entradaApellidos" placeholder="Ingrese los Apellidos" v-model="nuevoApellido"/>
                </div>
                <div class="form-group">
                  <label for="entradaEmail">Email</label>
                  <input type="email" class="form-control"
                  id="entradaEmail" placeholder="Ingrese el Email" v-model="nuevoEmail"/>
                </div>

                <div class="form-group">
                  <label for="entradaNombres">Direccion</label>
                  <input type="direccion" class="form-control"
                  id="entradaDireccion" placeholder="Ingrese la direccion de contacto" v-model="nuevoDireccion"/>
                </div>

                <div class="form-group">
                  <label for="entradaTelefono">Telefono</label>
                  <input type="telefono" class="form-control"
                  id="entradaTelefono" placeholder="Ingrese el telefono" v-model="nuevoTelefono"/>
                </div>

                <div class="form-group">
                  <label for="entradaOcupacion">Ocupacion</label>
                  <input type="ocupacion" class="form-control"
                  id="entradaOcupacion" placeholder="Ingrese la ocupación" v-model="nuevoOcupacion"/>
                </div>

                <div class="form-group">
                  <label for="entradaFechNacimi">Fecha de Nacimiento</label>
                  <input type="fechadenacimiento" class="form-control"
                  id="entradaFechNacimi" placeholder="(dd/mm/aaaa)" v-model="nuevoFechaNacimiento"/>
                </div>

                <div class="form-group">
                  <label for="entradaEdad">Edad</label>
                  <input type="edad" class="form-control"
                  id="entradaEdad" placeholder="Ingrese la edad" v-model="nuevoEdad"/>
                </div>

                <div class="form-group">
                  <label for="entradaGenero">Genero</label>
                  <input type="genero" class="form-control"
                  id="entradaGenero" placeholder="M ó F" v-model="nuevoGenero"/>
                </div>


                <input type="reset" value="Limpiar Campos" class="btn btn-primary black-background white" >


              </form>

           </div>
           <div class="modal-footer">

             <button type="button" class="btn btn-primary black-background white" data-dismiss="modal">Cerrar</button>
             <button @click="agregarPaciente()" class="btn btn-primary black-background white"> Aceptar</button>


           </div>
         </div>
       </div>
  </div>


</div>


</template>

<script>
export default {
name:'pacientes-list',
data(){
  return {
    texto: 'Página Pacientes list',
      listaPacientes:[
        {id: '1', nombre: 'Diego', apellido:'Mazo', email: 'diegomazo@gmail.com', direccion: 'Carrera 56', telefono: '31278977', ocupacion: 'Ingeniero', fechaNacimiento: '04/12/1995', edad:'21', genero: 'M'},
        {id: '2', nombre: 'Sergio', apellido:'Giraldo', email: 'sergiogiraldo@gmail.com', direccion: 'Carrera 77', telefono: '31278557',ocupacion: 'Ingeniero', fechaNacimiento: '08/02/1993', edad:'23', genero: 'M'},
        {id: '3', nombre: 'Andrea', apellido:'Gonzalez', email: 'andreaGonzalez@gmail.com', direccion: 'Carrera 77', telefono: '32278977', ocupacion: 'Arquitecta', fechaNacimiento: '04/12/1995', edad:'19', genero: 'F'},
        {id: '4', nombre: 'Luisa', apellido:'Mazo', email: 'luisamazo@gmail.com', direccion: 'Carrera 47', telefono: '32278976', ocupacion: 'Actriz',fechaNacimiento: '04/12/1995', edad:'19', genero: 'F'},
        {id: '5', nombre: 'Jorge', apellido:'Díaz', email: 'jorgediaz@gmail.com', direccion: 'Carrera 73', telefono: '30268977', ocupacion: 'Filosofo', fechaNacimiento: '04/12/1995', edad:'19', genero: 'M'}
      ],
       nuevoNombre:'',
       nuevoApellido:'',
       nuevoEmail:'',
       nuevoDireccion:'',
       nuevoTelefono:'',
       nuevoOcupacion: '',
       nuevoFechaNacimiento:'',
       nuevoEdad: '',
       nuevoGenero: '',
       listaIndexEliminar : []
  }
},
methods: {

  agregarPaciente(){

      if(this.nuevoNombre  == "" || this.nuevoApellido == "" || this.nuevoEmail == "" || this.nuevoDireccion == "" || this.nuevoTelefono == "" || this.nuevoFechaNacimiento == "this.nuevoEdad" || this.nuevoGenero == ""){

        alert("Por favor rellene todos los campos");

      }else {
        var element = {};

        element.nombre = this.nuevoNombre;
        element.apellido = this.nuevoApellido ;
        element.email = this.nuevoEmail;
        element.direccion = this.nuevoDireccion;
        element.telefono = this.nuevoTelefono;
        element.ocupacion = this.nuevoOcupacion;
        element.fechaNacimiento = this.nuevoFechaNacimiento;
        element.edad = this.nuevoEdad;
        element.genero = this.nuevoGenero;
        element.id = (this.listaPacientes.length + 1);
        this.listaPacientes.push(element);

        element = null;

        $('#modal1').modal('hide');
      }
    }
 }
}
</script>
