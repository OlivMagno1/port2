<template>
  <div class="background2">
    <div class="header">
      <h2>Magno Oliveira</h2>
      <h1>Conhecimentos</h1>
    </div>
    <div class="menu-header">
      <router-link to="/">Home</router-link>
      <router-link to="/portfolio">Projetos</router-link>
    </div>
    <div class="skill-list">
      <div class="skill-item" v-for="(skill, index) in skillData" :key="index">
        <font-awesome-icon :icon="skill.icon" class="small-text" />
        <h2>{{ skill.tech }}</h2>
        <p class="large-text">{{ skill.description }}</p>
        <div class="level-container">
          <p>{{ skill.levelName }}</p>
          <div class="level-graph">
            <span
              v-for="i in (0, 3)"
              :key="i"
              :class="{
                empty: checkBar(i, index),
              }"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioView",
  setup() {
    const skillData = [
      {
        icon: "fa-brands fa-html5",
        tech: "HTML",
        description:
          "É a linguagem de marcarção mais comumente utilizada para a criação de páginas da web. É responsável por estabelecer toda a estrutura básica da informação contida na página",
        levelName: "avançado",
        levelNum: 3,
      },
      {
        icon: "fa-brands fa-css3-alt",
        tech: "CSS",
        description:
          "Linguagem de estilização usada para descrever como a informação contida em uma página de HTML deve ser mostrada.",
        levelName: "avançado",
        levelNum: 3,
      },
      {
        icon: "fa-brands fa-square-js",
        tech: "JavaScript",
        description:
          "Linguagem de programação interpretada e estruturada, baseada em objetos. É uma linguagem de script designada para utilização em páginas da web.",
        levelName: "intermediário",
        levelNum: 2,
      },
      {
        icon: "fa-brands fa-vuejs",
        tech: "Vue.js",
        description:
          "Vue é um framework em Javascript para construção de interfaces de usuário e aplicações de página única. Unifica a utilização de HTML, CSS e Javascript de forma intuitiva e flexível.",
        levelName: "intermediário",
        levelNum: 2,
      },
    ];

    const checkBar = (bar, index) => {
      if (bar <= skillData[index].levelNum) return false;
      else return true;
    };
    return { skillData, checkBar };
  },
};
</script>

<style scoped>
@media screen and (min-width: 1000px) {
  .skill-list {
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

  .skill-list .skill-item {
    margin: 0 0 1rem 0;
    text-align: justify;
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-end;
    justify-content: flex-end;
    transition: 0.2s;
  }

  .skill-item:hover {
    transform: scale(1.01);
    background-color: var(--primary);
  }

  .skill-item h2 {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    cursor: default;

    height: clamp(2rem, -0.174rem + 34.8vw, 4rem);
    width: clamp(7rem, 3.739rem + 5.2vw, 10rem);
    margin: 0 1rem 0 0;
    font-size: clamp(1rem, 0.457rem + 0.9vw, 1.5rem);
  }

  .skill-item .large-text {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;

    height: clamp(2rem, -0.174rem + 34.8vw, 4rem);
    width: clamp(26rem, 10.293rem + 25.1vw, 40.45rem);
    margin: 0 1rem 0 1rem;
    font-size: clamp(0.8rem, 0.583rem + 0.3vw, 1rem);
  }

  .skill-item .small-text {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;

    height: clamp(2rem, -0.174rem + 34.8vw, 4rem);
    width: clamp(3rem, 0.283rem + 4.3vw, 5.5rem);
    margin: 0 1rem 0 0;
  }

  .level-container {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    height: clamp(2rem, -0.174rem + 34.8vw, 4rem);
    color: var(--accent);
  }

  .level-container p {
    font-size: clamp(0.8rem, 0.583rem + 0.3vw, 1rem);
    cursor: default;
    transition: 0.6s;
    opacity: 0;
  }

  .level-container:hover p {
    opacity: 0.6;
  }

  .level-graph {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    width: clamp(7rem, 3.739rem + 5.2vw, 10rem);
  }

  span {
    margin: 0.1rem;

    width: 2rem;
    height: 0.2rem;
    background-color: var(--clear);
  }

  .empty {
    opacity: 0.4;
  }
}
</style>
