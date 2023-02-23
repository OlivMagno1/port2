<template>
  <div class="background">
    <div class="text-container">
      <p id="hello">Olá</p>
      <p class="text-box">
        Meu nome é Magno e sou formado em Ciência da Computação pela
        Universidade Federal de São Paulo, realizando um TCC na área de
        experiência de usuário e teste de usabilidade.
      </p>
      <p class="text-box">
        Durante a minha graduação, trabalhei como freelance de desenvolvimento
        Front-end, utilizando HTML e CSS. Desde que me formei venho estudando de
        forma autônoma, desenvolvendo um portfolio de aplicações e interfaces em
        Vue.js.
      </p>
      <p class="text-box">
        Fique à vontade para conhecer os meus projetos já concluídos.
      </p>
    </div>
  </div>
</template>

<style scoped>
@media screen and (min-width: 1000px) {
  .text-container {
    width: clamp(59.4rem, 26.791rem + 52.2vw, 89.4rem);
    position: relative;
    height: clamp(27rem, 11.783rem + 24.3vw, 41rem);
    top: clamp(6rem, -1.609rem + 12.2vw, 13rem);
    left: clamp(1rem, -3.348rem + 7vw, 5rem);

    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
  }

  #hello {
    margin-bottom: 1rem;

    font-family: "Unbounded";
    font-weight: 100;
    font-size: clamp(2.5rem, 0.87rem + 2.61vw, 4rem);
    color: var(--clear);
    opacity: 0.8;

    cursor: default;
  }

  .text-box {
    text-align: justify;
    margin-bottom: 1rem;
    width: clamp(35rem, 29.565rem + 8.7vw, 40rem);
    font-size: clamp(0.8rem, 0.365rem + 0.7vw, 1.2rem);
  }
}
</style>
