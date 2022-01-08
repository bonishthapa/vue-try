<template>
  <div class="addtodos">
      <h3>Add Todos</h3>
      <div class="add">
          <form @click.prevent="onSubmit">
              <input type="text" v-model="title" placeholder="Add todos" />
              <input type="button" value="submit">
          </form>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'Addtodos',
    data(){
        return{
            title:''
        }
    },
    methods:{
        ...mapActions(['addTodos']),
        onSubmit(){
            // e.preventDefauly();
            this.addTodos(this.title);
            console.log("apple",this.title);
        }
    }

}
</script>

<style>

</style>