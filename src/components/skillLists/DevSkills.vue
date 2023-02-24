<template>
  <div class="skill-list">
    <h2 class="section-title">Dev</h2>
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
        icon: "fa-solid fa-code",
        tech: "C/C++",
        description:
          "Linguagem estrutural de baixo nível. Foi a base de muitos sistemas operacionais, drivers, e aplicações, porém o código compilado fica atrelado à arquitetura do sistema.",
        levelName: "avançado",
        levelNum: 3,
      },
      {
        icon: "fa-brands fa-java",
        tech: "Java",
        description:
          "Linguagem orientada a objetos de alto nível. O código de uma aplicação em Java pode ser executado em qualquer máquina sem a necessidade de ser compilado novamente. Bastante presente em aplicações web de cliente-servidor.",
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
    font-weight: 100;
    color: var(--clear);
    opacity: 0.8;
    cursor: default;
    font-size: 2rem;
  }

  .skill-list {
    position: relative;
    left: clamp(1.25rem, -1.161rem + 10.7vw, 5rem);
    top: clamp(6rem, -1.609rem + 12.2vw, 13rem);
    width: clamp(20rem, 2.321rem + 78.6vw, 47.5rem);
    margin-bottom: 1rem;
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
    flex-flow: row nowrap;
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

    height: 6.79rem;
    width: clamp(8.57rem, 0.995rem + 33.7vw, 20.354rem);
    font-size: 1.4rem;
  }

  .skill-item .small-text {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;

    height: 4.79rem;
    width: clamp(1.86rem, 0.024rem + 8.3vw, 4.79rem);
    padding: clamp(0.5rem, 0.179rem + 1.4vw, 1rem);
  }

  .skill-item .large-text {
    display: none;
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
    width: clamp(7.57rem, -0.005rem + 33.7vw, 19.354rem);
  }

  span {
    margin: clamp(0.1rem, -0.157rem + 1.1vw, 0.5rem) 0.1rem;

    width: clamp(1rem, 0.036rem + 4.3vw, 2.5rem);
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
