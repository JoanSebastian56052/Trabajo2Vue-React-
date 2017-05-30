<template>
  <div>
   <full-calendar :events="mostrarEventos"  v-on:dayClick="diaSeleccionado" v-on:eventClick="eventoSeleccionado" locale="zh"></full-calendar>



   <div class="modal fade" id="modal2" style="font-family: 'Times New Roman';font-size: 20px;">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                       <span aria-hidden="true">&times;</span>
                       <span class="sr-only">Close</span>
                </button>
                <h4 class="modal-title" style="font-family: 'Times New Roman';font-size: 40px;">Agendar Cita</h4>

              </div>

              <div class="modal-body">
                 <h5 class="text-left" style="font-family: 'Times New Roman';font-size: 20px;" >Ingrese la siguiente informacion para el registro de una nueva cita.</h5>


                  <form role="form" id="myForm" style="font-family: 'Times New Roman';font-size: 20px;">
                  <div class="form-group">
                    <label for="cedulaUsuario">Usuario</label>
                      <select class="form-control" name="" v-model="paciente" style="font-family: 'Times New Roman';font-size: 20px;">
                        <option v-for="paciente in pacientes" v-bind:value="paciente.id">{{paciente.nombre +" "+paciente.apellido}}</option>
                      </select>
                  </div>
                  <div class="form-group">
                    <label for="entradaApellidos">Doctores disponbles</label>

                      <table class="table table-striped">
                      <thead>
                      <tr>
                      <th>Nombre</th>
                      <th>Apellido</th>
                      <th>Día</th>
                      <th>Entrada</th>
                      <th>Salida</th>
                      <th>Seleccionar</th>

                   </tr>
                    </thead>
                 <tbody class="text-left" >
                   <tr v-for="medico in listaDisponibles" style="font-family: 'Times New Roman';font-size: 15px;">

                   <!-- <p>{{dayf}}</p> -->
                  <td >{{medico.nombre}}</td>
                  <td >{{medico.apellido}}</td>
                  <td >{{medico.dia}}</td>
                  <td >{{medico.entrada}}</td>
                  <td >{{medico.salida }}</td>
                  <td ><input v-on:click="seleccionarCita(medico)" type="checkbox" v-bind:checked="citaSeleccionada!=''" name="seleccionar"></td>

                </tr>


                </tbody>
                  </table>
                  <div v-show="citaSeleccionada" class="form-group">
                    <label>Ingrese el costo de la cita</label>
                    <input type="number" v-model="valorCita" name="" class="form-control" value="" style="font-size:30px">
                  </div>
                  </div>



                </form>

              </div>



              <div class="modal-footer">

                <button type="button" class="btn btn-primary black-background white"
                        data-dismiss="modal" style="font-family: 'Times New Roman';font-size: 20px;">
                            Cerrar
                </button>
                <button @click="addCita" class="btn btn-primary black-background white" style="font-family: 'Times New Roman';font-size: 20px;">

                             Aceptar
                </button>


              </div>
            </div>
          </div>
     </div>

  </div>


</template>

<script>
import moment from 'moment'
import fullCalendar from 'vue-fullcalendar'
import eventos from './eventos'





