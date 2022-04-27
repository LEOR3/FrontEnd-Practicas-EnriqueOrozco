<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
    <!-- METODO DE COMPONENTES Y CON ESTADOS  -->

    <!-- Pones el componente como etiqueta HTML -->
    <!-- Estos componentes se van a estar mostrando dentro del home -->
    <Contador/> 
    
    <Cuadrado/>

    <Botones/>
    
    <!-- METODO SIN CREACION DE COMPONENTES Y CON ESTADOS  -->

    <!-- <div class="contador">
      {{ $store.state.contador }} 
       el store manda llamar al archivo, y le dice ponle el estado del contador 
    </div> -->
    
    <!-- <div class="cuadrado">
      {{ $store.state.contador }} <sup>2</sup> = {{ $store.getters.cuadrado }}
      sup = super indice
    </div> -->
    
    <!-- <div class="botones">
      <button @click="$store.dispatch('bajarContador')">-</button>
      <button @click="$store.dispatch('subirContador')">+</button>
    </div> -->
  </div>
</template>

<script>
//Importa los componentes
import Contador from "../components/Contador.vue";
import Cuadrado from "../components/Cuadrado.vue";
import Botones from "../components/Botones.vue";

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: { //Crea a los componentes para mandarselo al padre
    Contador,
    Cuadrado,
    Botones,
  }

  // METODO PARA DIRECTO CON JS

/*  data(){//Objeto data
    return {//Regresa un objeto
      contador:0
    }
  },*/
/*  methods: {
    bajarContador(){
      this.contador--;
    },
    subirContador(){
      this.contador++;
    }
  }*/
// components: {
//  HelloWorld
//  }
}
</script>

<style>

div{
  margin-bottom: 10px;
}

.contador{
  font-size: 80px;
}

.botones button{
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}

.cuadrado{
  font-size: 25px;
}

</style>