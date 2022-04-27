<template>
    <div class="decoration-cake">
        <div class="decoration-options">
            <h3>Que decoraciones llevara..</h3>
            <p>Recuerda Maximo 2</p>
            <input type="checkbox" id="Mangas pasteleras" name="decoraciones" value="Mangas pasteleras">
            <label for="Mangas pasteleras">{{ $store.state.infodecorate[0].name}}.........${{ $store.state.infodecorate[0].price}}</label><br>
            <input type="checkbox" id="Topper adorno" name="decoraciones" value="Topper adorno">
            <label for="Topper adorno">{{ $store.state.infodecorate[1].name}}.........${{ $store.state.infodecorate[1].price}}</label><br>
            <input type="checkbox" id="Gel para ribetes" name="decoraciones" value="Gel para ribetes">
            <label for="Gel para ribetes">{{ $store.state.infodecorate[2].name}}.........${{ $store.state.infodecorate[2].price}}</label><br>
            <input type="checkbox" id="Colorantes alimentarios y aerosoles" name="decoraciones" value="Colorantes alimentarios y aerosoles">
            <label for="Colorantes alimentarios y aerosoles">{{ $store.state.infodecorate[3].name}}.........${{ $store.state.infodecorate[3].price}}</label><br>
            <input type="checkbox" id="Pastel Sprinkles y confeti" name="decoraciones" value="Pastel Sprinkles y confeti">
            <label for="Pastel Sprinkles y confeti">{{ $store.state.infodecorate[4].name}}.........${{ $store.state.infodecorate[4].price}}</label><br>
            <input type="checkbox" id="Azúcar/Fondant//Hoja de glaseado" name="decoraciones" value="Azúcar/Fondant//Hoja de glaseado">
            <label for="Azúcar/Fondant//Hoja de glaseado">{{ $store.state.infodecorate[5].name}}.........${{ $store.state.infodecorate[5].price}}</label><br>
        </div>
    </div>
</template>

<script>

export default {
    name: 'DecorationCombination',
}
</script>