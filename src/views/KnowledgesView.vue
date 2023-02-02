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
        <h2>{{ skill.tech }}</h2>
        <p class="large-text">{{ skill.description }}</p>
        <p class="small-text">{{ skill.level }}</p>
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
        tech: "Vue.js",
        description:
          "Vue é um framework de front-end que facilita a produção de aplicações, unindo o melhor do html, css e javascript em uma única ferramenta poderosa",
        level: "2",
        familiarity:
          "Consigo criar aplicações, integrar com back-end com facilidade",
      },
      {
        tech: "Javascript",
        description:
          "Javascript é uma poderosa ferramenta de programação que permite uma flexibilidade de desenvolvimento",
        level: "2",
        familiarity: "Intermediário",
      },
    ];
    return { skillData };
  },
};
</script>

<style scoped>
.skill-list {
  background-color: var(--primary);
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
}

.skill-item h2 {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  height: 4rem;
  width: 16.5rem;
  margin: 0 1rem 0 0;
  background-color: white;
}

.skill-item .small-text {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  height: 4rem;
  width: 5.5rem;
  margin: 0 1rem 0 0;
  background-color: gray;
}
.skill-item .large-text {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  height: 4rem;
  width: 31.5rem;
  margin: 0 1rem 0 0;
  background-color: gray;
}
</style>
