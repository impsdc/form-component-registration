<template>
  <div class="flex flex-col items-center justify-around">
    
    <connexion
    action="#"
    pwdLink="#"
    >
      <template slot="title">
        <h1 class="text-4xl font-semibold text-center text-uptoblue">Connexion à Up2You</h1>
      </template>
    </connexion>
    <!-- <nuxt-link to="lecons">LECONS</nuxt-link> -->
 </div>
</template>

<script lang="ts">

import connexion from '~/components/connexion.vue'


export default {
  components: {
    connexion

  },
  props: {
  },
  data() {
    return {
 
    }
  },
}

</script>

<style>

</style>
