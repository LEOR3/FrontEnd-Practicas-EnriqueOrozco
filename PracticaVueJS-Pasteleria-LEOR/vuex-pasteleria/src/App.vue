<template>
  <nav>
    <router-link to="/">Menu Cliente</router-link> 
    <router-link to="/pastelero">Pastelero</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

nav {
  box-sizing: border-box;
  padding: 30px;
  width: 100%;
  height: 100px;
  text-align: right;
  background-color: none;
  display: flex;
  justify-content: flex-end;
  gap: 55px;
}

a {
  z-index: 1;
  position: relative;
  font-weight: bold;
  color: #3ca9ca;
  font-size: 20px;
  background-color: none;
  text-decoration-line: none;
}

a::after{
  position: absolute;
  top: 25px;
  left: 0;
  content: '';
  width: 100%;
  height: 0.1em;
  background-color: #3ca9ca;
  opacity: 0;
  transition: opacity 300ms, transform 300ms;
}

nav a.router-link-exact-active {
  color: #4d322d;
  background-color: none;
}

/* Scale from center */
a::after {
  opacity: 1;
  transform: scale(0);
  transform-origin: center;
}

a:hover::after, a:focus::after{
  transform: scale(1);
}

</style>
