<template>
  <aside>
        <div class="bg-gray-300 fixed w-32 h-full min-h-screen">
          <div class="xl:py-2">
            <div class="group relative sidebar-item with-children">
              <nuxt-link to="../admin" class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-gray-700 hover:text-white flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="h-6 w-6 text-grey-darker fill-current xl:mr-2"><path d="M12 18.62l-6.55 3.27A1 1 0 0 1 4 21V4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v17a1 1 0 0 1-1.45.9L12 18.61zM18 4H6v15.38l5.55-2.77a1 1 0 0 1 .9 0L18 19.38V4z" class="heroicon-ui"></path></svg>
                <div class="text-xs">Accueil</div>
              </nuxt-link>
            </div>         
            <div class="group relative sidebar-item with-children">
              <nuxt-link to="../admin/formation" class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-gray-700 hover:text-white flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="h-6 w-6 text-grey-darker fill-current xl:mr-2"><path d="M20 11.46V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-4h-2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8.54A4 4 0 0 1 2 8V7a1 1 0 0 1 .1-.45l2-4A1 1 0 0 1 5 2h14a1 1 0 0 1 .9.55l2 4c.06.14.1.3.1.45v1a4 4 0 0 1-2 3.46zM18 12c-1.2 0-2.27-.52-3-1.35a3.99 3.99 0 0 1-6 0A3.99 3.99 0 0 1 6 12v8h3v-4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v4h3v-8zm2-4h-4a2 2 0 1 0 4 0zm-6 0h-4a2 2 0 1 0 4 0zM8 8H4a2 2 0 1 0 4 0zm11.38-2l-1-2H5.62l-1 2h14.76z" class="heroicon-ui"></path></svg>           
                <div class="text-xs">Formation</div>
              </nuxt-link>
            </div>
            <div @click="isHidden = !isHidden" class="group relative sidebar-item with-children cursor-pointer">
              <div class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-gray-700 hover:text-white focus:cursor-pointer flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="h-6 w-6 text-grey-darker fill-current xl:mr-2"><path d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z" class="heroicon-ui"></path></svg>
                <div class="text-xs">Admin</div>
              </div>
                <div  @click.stop v-show="isHidden" class="absolute xl:relative pin-t xl:pin-none w-32 xl:w-auto group-hover:block bg-gray-800 z-50 xl:z-auto">
                    <nuxt-link to="/admin/users" class="block text-left xl:flex xl:items-center shadow xl:shadow-none py-3 px-3 xl:px-4 border-l-4 border-transparent text-white hover:bg-gray-900 text-xs flex justify-center items-start">
                      Utilisateurs
                    </nuxt-link>
                    <nuxt-link to="/admin/formation" class="block text-left xl:flex xl:items-center shadow xl:shadow-none py-3 px-3 xl:px-4 border-l-4 border-transparent text-white hover:bg-gray-900 text-xs">
                      Gestion Formations
                    </nuxt-link>
                </div>
            </div>
          </div>
        </div>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return{
      isHidden: false,
      colorNav: false
    }
  }
})
</script>

<style>

#main {
  display: grid;
  grid-template-columns: 8rem auto;
}


.group .nuxt-link-exact-active:not(.logo){
  background-color: #4a5568;
  color: white;
}

a {
  text-decoration: none;
}

.pt-16 {
  padding-top: 4rem;
}


.top-full { top: 100%; }
.left-full { left: 100%; }


@media (min-width: 1200px) {
  .xl\:pin-none { left: auto; }
}

.group:hover .group-hover\:block {
  display: block;
}
</style>