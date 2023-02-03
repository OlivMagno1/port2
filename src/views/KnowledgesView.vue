<template>
  <div class="background">
    <div class="header">
      <div class="stack">
        <h2 class="name">Magno Oliveira</h2>
        <h1>Conhecimentos</h1>
      </div>
      <p>Aqui estão descritas todas as tecnologias que geralmente uso.</p>
    </div>
    <div class="menu-header">
      <router-link to="/">Home</router-link>
      <router-link to="/portfolio">Projetos</router-link>
    </div>
    <div class="skill-list">
      <div class="skill-item" v-for="(skill, index) in skillData" :key="index">
        <font-awesome-icon :icon="skill.icon" class="fa-3x small-text" />
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
        <p class="large-text">{{ skill.familiarity }}</p>
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
        icon: "fa-brands fa-vuejs",
        tech: "Vue.js",
        description:
          "Vue é um framework de front-end que facilita a produção de aplicações, unindo o melhor do html, css e javascript em uma única ferramenta poderosa",
        levelName: "intermediário",
        levelNum: 2,
        familiarity:
          "Consigo criar aplicações, integrar com back-end com facilidade",
      },
      {
        icon: "fa-brands fa-vuejs",
        tech: "Vue.js",
        description:
          "Vue é um framework de front-end que facilita a produção de aplicações, unindo o melhor do html, css e javascript em uma única ferramenta poderosa",
        levelName: "intermediário",
        levelNum: 2,
        familiarity:
          "Consigo criar aplicações, integrar com back-end com facilidade",
      },
      {
        icon: "fa-brands fa-vuejs",
        tech: "Vue.js",
        description:
          "Vue é um framework de front-end que facilita a produção de aplicações, unindo o melhor do html, css e javascript em uma única ferramenta poderosa",
        levelName: "intermediário",
        levelNum: 2,
        familiarity:
          "Consigo criar aplicações, integrar com back-end com facilidade",
      },
      {
        icon: "fa-brands fa-vuejs",
        tech: "Vue.js",
        description:
          "Vue é um framework de front-end que facilita a produção de aplicações, unindo o melhor do html, css e javascript em uma única ferramenta poderosa",
        levelName: "intermediário",
        levelNum: 2,
        familiarity:
          "Consigo criar aplicações, integrar com back-end com facilidade",
      },
      {
        icon: "fa-brands fa-square-js",
        tech: "Javascript",
        description:
          "Javascript é uma poderosa ferramenta de programação que permite uma flexibilidade de desenvolvimento",
        levelName: "intermediário",
        levelNum: 2,
        familiarity: "Intermediário",
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
.skill-list {
  width: 89.4rem;
  height: 35.8rem;
  margin: 13rem 0 0 5rem;
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

  height: 4rem;
  width: 10rem;
  margin: 0 1rem 0 0;
}

.skill-item .large-text {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  height: 4rem;
  width: 30.45rem;
  margin: 0 1rem 0 1rem;
}

.skill-item .small-text {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  height: 4rem;
  width: 5.5rem;
  margin: 0 1rem 0 0;
}

.level-container {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  height: 4rem;
  color: var(--accent);
}

.level-container p {
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
  width: 10rem;
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
</style>
