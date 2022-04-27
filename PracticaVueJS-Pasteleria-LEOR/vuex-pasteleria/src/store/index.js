import { createStore } from 'vuex'

export default createStore({
  state: {
    contact: 
      {name: '',
      phone: '',
      email: '',
      description: '',
      summary: ''},
    taste:
      {tast1: '', tast2: '', tast3: ''},
    decoration:
      {decorate1: '', decorate2: ''},
    size : '',
    infotaste: [
      {name: 'Chocolate', price: 40.00, currentqty: 10, initialqty: 20},
      {name: 'Limon', price: 45.00, currentqty: 12, initialqty: 15},
      {name: 'Vainilla', price: 45.00, currentqty: 5, initialqty: 20},
      {name: 'Zanahoria', price: 40.00, currentqty: 8, initialqty: 10},
      {name: 'Naranja', price: 40.00, currentqty: 9, initialqty: 10},
      {name: 'Fresa', price: 50.00, currentqty: 10, initialqty: 15},
      {name: 'Guayaba', price: 50.00, currentqty: 3, initialqty: 10},
      {name: 'Queso', price: 40.00, currentqty: 14, initialqty: 20},
    ], 
    infodecorate: [
      {name: 'Mangas pasteleras', price: 40.00, currentqty: 15, initialqty: 24},
      {name: 'Topper adorno', price: 45.00, currentqty: 19, initialqty: 24},
      {name: 'Gel para ribetes', price: 45.00, currentqty: 10, initialqty: 24},
      {name: 'Colorantes alimentarios y aerosoles', price: 40.00, currentqty: 7, initialqty: 24},
      {name: 'Pastel Sprinkles y confeti', price: 40.00, currentqty: 14, initialqty: 24},
      {name: 'Azúcar/Fondant//Hoja de glaseado', price: 50.00, currentqty: 13, initialqty: 24},
    ],
  },
  getters: {
  },
  mutations: {
    changeSummary(state){
      state.contact.name = document.getElementById('Nombre').value;
      state.contact.phone = document.getElementById('Telefono').value;
      state.contact.email = document.getElementById('Correo electronico').value;
      state.contact.description = document.getElementById('Descripcion').value;

      var checkedValue = [];
      var j = 0;
      var inputElements = document.getElementsByName('sabor');
      for (var i=0; inputElements[i]; i++){
        if (inputElements[i].checked){
          checkedValue[j] = inputElements[i].value;
          if (j > 2)
            j = 2;
          j++;
        }
      }

      state.taste.tast1 = checkedValue[0];
      state.taste.tast2 = checkedValue[1];
      state.taste.tast3 = checkedValue[2];

      var checkedValue2 = [];
      var j = 0;
      var inputElements2 = document.getElementsByName('decoraciones');
      for (var i=0; inputElements2[i]; i++){
        if (inputElements2[i].checked){
          checkedValue2[j] = inputElements2[i].value;
          if (j > 1)
            j = 1;
          j++;
        }
      }

      state.taste.decorate1 = checkedValue2[0];
      state.taste.decorate2 = checkedValue2[1];

      state.size = document.getElementById('tamaño').value;
    },
    reset(state){
      state.contact.name = '';
      state.contact.phone = '';
      state.contact.email = '';
      state.contact.description = '';
      state.taste.tast1 = '';
      state.taste.tast2 = '';
      state.taste.tast3 = '';
      state.taste.decorate1 = '';
      state.taste.decorate2 = '';
      state.size = '';

    },
    giveTastes(state){
      let flavour = [];


    }
  },
  actions: {
    changeSummary({ commit }){
      commit("changeSummary");
    },
    reset({ commit }){
      commit("reset");
    },
  },
  modules: {
  }
})
