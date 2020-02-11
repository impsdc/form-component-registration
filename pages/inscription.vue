<template>
  <div class="flex flex-col items-center justify-around">
    
    <register
    action="admin/"
    pwdLink="admin/"
    >
      <template slot="title">
        <h1 class="text-4xl font-semibold text-center text-uptoblue">Connexion a Up2You</h1>
      </template>
    </register>

 </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import register from '~/components/register.vue';
  export default Vue.extend({
  components: {
    register

  },
  props: {
  },
  data() {
    return {
 
    }
  },
  })

</script>

