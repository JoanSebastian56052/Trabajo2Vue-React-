<template>
<div class="container">

  <table class="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Día</th>
            <th>Entrada</th>
            <th>Salida</th>
          </tr>
        </thead>
         <tbody class="text-left" >
        <tr v-for="horario in listaHorarios">
          <td >{{horario.nombre}}</td>
          <td >{{horario.apellido}}</td>
          <td >{{horario.email}}</td>
          <td >{{horario.dia}}</td>
          <td >{{horario.entrada}}</td>
          <td >{{horario.salida}}</td>
          <td ></td>
        </tr>
      </tbody>
    </table>
</div>


</template>

<script>
export default {
name:'horarios-list',
data(){
  return {
    texto: 'Página Horarios Médicos',
      listaHorarios:[
        {nombre: 'Diego', apellido:'Mazo', email: 'diegomazo@gmail.com', dia: 'Lunes', entrada: '8:00 am', salida: '8:30 am'},
        {nombre: 'Diego', apellido:'Mazo', email: 'diegomazo@gmail.com', dia: 'Martes', entrada: '9:00 am', salida: '9:30 am'},
        {nombre: 'Diego', apellido:'Mazo', email: 'diegomazo@gmail.com', dia: 'Miercoles', entrada: '10:00 am', salida: '10:30 am'},
        {nombre: 'Sergio', apellido:'Giraldo', email: 'sergiogiraldo@gmail.com', dia: 'Jueves', entrada: '10:00 am', salida: '10:30 am'},
        {nombre: 'Sergio', apellido:'Giraldo', email: 'sergiogiraldo@gmail.com', dia: 'Viernes', entrada: '11:00 am', salida: '11:30 am'},
        {nombre: 'Sergio', apellido:'Giraldo', email: 'sergiogiraldo@gmail.com', dia: 'Sábado', entrada: '12:00 pm', salida: '12:30 pm'},
        {nombre: 'Andrea', apellido:'Gonzalez', email: 'andreaGonzalez@gmail.com', dia: 'Lunes', entrada: '1:00 pm', salida: '1:30 pm'},
        {nombre: 'Andrea', apellido:'Gonzalez', email: 'andreaGonzalez@gmail.com', dia: 'Martes', entrada: '2:00 pm', salida: '2:30 pm'},
        {nombre: 'Andrea', apellido:'Gonzalez', email: 'andreaGonzalez@gmail.com', dia: 'Miercoles', entrada: '3:00 pm', salida: '3:30 pm'},
        {nombre: 'Luisa', apellido:'Mazo', email: 'luisamazo@gmail.com', dia: 'Jueves', entrada: '4:00 pm', salida: '4:30 pm'},
        {nombre: 'Luisa', apellido:'Mazo', email: 'luisamazo@gmail.com', dia: 'Viernes', entrada: '5:00 pm', salida: '5:30 pm'},
        {nombre: 'Luisa', apellido:'Mazo', email: 'luisamazo@gmail.com', dia: 'Sábado', entrada: '6:00 pm', salida: '6:30 pm'},
        {nombre: 'Jorge', apellido:'Díaz', email: 'jorgediaz@gmail.com', dia: 'Sábado', entrada: '6:00 pm', salida: '6:30 pm'},
        {nombre: 'Jorge', apellido:'Díaz', email: 'jorgediaz@gmail.com', dia: 'Domingo', entrada: '6:00 pm', salida: '6:30 pm'},
        {nombre: 'Jorge', apellido:'Díaz', email: 'jorgediaz@gmail.com', dia: 'Lunes', entrada: '6:00 pm', salida: '6:30 pm'}
      ]
    }
  }
 }
</script>
