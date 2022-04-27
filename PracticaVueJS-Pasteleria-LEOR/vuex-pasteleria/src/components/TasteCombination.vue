<template>
    <div class="taste-cake">
        <h3>Cual Sabor/Sabores Elegiras... </h3>
        <p>Recuerda Maximo 3</p>
        <input type="checkbox" id="Chocolate" name="sabor" value="Chocolate">
        <label for="Chocolate">{{ $store.state.infotaste[0].name}}.........${{ $store.state.infotaste[0].price}}</label><br>
        <input type="checkbox" id="Limon" name="sabor" value="Limon">
        <label for="Limon">{{ $store.state.infotaste[1].name}}.........${{ $store.state.infotaste[1].price}}</label><br>
        <input type="checkbox" id="Vainilla" name="sabor" value="Vainilla">
        <label for="Vainilla">{{ $store.state.infotaste[2].name}}.........${{ $store.state.infotaste[2].price}}</label><br>
        <input type="checkbox" id="Zanahoria" name="sabor" value="Zanahoria">
        <label for="Zanahoria">{{ $store.state.infotaste[3].name}}.........${{ $store.state.infotaste[3].price}}</label><br>
        <input type="checkbox" id="Naranja" name="sabor" value="Naranja">
        <label for="Naranja">{{ $store.state.infotaste[4].name}}.........${{ $store.state.infotaste[4].price}}</label><br>
        <input type="checkbox" id="Fresa" name="sabor" value="Fresa">
        <label for="Fresa">{{ $store.state.infotaste[5].name}}.........${{ $store.state.infotaste[5].price}}</label><br>
        <input type="checkbox" id="Guayaba" name="sabor" value="Guayaba">
        <label for="Guayaba">{{ $store.state.infotaste[6].name}}.........${{ $store.state.infotaste[6].price}}</label><br>
        <input type="checkbox" id="Queso" name="sabor" value="Queso">
        <label for="Queso">{{ $store.state.infotaste[7].name}}.........${{ $store.state.infotaste[7].price}}</label><br>
    </div>
</template>

<script>

export default {
    name: 'TasteCombination',
}
</script>