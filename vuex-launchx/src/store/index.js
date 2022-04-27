import { createStore } from 'vuex'
// Aqui vamos a manejar todos nuestros estados en VueX

/* Estado = Lo que nosotros vamos a tener de informacion en el sitio y no solo informacion 
si no en general todo lo que vamos a estar montando y todas las cosas que va estar sucediendo dentro del sitio con nuestrta informacion
independientemente de la vista, componente, pero los componentes, vistas puede modificar el */

export default createStore({
  state: { //El estado, aqui va a venir la informacion que nosotros vamos a estar mostrando, manejando dentro de la informacion, por la que podemos almacenar variables, cambio de movimiento de informacion
    //No hay limite de variables en los estados, se puede poner mas de 1
    //Aqui guarda la info
    contador: 0
  },
  getters: {// Son para entonces nosotros poder entrar a la informacion del estado, para recuperarlo
    cuadrado(state){ //Obtiene la informacion del estado
      return state.contador * state.contador;
    }
  },
  mutations: {// Estos se utilizan si necesitamos hacer modificaciones en el estado, ejemplo si tenemos una variable que queremos que sea modificada. Las mutaciones se utilizan aqui mismo
    
    //Para mutaciones se utiliza commit('') cuando se manda llamar
    // Modifican el estado

    subirContador(state, random){//Se le tiene que poner el state para que ahora si simule el this del objeto
      state.contador += random;
    },
    bajarContador(state, random){
      state.contador -= random;
    }
  },
  actions: {// Aqui tambien se utiliza para hacer modificaciones en el estado, pero aqui si podemos tener codifo asincrono y en las mutaciones no, por ejemplo aqui si podemos consumir algo desde la API
  
    //Para acciones se utiliza dispatch('') cuando se manda llamar

    //Si llamamos a la acciones podemos poner algunas validaciones
    //Las acciones mueven las mutaciones

    //Entonces aqui se manda la accion manda llamar la mutacion para que pueda modificar el estado

    async subirContador({ commit }){ //Mandamos como objeto commit
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new')
      const results = await res.json();
      console.log(results);
      commit("subirContador",results); //commit (A que funcion, que le vamos a mandar)
    },
    async bajarContador({ commit }){ //Mandamos como objeto commit
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new')
      const results = await res.json();
      console.log(results);
      commit("bajarContador",results); //commit (A que funcion, que le vamos a mandar)
    }

  },
  modules: {// Si queremos que alguna accion, mutacion, getter, state solo sean para ciertas paginas, por ejemplo el modulo de perfil seria uno
  }
})
