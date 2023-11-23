<template>
  <body class="bg-gray-200">
      <form action="" class="px-4 my-32 max-w3xl mx-auto space-y-2">
          <div >
              <h1 class="text-3xl font-semibold text-center">Guestbook</h1>
          </div>
          <div class="w-1/2">
              <label for="nm">Nome:</label>
              <input name="nm" type="text" placeholder="Nome" v-model="name" class="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500">
          </div>
          <div class="w-1/2">
              <label for="msg">Mensagem:</label>
              <input name="msg" type="text" placeholder="Mensagem" v-model="message" class="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500">
          </div>            
          <div>
              <button @click="submitForm" class="bg-gray-600 px-2 border rounded text-gray-200">postar</button>
          </div>
          <br>
          <div v-for="u in user">
                <p>{{u.nome_usuario}}</p>
                <p>{{u.comentario}}</p>
          </div>
      </form>
  </body>

</template>
<script>
import {ref} from 'vue'
/*
type user ={
  nome_usuario:string
  comentario:string
}
*/
    export default{
        /*
        setup (){
          const name = ref('')
            
          const submitForm = () => {
              console.log(`Form submitted! Name = ${name.value}`)
          }
          return {
              name,
              submitForm,
          }*/
        data(){
            return{
                user:[]
            }
        }
        methods:{
            getPosts(){
                fetch("http://localhost:3333/user")
                .then(res => res.json())
                .then(data => this.user = data)
                .catch(err => console.log(err.message))
            }
        }
        mounted(){
            this.getPosts()
        }
          
      }
  
</script>
<style>

</style>
