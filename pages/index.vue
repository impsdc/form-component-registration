<template>

    <div class="flex flex-col items-center justify-around">
      
      <connexion v-if="seen"
      :seen="seen"
      action="admin/"
      pwdLink="admin/"
      >
        <template slot="title">
          <h1 class="text-4xl font-semibold text-center text-uptoblue">Connexion Up2You</h1>
        </template>
      </connexion>

      <register v-else
      action="admin/"
      pwdLink="admin/"
      >
      <template slot="title">
          <h1 class="text-4xl font-semibold text-center text-uptoblue">Inscription Up2You</h1>
      </template>
      </register>

  </div>
</template>

<script>
  import Vue from 'vue';
  import connexion from '~/components/connexion.vue';
  import register from '~/components/register.vue';
  export default Vue.extend({
  components: {
    connexion, 
    register
  },
  props: {
      seen:{type:Boolean, default: true}
  },
  data(){
    return{
      
    }
  }
     
  })

</script>

