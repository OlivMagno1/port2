<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

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
  --primary: #0c0f1d;
  --primary-light: #161b33;
  --secondary: #06070e;
  --clear: #f1dac4;
  --accent: #a69cac;
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

.background {
  height: 58.7rem;
  display: flex;
  flex-flow: row nowrap;
}

.header {
  position: absolute;
  top: 2.5rem;
  left: 5rem;
  z-index: 100;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
}

.stack {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
}

.header h1 {
  font-size: 5rem;
  font-family: "Unbounded";
  font-variation-settings: "wght" 200;
  margin: -1rem 0 0 -0.3rem;
}

.name {
  color: var(--clear);
  font-size: 1.4rem;
  font-family: "Unbounded";
  font-variation-settings: "wght" 200;
}

.header p {
  font-size: 1rem;
  font-style: italic;
  font-weight: 400;
  opacity: 0.5;
  margin-bottom: 1rem;
  color: var(--clear);
}

.menu-header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  position: absolute;
  top: 9rem;
  left: 5rem;
  height: 2rem;
  width: 23rem;
  z-index: 101;
}

.menu-header a,
.menu-header a:visited {
  color: var(--accent);
  text-decoration: none;
  font-weight: 400;
  font-size: 1.2rem;
  transition: 0.2s;
  margin-right: 1rem;
}

.menu-header a:hover {
  color: var(--clear);
}

.sub-header {
  font-size: 1rem;
  font-style: italic;
  font-weight: 400;
  opacity: 0.5;
  margin-bottom: 1rem;
  color: var(--clear);

  text-align: left;
  position: absolute;
  top: 11rem;
  left: 5rem;
  height: 2rem;
  width: 50rem;
  z-index: 101;
}
</style>
