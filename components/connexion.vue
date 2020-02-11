<template>
  <div class="h-screen w-full flex justify-center items-center">

    <div class="flex justify-center flex-col relative w-4/5 h-auto rounded shadow-lg overflow-hidden">
      <div class="w-24 absolute top-0 left-0 right-o flex justify-start items-center p-5">
        <img src="../assets/logo.png">
      </div>
      <div class="flex flex-row">
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
                      <p class="text-uptogray font-medium">Ou utiliser votre adresse mail</p>
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
                  placeholder="Mot de passe">
                    <template slot="icon">
                       <div class="text-uptogray m-1">
                         <i class="fas fa-lock "></i>
                      </div>
                    </template>
                  </fields>
                <div class="flex flex-col mb-6 flex-row items-center forgot" >
                     <a class="inline-block align-baseline font-bold text-sm text-uptoblack" :href="pwdLink">
                        Forgot Password ?
                    </a>
                    <span class="bg-uptoblack w-56"></span>
                    <input class="shadow bg-uptoblue border-1 border-uptoblue hover:bg-transparent hover:text-uptoblue focus:shadow-outline focus:outline-none text-white font-bold py-2 px-5 rounded-full cursor-pointer" type="submit" value="Connect">         
                </div>    
              </div>
            </form>
            <div class="bg-uptoblue w-4/12 h-auto flex justify-around items-center flex-col text-center text-white">
              <div>
                <h2 class="font-semibold text-4xl px-3">Bon retour parmi nous !</h2>
                <p class="p-3">Pour rester connecté veuillez 
                  entrer vos informations personnelles</p>
              </div>
              <div class="">
                <p class="p-2">Pas de compte ?</p>
                <button @click="mico()" class="shadow bg-uptoblue border-1 border-white hover:bg-transparent hover:bg-white hover:text-uptoblue focus:outline-none text-white font-bold py-2 px-5 rounded-full cursor-pointer"> s'inscrire
                </button>
              </div>
                
            </div>
        </div>
    </div>
 </div>
</template>

<script>
import fields from '~/components/fields.vue'
export default {
  components: {
    fields
  },
  props: {
      action:{
          type:String,
      },
      pwdLink: {
          type:String
      }, 
      seen:{
        type:Boolean
      }
  },
  data(){
    return{ischecked: this.seen}
  },
  methods : {
     mico: function (){
        this.ischecked = !this.ischecked
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
