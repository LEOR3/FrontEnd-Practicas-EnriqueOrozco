<template>
    <div class="info-decoration">
        <h3>1.- Decoracion (Se puede combinar hasta 2 decoraciones)</h3>
        <p>{{ $store.state.infodecorate[0].name}}........................... ${{ $store.state.infodecorate[0].price}}</p>
        <p>{{ $store.state.infodecorate[1].name}}............................... ${{ $store.state.infodecorate[1].price}}</p>
        <p>{{ $store.state.infodecorate[2].name}}............................ ${{ $store.state.infodecorate[2].price}}</p>
        <p>{{ $store.state.infodecorate[3].name}}......... ${{ $store.state.infodecorate[3].price}}</p>
        <p>{{ $store.state.infodecorate[4].name}}.................. ${{ $store.state.infodecorate[4].price}}</p>
        <p>{{ $store.state.infodecorate[5].name}}............ ${{ $store.state.infodecorate[5].price}}</p>
    </div>
</template>

<script>

export default {
    name: 'DecorationCake',
}
</script>