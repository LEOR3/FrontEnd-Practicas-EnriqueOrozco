<template>
  <div class="about">
    <br><br><br>
    <img alt="Pasteleria-logo" src="../assets/DTentaciones.png" class="logo">
    <div class="top"></div>
    <main class="info2">
        <br><br>
        <h1>Pastelero</h1>

        <h2>Informacion General de la Pasteleria</h2>

        <QtyTaste/>
        <QtyDecoration/>
        <Orders/>
    
    </main>
    <footer class="pastelero-page">
        <Contact/>
    </footer>
  </div>
</template>


<script>
// @ is an alias to /src
import Contact from "../components/Contact.vue";
import QtyTaste from "../components/QtyTaste.vue";
import QtyDecoration from "../components/QtyDecoration.vue";
import Orders from "../components/Orders.vue";

export default {
  name: 'HomeView',
  components: {
    Contact,
    QtyTaste,
    QtyDecoration,
    Orders,
  }
}
</script>

<style scoped>
  .about{
    text-align: center;
  }
</style>