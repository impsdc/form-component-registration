<template>
 <div>
   <div class="font-sans antialiased h-screen">
      <Navbar/>
      <div id="main" class="pt-16">
        <Aside/>
        <div id="Content">    
                <div  class="h-32">
                  <h1 class="text-4xl font-semibold p-5">Liste des utilisateurs</h1>
                  <a class="Add-stylus m-5" href="">New User</a>
                </div>
              <table class="table p-5">
                <thead>
                  <tr>
                    <th scope="col">Nom Prénom</th>
                    <th scope="col">Équipe</th>
                    <th scope="col">Niveau</th>
                    <th scope="col">Nombre de formations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><img src="" alt="">Name</td>
                    <td>2</td>
                    <td>1</td>
                    <td>29</td>
                  </tr>
                  <tr>
                    <td><img src="" alt=""> Mozavick Patrick</td>
                    <td>4</td>
                    <td>1</td>
                    <td>19</td>
                  </tr>
                </tbody>
              </table>
              <div class="flex justify-between items-center">
              <button>Previous</button> 
              <button>Next</button>
              </div>
        </div>
      </div>
    </div>
 </div>
</template>


<script>
import Vue, {PropOptions} from 'vue';
import Navbar from '~/components/Navbar'
import Aside from '~/components/Aside'

export default Vue.extend({
  components: {
    Navbar, 
    Aside
  },
  data() {
    return {

    }
  },
  methods: {
  
  }
})
</script>

<style lang="scss">
  .Add-stylus{
    background-color: #82d3de;
    padding: 10px;
    border-radius: 9px;
    color: white;
    font-weight: bold;
  }
  
  table{
    width: 100%;
    padding: 20px
  }
  tbody{
    & tr{
      height: 68px;
      &:hover{
        background-color: rgb(130, 211, 222);
      }
      & td{
        text-align: center;
      }
    }
  }
</style>