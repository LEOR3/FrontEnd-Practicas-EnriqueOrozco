<template>
    <div class="size-cake">
        <h3>Que tamaño sera..</h3>
        <select name="tamaño" id="tamaño">
            <option value="10">10cm = 8 porciones</option>
            <option value="15">15cm = 12 porciones</option>
            <option value="20">20cm = 24 porciones</option>
            <option value="25">25cm = 38 porciones</option>
            <option value="30">30cm = 56 porciones</option>
            <option value="35">35cm = 78 porciones</option>
            <option value="40">40cm = 100 porciones</option>
        </select>
    </div>
</template>

<script>

export default {
    name: 'SizeCake',
}
</script>