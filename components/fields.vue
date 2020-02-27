<template>
<div class="md:flex md:items-center mb-6">
       <div class="w-auto flex justify-center items-center flex-row">
          <slot name="icon" class="icon"></slot>
           <input :type="type" :name="name" :id="name" :placeholder="placeholder"
           class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-uptoblue" autocomplete="on">
       </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name:'formulaire', 
  props: {
    type: String,
    name:String,
    placeholder:String
  },
  data() {
    return {
    }
  },
})

</script>

<style>
.icone{
  margin: 5px
}
.icone i{
  color: #cccccc
}
</style>