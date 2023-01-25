<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/knowledge">Conhecimentos</router-link> |
    <router-link to="/portfolio">Portfolio</router-link>
  </nav>
  <router-view />
</template>

<style>
:root {
  --primary: #23231a;
  --secondary: #322f20;
  --terciary: #6a5837;
}

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: var(--primary);
  color: #888;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
