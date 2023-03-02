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
//vh fix
const documentHeight = () => {
  const doc = document.documentElement;
  var vh = window.innerHeight * 0.01;
  doc.style.setProperty("--doc-vh", `${vh}px`);
};
window.addEventListener("resize", documentHeight);
documentHeight();
//End vh fix

export default {
  name: "App",
};
</script>

<style>
@media screen and (max-width: 999px) {
  .header {
    position: relative;
    left: 0;

    padding: 1rem 0 0 1rem;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
  }

  .header h1 {
    font-size: 1.5rem;
  }

  .menu-header {
    position: relative;
    padding-left: 1rem;
    margin: 0.5rem 0 1rem 0;
  }

  .bg {
    flex-flow: column nowrap;
    align-items: center;
    background-color: var(--secondary);
  }

  .background-skills {
    min-height: 30rem;
  }

  .background-intro {
    position: relative;
    text-align: justify;
    align-items: flex-start;
    height: calc(calc(var(--doc-vh) * 100) - 100px);
  }

  .background-port {
    position: relative;
    align-items: center;
    height: calc(calc(var(--doc-vh) * 100) - 100px);
  }
}

@media screen and (min-width: 1000px) {
  .header {
    position: absolute;
    left: clamp(1rem, -3.348rem + 7vw, 5rem);
  }

  .header h1 {
    position: absolute;
    top: clamp(1.5rem, -0.13rem + 2.6vw, 3rem);
    font-size: clamp(2rem, -1.261rem + 5.2vw, 5rem);
    cursor: default;
  }

  .header h2 {
    margin-left: clamp(0.15rem, 0.071rem + 0.3vw, 0.35rem);
    position: absolute;
    top: clamp(1rem, -0.63rem + 2.6vw, 2.5rem);
    width: 14rem;
    cursor: default;
  }

  .menu-header {
    position: absolute;
    top: clamp(3.8rem, -1.852rem + 9vw, 9rem);
    left: clamp(0.9rem, -3.557rem + 7.1vw, 5rem);

    height: 2rem;
    width: 23rem;
    margin-left: clamp(0.15rem, 0.071rem + 0.3vw, 0.35rem);
  }

  .bg {
    height: calc(var(--doc-vh) * 100);
    background-size: cover;
  }

  .background-port {
    flex-flow: row nowrap;
    background-image: linear-gradient(
        to right,
        rgba(6, 7, 14, 1) 60%,
        rgba(6, 7, 14, 0.8)
      ),
      url("./assets/images/bg.jpg");
  }

  .background-skills {
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
  --doc-vh: 0;
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

.header {
  top: 0;
  z-index: 100;
}

.header h1 {
  font-family: "Unbounded";
  font-variation-settings: "wght" 200;
}

.header h2 {
  font-family: "Unbounded";
  font-variation-settings: "wght" 200;
  font-size: clamp(0.8rem, 0.148rem + 1vw, 1.4rem);
  text-align: left;
  color: var(--clear);
}

.menu-header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  z-index: 101;
}

.menu-header a {
  color: var(--accent);
  text-decoration: none;
  font-weight: 400;
  font-size: clamp(0.7rem, 0.374rem + 0.5vw, 1rem);
  text-align: left;
  margin-right: 1rem;
  transition: 0.2s;
}

.menu-header a:hover {
  color: var(--clear);
}

a.router-link-exact-active {
  color: var(--clear);
}

.bg {
  display: flex;
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
