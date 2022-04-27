<template>
    <div class="client-contact">
        <label for="Nombre">Nombre Completo</label><br>
        <input type="text" id="Nombre" name="Nombre" placeholder="Nombre">

        <br><br>
        <label for="tel">Telefono</label><br>
        <input type="tel" id="Telefono" name="Telefono" placeholder="Telefono" maxlength="10">

        <br><br>
        <label for="Nombre">Correo electronico</label><br>
        <input type="text" id="Correo electronico" name="Correo electronico" placeholder="Correo electronico">

        <br><br>
        <label for="Nombre">Proporciona la descripcion de tu pastel (Evento, Tematica, etc...)</label><br>
        <input type="text" id="Descripcion" name="Descripcion" placeholder="Descripcion">
        <br><br>

        <br>
        <div class="client">
            <p>
                Nombre : {{ $store.state.contact.name }} <br>
                Telefono : {{ $store.state.contact.phone }} <br>
                Email : {{ $store.state.contact.email }} <br>
                Descripcion : {{ $store.state.contact.description }} <br>
                Sabores Elegidos : {{ $store.state.taste.tast1 }}, {{ $store.state.taste.tast2 }}, {{ $store.state.taste.tast3 }} <br>
                Decoraciones Elegidas : {{ $store.state.taste.decorate1 }}, {{ $store.state.taste.decorate2 }} <br>
                Tamaño : {{ $store.state.size }} cm <br>
            </p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ClientContact',
}


</script>