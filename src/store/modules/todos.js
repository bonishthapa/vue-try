import axios from 'axios';

// import axios from "axios";

const state ={
    todos:[]
};

const getters={
    allTodos:state=>state.todos
};

const actions={
    async fetchTodos({commit}){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        commit('setTodos',response.data);
    },
    async addTodos({commit},title){
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts',{
            title
        });
        commit('newTodos',response.data)
    },
    async deleteTodo({commit},id){
        console.log("delete",id);
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        commit('removeTodo',id)
    }
};

const mutations={
    setTodos:(state,todos)=>(state.todos=todos),
    newTodos:(state,todos)=>(state.todos.unshift(todos)),
    removeTodo:(state,id)=>state.todos=state.todos.filter(todo=>todo.id !== id)
};

export default{
    state,
    getters,
    actions,
    mutations
}