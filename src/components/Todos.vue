<template>
  <div class="todos">
      <div class="todo" v-for="todo in allTodos" :key="todo.id">
          {{todo.title}}
          <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
      </div>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'

export default {
    name: 'Todos',
    methods:{
        ...mapActions(['fetchTodos','deleteTodo'])
    },
    computed:mapGetters(['allTodos']),
    created(){
        this.fetchTodos()
    }

}
</script>

<style>
.todos{
    display: grid;
    grid-template-columns:repeat(3,1fr);
    grid-gap: 1rem;
}
.todo{
    border: 1pz solid #ccc;
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    /* cursor: pointer; */
}
i{
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #fff;
    cursor: pointer;
}
</style>