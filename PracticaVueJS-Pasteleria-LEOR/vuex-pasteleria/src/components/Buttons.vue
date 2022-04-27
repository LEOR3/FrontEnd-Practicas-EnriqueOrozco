<template>
    <div class="buttons">
        <br><br>
        <br><br>
        <input type="reset" @click="$store.dispatch('reset')">
        <input type="submit">
        <br><br><br><br>
    </div>
</template>

<script>

export default {
    name: 'Buttons',
}
</script>