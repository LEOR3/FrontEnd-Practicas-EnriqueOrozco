<template>
    <div class="qty-decoration">
        <br><br>
        <h2>Decoraciones</h2>
        <table class="decoration-q">
            <tr class="table-title2">
                <td>Decoracion</td>
                <td>{{ $store.state.infodecorate[0].name}}</td>
                <td>{{ $store.state.infodecorate[1].name}}</td>
                <td>{{ $store.state.infodecorate[2].name}}</td>
                <td>{{ $store.state.infodecorate[3].name}}</td>
                <td>{{ $store.state.infodecorate[4].name}}</td>
                <td>{{ $store.state.infodecorate[5].name}}</td>
            </tr>
            <tr>
                <td class="initial-table">Cantidad Inicial</td>
                <td>{{ $store.state.infodecorate[0].initialqty}}</td>
                <td>{{ $store.state.infodecorate[1].initialqty}}</td>
                <td>{{ $store.state.infodecorate[2].initialqty}}</td>
                <td>{{ $store.state.infodecorate[3].initialqty}}</td>
                <td>{{ $store.state.infodecorate[4].initialqty}}</td>
                <td>{{ $store.state.infodecorate[5].initialqty}}</td>
            </tr>
            <tr>
                <td class="initial-table">Cantidad Actual</td>
                <td>{{ $store.state.infodecorate[0].currentqty}}</td>
                <td>{{ $store.state.infodecorate[1].currentqty}}</td>
                <td>{{ $store.state.infodecorate[2].currentqty}}</td>
                <td>{{ $store.state.infodecorate[3].currentqty}}</td>
                <td>{{ $store.state.infodecorate[4].currentqty}}</td>
                <td>{{ $store.state.infodecorate[5].currentqty}}</td>
            </tr>
        </table>
    </div>
</template>

<script>

export default {
    name: 'QtyDecoration',
}
</script>

