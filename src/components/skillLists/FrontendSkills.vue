<template>
  <div class="skill-list">
    <h2 class="section-title">Frontend</h2>
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
</template>

<script>
export default {
  name: "FrontendSkills",
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
@media screen and (max-width: 999px) {
  .section-title {
    color: var(--clear);
    opacity: 0.4;
    cursor: default;
  }
  .skill-list {
    position: relative;
    width: 12rem;
    top: clamp(6rem, -1.609rem + 12.2vw, 13rem);
    left: 1.5rem;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    transition: 0.2s;
    background-color: var(--secondary);
  }

  .skill-list .skill-item {
    text-align: justify;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
    transition: 0.2s;
    background-color: var(--primary);
    margin-top: 0.2rem;
  }

  .skill-item h2 {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    cursor: default;

    height: 1rem;
    width: 4rem;
    font-size: 0.8rem;
  }

  .skill-item .large-text {
    display: none;
  }

  .skill-item .small-text {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;

    height: 1rem;
    width: 1rem;
    padding: 0.5rem;
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
    font-size: 0.6rem;
    cursor: default;
    transition: 0.6s;
    opacity: 0.6;
  }

  .level-graph {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    width: 6rem;
  }

  span {
    margin: 0.1rem;

    width: 1rem;
    height: 0.2rem;
    background-color: var(--clear);
  }

  .empty {
    opacity: 0.4;
  }
}

@media screen and (min-width: 1000px) {
  .section-title {
    color: var(--clear);
    opacity: 0.4;
    cursor: default;
  }
  .skill-list {
    position: relative;
    max-width: clamp(59.4rem, 26.791rem + 52.2vw, 89.4rem);
    max-height: clamp(27rem, 11.783rem + 24.3vw, 41rem);
    top: clamp(6rem, -1.609rem + 12.2vw, 13rem);
    left: clamp(1rem, -3.348rem + 7vw, 5rem);
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    transition: 0.2s;
  }

  .skill-list .skill-item {
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
    font-size: clamp(0.6rem, 0.165rem + 0.7vw, 1rem);
  }

  .skill-item .small-text {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;

    height: 2rem;
    width: 2rem;
    padding: 1rem;
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
