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
  background-image: linear-gradient(
      to right,
      rgba(6, 7, 14, 1) 60%,
      rgba(6, 7, 14, 0.8)
    ),
    url("./assets/images/bg.jpg");
  background-size: cover;
}

.header {
  position: absolute;
  top: clamp(0rem, -0.391rem + 1.7vw, 1rem);
  left: clamp(2rem, 0.826rem + 5.2vw, 5rem);
  z-index: 100;
}

.header h1 {
  position: absolute;
  top: 2rem;
  font-size: clamp(2rem, 0.826rem + 5.2vw, 5rem);
  font-family: "Unbounded";
  font-variation-settings: "wght" 200;
  /*margin-top: clamp(-1, -1.196rem + 0.9vw, -0.5rem);
  margin-left: -0.3rem;
  */
  cursor: default;
}

.header h2 {
  position: absolute;
  top: 1.4rem;
  margin-left: clamp(0.15rem, 0.071rem + 0.3vw, 0.35rem);

  width: 14rem;

  font-family: "Unbounded";
  font-variation-settings: "wght" 200;
  font-size: clamp(0.8rem, 0.565rem + 1vw, 1.4rem);
  text-align: left;
  color: var(--clear);

  cursor: default;
}

.menu-header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;

  position: absolute;
  top: clamp(4.5rem, 2.739rem + 7.8vw, 9rem);
  left: clamp(2rem, 0.826rem + 5.2vw, 5rem);

  height: 2rem;
  width: 23rem;
  margin-left: clamp(0.15rem, 0.071rem + 0.3vw, 0.35rem);
  z-index: 101;
}

.menu-header a,
.menu-header a:visited {
  color: var(--accent);
  text-decoration: none;
  font-weight: 400;
  font-size: clamp(0.9rem, 0.861rem + 0.2vw, 1rem);
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
