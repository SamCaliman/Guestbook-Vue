<template>
  <body class="bg-gray-200">
      <form action="" class="px-4 my-32 max-w3xl mx-auto space-y-2">
          <div >
              <h1 class="text-3xl font-semibold text-center">Guestbook</h1>
          </div>
          <div class="w-1/2">
              <label for="nm">Nome:</label>
              <input name="nm" type="text" placeholder="Nome" v-model="Nuser.nome_usuario" class="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500">
          </div>
          <div class="w-1/2">
              <label for="msg">Mensagem:</label>
              <input name="msg" type="text" placeholder="Mensagem" v-model="Nuser.comentario" class="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500">
          </div>            
          <div>
              <button @click="send()" class="bg-gray-600 px-2 border rounded text-gray-200">postar</button>
          </div>
          <br>
          <div v-for="u in res" class="bg-gray-300 p-2 rounded w-1/2">
                <p>Usuário: {{u.nome_usuario}}</p>
                <p>Comentario: {{u.comentario}}</p>
                <p>Postado em: {{ u.createdAt }}</p>
          </div>
      </form>
  </body>

</template>

<script setup lang="ts">
import {reactive, ref,onMounted} from 'vue'

type user ={
  nome_usuario:string
  comentario:string
}
    

    const res = ref<user[]>([])

    async function getPosts(){
                const resultado = await fetch("http://localhost:3333/user")
                const comentario = await resultado.json()
                console.log(comentario)
                res.value = comentario
    }
    const Nuser = reactive( {
        nome_usuario: "",
        comentario: ""
    })
    async function send() {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                },
            body: JSON.stringify(Nuser),
        }    
        const response = await fetch("http://localhost:3333/user", options)
    }
    onMounted(async ()=>{
    getPosts()
    })
</script>


<style>

</style>
