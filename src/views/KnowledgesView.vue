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
    <FrontendSkills />
    <DevSkills />
  </div>
</template>

<script>
import FrontendSkills from "../components/skillLists/FrontendSkills.vue";
import DevSkills from "../components/skillLists/DevSkills.vue";

export default {
  name: "PortfolioView",
  components: {
    FrontendSkills,
    DevSkills,
  },
};
</script>
