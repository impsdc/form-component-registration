<template>
  <div class="h-screen w-full flex justify-center items-center">

    <div class="flex justify-center flex-col relative w-4/5 h-auto rounded shadow-lg overflow-hidden">
      <div class="w-24 absolute top-0 left-0 right-o flex justify-start items-center p-5">
        <img src="../assets/logo.png">
      </div>
      <div class="flex flex-row-reverse">
        <form method="POST" :action="action"  class="w-8/12 p-5">
          <div class="flex justify-center items-center flex-col p-6">
            <slot name="title"></slot>
            <div class="reseaux p-3 flex justify-center items-center flex-row">
              <div class="flex justify-center items-center m-1">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
              </div>
              <div class="flex justify-center items-center m-1">
                <a href="#"><i class="fab fa-google"></i></a>
              </div>
              <div class="flex justify-center items-center m-1">
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div class="text-center pb-3">
              <p class="text-uptogray font-medium">Ou inscrivez-vous avec votre mail</p>
            </div>
            <fields
              type="text"
              name="identifiant"
              placeholder= "Identifiant">
              <template slot="icon">
                <div class="text-uptogray m-1">
                  <i class="fas fa-user"></i>
                </div>
              </template>
            </fields>
            <fields
              type="password"
              name="pwd"
              placeholder="Email">
              <template slot="icon">
                <div class="text-uptogray m-1">
                  <i class="fas fa-envelope"></i>
                </div>
              </template>
            </fields>
            <fields
              type="text"
              name="identifiant"
              placeholder= "Mot de Passe">
              <template slot="icon">
                <div class="text-uptogray m-1">
                  <i class="fas fa-user"></i>
                </div>
              </template>
            </fields>
            <div class="flex flex-col mb-6 flex-row items-center forgot" >
              <span class="bg-uptoblack w-56"></span>
              <nuxt-link to="/admin" class="shadow bg-uptoblue border-1 border-white hover:bg-transparent hover:bg-white hover:text-uptoblue  focus:outline-none text-white font-bold py-2 px-5 rounded-full cursor-pointer">S'inscrire</nuxt-link>
            </div>
          </div>
        </form>

        <div class="bg-uptoblue w-4/12 h-auto flex justify-around items-center flex-col text-center text-white">
          <div class="">
            <h2 class="font-semibold text-4xl pb-6">Bienvenue</h2>
            <p class="p-3">Entrer vos infos personnelles et
              commencer à apprendre dès maintenant !</p>
          </div>
          <div class="h-24 flex flex-col justify-between">
            <p class="p-2 font-bold">Déjà un compte ?</p>
              <button @click="change" class="shadow bg-uptoblue border-1 border-white hover:bg-transparent hover:bg-white hover:text-uptoblue focus:outline-none text-white font-bold py-2 px-5 rounded-full cursor-pointer">Se connecter
              </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import fields from '~/components/fields.vue'
  import register from '~/components/register.vue'
  export default {
    components: {
      fields,
      register
    },
    props: {
      action:{
        type:String,
      },
      pwdLink: {
        type:String
      },
    },
   methods : {
      change: function ()  {
      this.$emit('changePlz')
    }
  }
  }
</script>

<style scoped>
  .reseaux div{
    border: 1px solid #CCCCCC;
    border-radius: 50px;
    width: 31px;
    height: 31px;
  }
  .reseaux div a i {
    color: #000000
  }
  .forgot span{
    height: 0.5px;
    border-radius: 20px;
    margin: 0.5REM 0 1REM 0;
    background: #000000
  }
</style>