export default {
  name: 'hello',
  data () {
    return {
      mostrarEventos: eventos,
      pacientes:[
        {id: '1', nombre: 'Diego', apellido:'Mazo', email: 'diegomazo@gmail.com', direccion: 'Carrera 56', telefono: '31278977', ocupacion: 'Ingeniero', fechaNacimiento: '04/12/1995', edad:'21', genero: 'M'},
        {id: '2', nombre: 'Sergio', apellido:'Giraldo', email: 'sergiogiraldo@gmail.com', direccion: 'Carrera 77', telefono: '31278557',ocupacion: 'Ingeniero', fechaNacimiento: '08/02/1993', edad:'23', genero: 'M'},
        {id: '3', nombre: 'Andrea', apellido:'Gonzalez', email: 'andreaGonzalez@gmail.com', direccion: 'Carrera 77', telefono: '32278977', ocupacion: 'Arquitecta', fechaNacimiento: '04/12/1995', edad:'19', genero: 'F'},
        {id: '4', nombre: 'Luisa', apellido:'Mazo', email: 'luisamazo@gmail.com', direccion: 'Carrera 47', telefono: '32278976', ocupacion: 'Actriz',fechaNacimiento: '04/12/1995', edad:'19', genero: 'F'},
        {id: '5', nombre: 'Jorge', apellido:'Díaz', email: 'jorgediaz@gmail.com', direccion: 'Carrera 73', telefono: '30268977', ocupacion: 'Filosofo', fechaNacimiento: '04/12/1995', edad:'19', genero: 'M'}
      ],
      listaHorarios:[
        {diaNumero: '1', nombre: 'Diego', apellido:'Mazo', email: 'diegomazo@gmail.com', dia: 'Lunes', entrada: '8:00 am', salida: '8:30 am'},
        {diaNumero: '2', nombre: 'Diego', apellido:'Mazo', email: 'diegomazo@gmail.com', dia: 'Martes', entrada: '9:00 am', salida: '9:30 am'},
        {diaNumero: '3', nombre: 'Diego', apellido:'Mazo', email: 'diegomazo@gmail.com', dia: 'Miercoles', entrada: '10:00 am', salida: '10:30 am'},
        {diaNumero: '4', nombre: 'Sergio', apellido:'Giraldo', email: 'sergiogiraldo@gmail.com', dia: 'Jueves', entrada: '10:00 am', salida: '10:30 am'},
        {diaNumero: '5', nombre: 'Sergio', apellido:'Giraldo', email: 'sergiogiraldo@gmail.com', dia: 'Viernes', entrada: '11:00 am', salida: '11:30 am'},
        {diaNumero: '6', nombre: 'Sergio', apellido:'Giraldo', email: 'sergiogiraldo@gmail.com', dia: 'Sábado', entrada: '12:00 pm', salida: '12:30 pm'},
        {diaNumero: '1', nombre: 'Andrea', apellido:'Gonzalez', email: 'andreaGonzalez@gmail.com', dia: 'Lunes', entrada: '1:00 pm', salida: '1:30 pm'},
        {diaNumero: '2', nombre: 'Andrea', apellido:'Gonzalez', email: 'andreaGonzalez@gmail.com', dia: 'Martes', entrada: '2:00 pm', salida: '2:30 pm'},
        {diaNumero: '3', nombre: 'Andrea', apellido:'Gonzalez', email: 'andreaGonzalez@gmail.com', dia: 'Miercoles', entrada: '3:00 pm', salida: '3:30 pm'},
        {diaNumero: '4', nombre: 'Luisa', apellido:'Mazo', email: 'luisamazo@gmail.com', dia: 'Jueves', entrada: '4:00 pm', salida: '4:30 pm'},
        {diaNumero: '5', nombre: 'Luisa', apellido:'Mazo', email: 'luisamazo@gmail.com', dia: 'Viernes', entrada: '5:00 pm', salida: '5:30 pm'},
        {diaNumero: '6', nombre: 'Luisa', apellido:'Mazo', email: 'luisamazo@gmail.com', dia: 'Sábado', entrada: '6:00 pm', salida: '6:30 pm'},
        {diaNumero: '6', nombre: 'Jorge', apellido:'Díaz', email: 'jorgediaz@gmail.com', dia: 'Sábado', entrada: '6:00 pm', salida: '6:30 pm'},
        {diaNumero: '0', nombre: 'Jorge', apellido:'Díaz', email: 'jorgediaz@gmail.com', dia: 'Domingo', entrada: '6:00 pm', salida: '6:30 pm'},
        {diaNumero: '1', nombre: 'Jorge', apellido:'Díaz', email: 'jorgediaz@gmail.com', dia: 'Lunes', entrada: '6:00 pm', salida: '6:30 pm'}
      ],
      listaDisponibles: [],
      diaSemanaSeleccionado: "",
      valorCita: "",
      citaSeleccionada: ""
    }
  },

  components:{
    fullCalendar

  },
  methods:{
    eventoSeleccionado(day ,jsEvent){
      console.log(day.title);
      console.log(moment(day).format("MM-DD-YYYY"));
      moment(day).format("MM-DD-YYYY");

      alert("Paciente  "+ day.title + "                 " + moment(day).format("MM-DD-YYYY") +" " + day.start
      + " " + day.end + " Descripcion " + day.desc);

    },
    diaSeleccionado(day, jsEvent){

      this.diaSemanaSeleccionado = day.getDay();

      for (var i = 0; i < this.listaHorarios.length; i++) {

        if (this.diaSemanaSeleccionado == this.listaHorarios[i].diaNumero) {

          this.listaDisponibles.push(this.listaHorarios[i]);
          console.log(this.listaDisponibles.length);

        }

      }

      console.log(moment(day).format("MM-DD-YYYY"));
      console.log(this.diaSemanaSeleccionado);
      console.log(this.listaDisponibles.length);
      $('#modal2').modal();

      this.diaSemanaSeleccionado = "";
      //this.listaDisponibles = "";


    },
    seleccionarCita(medico){

      alert("seleccionado");

    },
    addCita(){


      alert("addCitaSeleccionado");
    }

  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
