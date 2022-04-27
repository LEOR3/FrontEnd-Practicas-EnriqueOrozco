<template>
    <div class="info-taste">
        <h3>2.- Sabor (Se puede combinar hasta 3 sabores)</h3>
        <p>{{ $store.state.infotaste[0].name}}................... ${{ $store.state.infotaste[0].price}}</p>
        <p>{{ $store.state.infotaste[1].name}}................. ${{ $store.state.infotaste[1].price}}</p>
        <p>{{ $store.state.infotaste[2].name}}................. ${{ $store.state.infotaste[2].price}}</p>
        <p>{{ $store.state.infotaste[3].name}}......... ${{ $store.state.infotaste[3].price}}</p>
        <p>{{ $store.state.infotaste[4].name}}......... ${{ $store.state.infotaste[4].price}}</p>
        <p>{{ $store.state.infotaste[5].name}}......... ${{ $store.state.infotaste[5].price}}</p>
        <p>{{ $store.state.infotaste[6].name}}......... ${{ $store.state.infotaste[6].price}}</p>
        <p>{{ $store.state.infotaste[7].name}}......... ${{ $store.state.infotaste[7].price}}</p>
    </div>
</template>

<script>

export default {
    name: 'TasteCake',
}
</script>