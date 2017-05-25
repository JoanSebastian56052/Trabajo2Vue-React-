<template>
  <div>
   <full-calendar :events="mostrarEventos"  v-on:eventClick="eventoSeleccionado" locale="zh"></full-calendar>
  </div>
</template>

<script>
import moment from 'moment'
import fullCalendar from 'vue-fullcalendar'
import eventos from './eventos'

/*var eventos=[
  {
    title: 'cita1',
    start: '2017-05-12',
    end: '2017-05-13'
  }
]
*/



export default {
  name: 'hello',
  data () {
    return {
      mostrarEventos: eventos
    }
  },

  components:{
    fullCalendar

  },
  methods:{
    eventoSeleccionado(day ,jsEvent){
      console.log(day.title)
      console.log(moment(day).format("MM-DD-YYYY"))
      moment(day).format("MM-DD-YYYY")
      
      alert("Paciente  "+ day.title + "                 " + moment(day).format("MM-DD-YYYY") +" " + day.start
      + " " + day.end + " Descripcion " + day.desc)

    }

  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
