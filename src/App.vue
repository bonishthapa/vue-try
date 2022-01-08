<template>
  <div id="app">
    <Addtodos />
    <Todos />
    <router-view/>
  </div>
</template>

<script>
import Todos from '@/components/Todos.vue'
import Addtodos from '@/components/Addtodos.vue'

export default {
  components: {
    Todos,
    Addtodos
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
