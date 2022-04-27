<template>
    <div class="qty-taste">
        <br><br>
        <h2>Sabores</h2>
        <table class="taste-q">
            <tr class="table-title2">
                <td>Sabor</td>
                <td>{{ $store.state.infotaste[0].name}}</td>
                <td>{{ $store.state.infotaste[1].name}}</td>
                <td>{{ $store.state.infotaste[2].name}}</td>
                <td>{{ $store.state.infotaste[3].name}}</td>
                <td>{{ $store.state.infotaste[4].name}}</td>
                <td>{{ $store.state.infotaste[5].name}}</td>
                <td>{{ $store.state.infotaste[6].name}}</td>
                <td>{{ $store.state.infotaste[7].name}}</td>
            </tr>
            <tr>
                <td class="initial-table">Cantidad Inicial</td>
                <td>{{ $store.state.infotaste[0].initialqty}}</td>
                <td>{{ $store.state.infotaste[1].initialqty}}</td>
                <td>{{ $store.state.infotaste[2].initialqty}}</td>
                <td>{{ $store.state.infotaste[3].initialqty}}</td>
                <td>{{ $store.state.infotaste[4].initialqty}}</td>
                <td>{{ $store.state.infotaste[5].initialqty}}</td>
                <td>{{ $store.state.infotaste[6].initialqty}}</td>
                <td>{{ $store.state.infotaste[7].initialqty}}</td>
            </tr>
            <tr>
                <td class="initial-table">Cantidad Actual</td>
                <td>{{ $store.state.infotaste[0].currentqty}}</td>
                <td>{{ $store.state.infotaste[1].currentqty}}</td>
                <td>{{ $store.state.infotaste[2].currentqty}}</td>
                <td>{{ $store.state.infotaste[3].currentqty}}</td>
                <td>{{ $store.state.infotaste[4].currentqty}}</td>
                <td>{{ $store.state.infotaste[5].currentqty}}</td>
                <td>{{ $store.state.infotaste[6].currentqty}}</td>
                <td>{{ $store.state.infotaste[7].currentqty}}</td>
            </tr>
        </table>
    </div>
</template>

<script>

export default {
    name: 'QtyTaste',
}
</script>

