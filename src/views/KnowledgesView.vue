<template>
  <div class="background2">
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
