//Aqui vamos a estar importando el crear rutas y el historial de web de vue router
import { createRouter, createWebHashHistory } from 'vue-router'
//Aqui vamos a importar homeview de homeview
import HomeView from '../views/HomeView.vue'

// Aqui podemos irnos a cualquier parte de la pagina
//Todas estas rutas se ocupan para poder movernos dentro de nuestra app
//Para agregar ottra ruta, agregamos otro objeto y lo metemos en el arreglo
//Y nuestra siguientes pagina la ponemos en views

//Componentes para botones
//Views tenemos algo mas grande ya que aqui va a caer nuestro usuario

const routes = [ //Arreglo de rutas
  {
    path: '/', 
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue') //Tambien asi se puede importar el componente
  }
]

const router = createRouter({ //Esto es para que tu te puedas estar moviendo en las diferentes paginas
  history: createWebHashHistory(),
  routes
})

export default router
