<template>
<!-- Crea el componente del cuadrado.vue -->
    <div class="cuadrado">
      {{ $store.state.contador }} <sup>2</sup> = {{ $store.getters.cuadrado }}
      <!-- sup = super indice -->
    </div>
</template>

<script>

export default {
    name: 'Cuadrado',
}
</script>