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
  src: url("assets/fonts/Montserrat-Thin.ttf");
  font-weight: 100;
}

@font-face {
  font-family: "Montserrat";
  src: url("assets/fonts/Montserrat-ThinItalic.ttf");
  font-style: italic;
  font-weight: 100;
}

@font-face {
  font-family: "Montserrat";
  src: url("assets/fonts/Montserrat-Regular.ttf");
  font-weight: 400;
}

@font-face {
  font-family: "Montserrat";
  src: url("assets/fonts/Montserrat-Italic.ttf");
  font-style: italic;
  font-weight: 400;
}

@font-face {
  font-family: "Montserrat";
  src: url("assets/fonts/Montserrat-Bold.ttf");
  font-weight: 700;
}

@font-face {
  font-family: "Montserrat";
  src: url("assets/fonts/Montserrat-BoldItalic.ttf");
  font-style: italic;
  font-weight: 700;
}

@font-face {
  font-family: "Montserrat";
  src: url("assets/fonts/Montserrat-Black.ttf");
  font-weight: 700;
}

@font-face {
  src: url("@/assets/fonts/Unbounded.ttf");

  font-family: "Unbounded";
}

:root {
  --primary: #151c0d;
  --secondary: #0a0e06;
  --clear: #fefae0;
  --accent: #dda15e;
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
  background-color: var(--secondary);
  color: var(--accent);
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
