<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/knowledge">Conhecimentos</router-link> |
    <router-link to="/portfolio">Portfolio</router-link>
  </nav>
  <router-view />
</template>

<style>
@font-face {
  font-family: "Montserrat";
  font-weight: 100;
  src: url("assets/fonts/Montserrat-Thin.ttf") format("ttf");
}

@font-face {
  font-family: "Montserrat";
  font-weight: 100;
  font-style: italic;
  src: url("assets/fonts/Montserrat-ThinItalic.ttf") format("ttf");
}

@font-face {
  font-family: "Montserrat";
  font-weight: 400;
  src: url("assets/fonts/Montserrat-Bold.ttf") format("ttf");
}

@font-face {
  font-family: "Montserrat";
  font-weight: 400;
  font-style: italic;
  src: url("assets/fonts/Montserrat-BoldItalic.ttf") format("ttf");
}

@font-face {
  font-family: "Montserrat";
  font-weight: 700;
  src: url("assets/fonts/Montserrat-Black.ttf") format("ttf");
}

:root {
  --background: #210203;
  --background-alt: #d3b99f;
  --font: #f2ebe3;
  --font-alt: #210203;
  --font-visited: #4d0407;
  --font-hover: #74070a;
}

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: var(--background);
  color: var(--font);
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
