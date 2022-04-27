<template>
    <div class="orders">
        <br><br><br><br>
        <h2>Pedidos del Dia</h2>
        <table class="order">
            <tr class="table-title2">
                <td>Nombre</td>
                <td>Telefono</td>
                <td>Correo</td>
                <td>Descripcion Pastel</td>
                <td>Sabores</td>
                <td>Decoraciones</td>
                <td>Tamaño</td>
                <td>Precio Total</td>
            </tr>
            <tr>
                <td>Roberto Hernandez</td>
                <td>449 765 3284</td>
                <td>rober89@gmail.com</td>
                <td>Festejo de cumpleaños, cumple 18 años</td>
                <td>Chocolate, Vainilla</td>
                <td>Pastel Sprinkles y confeti</td>
                <td>25cm = 38 porciones</td>
                <td>$ 300.00</td>

            </tr>
            <tr>
                <td>Humberto Gonzalez</td>
                <td>449 634 0537</td>
                <td>humber34@gmail.com</td>
                <td>Despedida, mi amigo se va de viaje por un año</td>
                <td>Limon</td>
                <td>Colorantes alimentarios y aerosoles</td>
                <td>30cm = 56 porciones</td>
                <td>$ 545.00</td>
            </tr>
        </table>
    </div>
</template>

<script>

export default {
    name: 'Orders',
}
</script>

