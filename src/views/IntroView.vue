<template>
  <div class="background">
    <div class="header">
      <h2>Front-end dev</h2>
      <h1>OlivMagno</h1>
    </div>
    <div class="menu-header">
      <router-link to="/knowledge">Conhecimentos</router-link>
      <router-link to="/portfolio">Projetos</router-link>
    </div>
    <div class="textContainer">
      <p>
        Olá, meu nome é Magno e sou formado em Ciência da Computação pela
        Universidade Federal de São Paulo, realizando um TCC na área de
        experiência de usuário e teste de usabilidade.
      </p>
      <p>
        Durante a minha graduação, trabalhei como freelance de desenvolvimento
        Front-end, utilizando HTML e CSS. Desde que me formei venho estudando de
        forma autônoma, desenvolvendo um portfolio de aplicações e interfaces em
        Vue.js.
      </p>
    </div>
  </div>
</template>

<style scoped>
@media screen and (min-width: 1000px) {
  .textContainer {
    width: clamp(59.4rem, 26.791rem + 52.2vw, 89.4rem);
    position: relative;
    height: clamp(27rem, 11.783rem + 24.3vw, 41rem);
    top: clamp(6rem, -1.609rem + 12.2vw, 13rem);
    left: clamp(1rem, -3.348rem + 7vw, 5rem);
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: flex-start;
  }
}
</style>
