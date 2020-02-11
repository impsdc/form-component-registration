<template>
  <div class="font-sans antialiased h-screen">
    <Navbar/>
    <div id="main" class="pt-16">
      <Aside/>
      <div id="Content">
        <div class="w-full bgImg overflow-hidden flex justify-center items-center">
            <div class="relative">
                <img src="../../assets/img/chess.jpg" alt="person_playing_chess" class=" mt-5">
                <div class="absolute title font-bold text-4xl text-white w-2/3 h-auto">
                    <h3>Augmenter les ventes de votre PME B2B</h3>
                </div>
            </div>
        </div>
         <div class="container mx-auto">
          <div class="flex flex-col px-32">
            <h2 class="text-4xl font-medium ml-5">Leçons</h2>
            <div class="cards-wrapper flex justify-between my-8">
              <CardComponent v-for="card in cards" :course="card" :key="card.id" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Aside from '~/components/Aside'
import CardComponent from '~/components/CardComponent'
export default {
  components: {
    Navbar,
    Aside,
    CardComponent
  },
  data() {
    return {
      cards: [
        {
          title: "Lorem 1",
          description: "En astrophysique, un trou noir est un objet céleste si compact que l'intensité de son champ gravitationnel empêche toute forme de matière ou de rayonnement de s’en échapper. De tels objets ne peuvent ni émettre, ni diffuser la lumière et sont donc noirs, ce qui en astronomie revient à dire qu'ils sont optiquement invisibles.",
          infos: {
            numberOfLessons: 8,
            numberOfTasks: 40,
            duration: "7 heures"
          }
        },
        {
          title: "Lorem 2",
          description: "En astrophysique, un trou noir est un objet céleste si compact que l'intensité de son champ gravitationnel empêche toute forme de matière ou de rayonnement de s’en échapper. De tels objets ne peuvent ni émettre, ni diffuser la lumière et sont donc noirs, ce qui en astronomie revient à dire qu'ils sont optiquement invisibles.",
          infos: {
            numberOfLessons: 6,
            numberOfTasks: 22,
            duration: "2 heures"
          }
        },
        {
          title: "Lorem 3",
          description: "En astrophysique, un trou noir est un objet céleste si compact que l'intensité de son champ gravitationnel empêche toute forme de matière ou de rayonnement de s’en échapper. De tels objets ne peuvent ni émettre, ni diffuser la lumière et sont donc noirs, ce qui en astronomie revient à dire qu'ils sont optiquement invisibles.",
          infos: {
            numberOfLessons: 12,
            numberOfTasks: 14,
            duration: "8 heures"
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.bgImg{
    height:22rem
}
.title{
    top:38%;
    left:10%
}

</style>