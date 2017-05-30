import Vue from 'vue'
import App from './App.vue'
import PacientesList from './PacientesList.vue'
import Doctores from './Doctores.vue'
import HorariosDoctores from './HorariosDoctores.vue'
import VueRouter from 'vue-router'
import Agenda from './Agenda.vue'


Vue.use(VueRouter);

const routes = [

  {path: '/pacientes', component: PacientesList},
  {path: '/doctores', component: Doctores},
  {path: '/horarios-doctores', component: HorariosDoctores},
  {path: '/agenda', component: Agenda}

];

const router = new VueRouter ({
  routes,
  mode: 'history'

});

Vue.component('pacientes', PacientesList);
Vue.component('doctores', Doctores);
Vue.component('horarios-doctores', HorariosDoctores);
Vue.component('agenda', Agenda);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
