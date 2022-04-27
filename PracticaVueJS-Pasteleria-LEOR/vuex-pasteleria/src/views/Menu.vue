<template>
  <div class="home">
    <header class="fixed">
      <img alt="Pasteleria-logo" src="../assets/DTentaciones.png" class="logo">
      <div class="top"></div>
    </header>
    <main class="info">
      <h1 class="title">Pasteleria <br> <span class="subtitle"> Dulces Tentaciones </span>  </h1>

      <p class="legend">La manera mas dulce de disfrutar la vida, es endulzandola con un pastel</p>

      <br>
      <h2 class="menu-title">Menu de opciones</h2>
      <br>

      <div class="menu">
        <DecorationCake/>
        <TasteCake/>
        <Size/>
      </div>

      <br>
      <h2 class="build-title">Arma tu propio Pastel !!!</h2>
      <br>

      <form @change="$store.dispatch('changeSummary')">
        <div class="container-main">
          <div class="requirements">
            <TasteCombination/>
            <DecorationCombination/>
          </div>
          <img src="https://www.bakeryandsnacks.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/bakeryandsnacks.com/article/2018/10/09/have-your-cake-and-eat-it-brits-top-20-favorite-cakes/8701145-2-eng-GB/Have-your-cake-and-eat-it-Brits-Top-20-favorite-cakes.jpg" alt="cake-shop" class="cake-shop">
        </div>
        <DecorationTable/>
        <SizeCake/>
        <ClientContact/>
        <Buttons/>
      </form>
    </main>
    <footer class="menu-page">
      <Contact/> 
    </footer>
  </div>
</template>


<script>
// @ is an alias to /src
import Contact from "../components/Contact.vue";
import TasteCake from "../components/TasteCake.vue";
import DecorationCake from "../components/DecorationCake.vue";
import SizeCake from "../components/SizeCake.vue";
import ClientContact from "../components/ClientContact.vue";
import Buttons from "../components/Buttons.vue";
import DecorationCombination from "../components/DecorationCombination.vue";
import TasteCombination from "../components/TasteCombination.vue";
import Size from "../components/Size.vue";
import DecorationTable from "../components/DecorationTable.vue";


export default {
  name: 'HomeView',
  components: {
    Contact,
    TasteCake,
    DecorationCake,
    SizeCake,
    ClientContact,
    Buttons,
    DecorationCombination,
    TasteCombination,
    Size,
    DecorationTable,
  }
}
</script>

