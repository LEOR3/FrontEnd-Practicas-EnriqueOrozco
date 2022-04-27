<template>
<!-- Crea el componente del contador.vue -->
    <div class="contador">
      {{ $store.state.contador }} 
      <!-- el store manda llamar al archivo, y le dice ponle el estado del contador -->
    </div>
</template>

<script>

export default {
    name: 'Contador',
}
</script>