<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Smile-Fresh</h1>
    <h2>Menú</h2>
    <ul>
      <li><router-link to ="/pacientes">Pacientes</router-link></li>
      <li><router-link to ="/doctores">Doctores</router-link></li>
      <li><router-link to ="/horarios-doctores">Horarios Doctores</router-link></li>
      <li><router-link to ="/agenda">Agendar Cita</router-link></li>
    </ul>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
