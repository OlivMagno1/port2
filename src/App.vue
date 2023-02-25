<template>
  <div class="header">
    <h2>Front-end dev</h2>
    <h1>OlivMagno</h1>
  </div>
  <div class="menu-header">
    <router-link to="/">Introdução</router-link>
    <router-link to="/knowledge">Conhecimentos</router-link>
    <router-link to="/portfolio">Projetos</router-link>
  </div>
  <router-view v-slot="{ Component }">
    <Transition name="page-opacity" mode="out-in">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@media screen and (max-width: 999px) {
  .header {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
  }

  .header h1 {
    position: absolute;
    top: 1.7rem;
    left: 0.5rem;
    font-size: 1.5rem;
    font-family: "Unbounded";
    font-variation-settings: "wght" 200;
    cursor: default;
  }

  .header h2 {
    position: absolute;
    top: clamp(1rem, -0.63rem + 2.6vw, 2.5rem);
    left: 0.5rem;
    margin-left: clamp(0.15rem, 0.071rem + 0.3vw, 0.35rem);

    width: 10rem;

    font-family: "Unbounded";
    font-variation-settings: "wght" 200;
    font-size: clamp(0.8rem, 0.148rem + 1vw, 1.4rem);
    text-align: left;
    color: var(--clear);

    cursor: default;
  }

  .menu-header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;

    position: absolute;
    top: 3.4rem;
    left: 0.6rem;

    height: 2rem;
    width: 10rem;
    z-index: 101;
  }

  .menu-header a,
  .menu-header a:visited {
    color: var(--accent);
    text-decoration: none;
    font-weight: 400;
    font-size: clamp(0.7rem, 0.374rem + 0.5vw, 1rem);
    transition: 0.2s;
    margin-right: 1rem;
  }

  .background {
    display: flex;
    flex-flow: row nowrap;
    background-color: var(--secondary);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .background2 {
    display: flex;
    flex-flow: column nowrap;
    background-color: var(--secondary);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}

@media screen and (min-width: 1000px) {
  .header {
    position: absolute;
    top: 0;
    left: clamp(1rem, -3.348rem + 7vw, 5rem);
    z-index: 100;
  }

  .header h1 {
    position: absolute;
    top: clamp(1.5rem, -0.13rem + 2.6vw, 3rem);
    font-size: clamp(2rem, -1.261rem + 5.2vw, 5rem);
    font-family: "Unbounded";
    font-variation-settings: "wght" 200;
    cursor: default;
  }

  .header h2 {
    position: absolute;
    top: clamp(1rem, -0.63rem + 2.6vw, 2.5rem);
    margin-left: clamp(0.15rem, 0.071rem + 0.3vw, 0.35rem);

    width: 14rem;

    font-family: "Unbounded";
    font-variation-settings: "wght" 200;
    font-size: clamp(0.8rem, 0.148rem + 1vw, 1.4rem);
    text-align: left;
    color: var(--clear);

    cursor: default;
  }

  .menu-header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;

    position: absolute;
    top: clamp(3.8rem, -1.852rem + 9vw, 9rem);
    left: clamp(0.9rem, -3.557rem + 7.1vw, 5rem);

    height: 2rem;
    width: 23rem;
    margin-left: clamp(0.15rem, 0.071rem + 0.3vw, 0.35rem);
    z-index: 101;
  }

  .menu-header a {
    color: var(--accent);
    text-decoration: none;
    font-weight: 400;
    font-size: clamp(0.7rem, 0.374rem + 0.5vw, 1rem);
    transition: 0.2s;
    margin-right: 1rem;
  }

  .background {
    height: 100vh;
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

  .background2 {
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    background-image: linear-gradient(
        to right,
        rgba(6, 7, 14, 1) 60%,
        rgba(6, 7, 14, 0.8)
      ),
      url("./assets/images/bg2.jpg");
    background-size: cover;
  }
}

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

.menu-header a:hover {
  color: var(--clear);
}

a.router-link-exact-active {
  color: var(--clear);
  transform: scale(1.2);
  padding: 0 1rem;
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

.page-opacity-enter-active,
.page-opacity-leave-active {
  transition: 0.3s ease all;
}

.page-opacity-enter-from,
.page-opacity-leave-to {
  opacity: 0;
}
</style>
