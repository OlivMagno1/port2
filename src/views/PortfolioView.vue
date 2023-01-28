<template>
  <div class="background">
    <div class="header">
      <h1>Projetos</h1>
      <p>
        Aqui estão todos os projetos que eu completo. Eles também podem ser
        acessados pelo github.
      </p>
    </div>
    <div class="deck">
      <div
        class="card"
        v-for="(slide, index) in portfolioData"
        :key="index"
        @click="selectedProject = index"
      >
        <img :src="require(`@/assets/images/${slide.image}.jpg`)" />
        <div class="card_details">
          <h2>{{ slide.projectTitle }}</h2>
          <h3>{{ slide.description }}</h3>
        </div>
      </div>
    </div>
    <div class="worktable" v-for="(slide, index) in portfolioData" :key="index">
      <div class="zoomedInfo" v-if="index === selectedProject">
        <h2>{{ slide.projectTitle }}</h2>
        <h3>{{ slide.projectTitle }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "PortfolioView",
  setup() {
    const selectedProject = ref("");
    const portfolioData = [
      {
        projectTitle: "Aplicativo",
        address: "https://admirable-baklava-67109e.netlify.app/",
        github: "https://github.com/OlivMagno1/loginsystem",
        image: "placeholder",
        frontend: ["Vue.js", "Javascript"],
        backend: ["Stytch", "Funções Serverless"],
        description:
          "Sistema de Cadastro e Login com base em e-mail e senha (padrão zxcvbn)",
      },
      {
        projectTitle: "Portfolio 1.0",
        address: "placeholder",
        github: "placeholder",
        image: "folio",
        frontend: ["Vue.js", "Javascript"],
        backend: "",
        description:
          "Meu portfolio anterior. Utilizava a implementação de um carrossel para navegar entre os projetos, foi descontinuado pois dificulta a visualização com mais de 3 projetos no portfolio",
      },
      {
        projectTitle: "Arquimovelaria",
        address: "https://elaborate-granita-5568c7.netlify.app",
        github: "https://github.com/OlivMagno1/arquimovelaria",
        image: "moveis",
        frontend: ["Vue.js", "Javascript"],
        backend: "",
        description:
          "Design e implementação de uma página web para uma empresa de móveis planejados",
      },
      {
        projectTitle: "Café",
        address: "https://tranquil-clafoutis-236e51.netlify.app",
        github: "https://github.com/OlivMagno1/cafe",
        image: "caf",
        frontend: "Vue.js",
        backend: "",
        description:
          "Exercício de cópia da interface visual do Lobe apenas por observação",
      },
      {
        projectTitle: "Plataforma",
        address: "https://clinquant-malasada-132d92.netlify.app",
        github: "https://github.com/OlivMagno1/plataforma",
        image: "plat",
        frontend: "Vue.js",
        backend: "",
        description:
          "Exercício de cópia da interface visual do Ableton apenas por observação",
      },
    ];
    return { portfolioData, selectedProject };
  },
};
</script>

<style scoped>
.background {
  height: 100vh;
  display: flex;
  flex-flow: row nowrap;
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
}

.header h1 {
  font-size: 5rem;
  font-family: "Unbounded";
  font-variation-settings: "wght" 100;
}

.header p {
  font-size: 1rem;
  font-style: italic;
  font-weight: 400;
  opacity: 0.5;
  margin-bottom: 1rem;
  color: var(--secondary);
}

.deck {
  background-color: var(--secondary);
  width: 40rem;
  height: 41rem;
  margin: 2rem 0 0 0;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: flex-start;
}

.card {
  display: flex;
  flex-flow: row nowrap;
  position: relative;

  width: 30rem;
  height: 8rem;
  margin-top: 0.1rem;

  border: solid;
  background-color: var(--primary);
  border-width: 0px;
  color: var(--clear);
  transition: 0.2s;
}

.card:hover {
  background-color: var(--clear);
  color: var(--primary);
}

.card img {
  object-fit: contain;
  opacity: 0.7;
  width: 5rem;
  max-height: 100%;
  border-radius: 0.5rem 0 0 0.5rem;
}

.card_details {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: space-evenly;
  text-align: justify;
  margin: 0 1rem;
  font-size: 1rem;
}

h2 {
  font-family: "Unbounded";
  font-size: 1.4rem;
  color: var(--accent);
}

h3 {
  font-weight: 400;
  font-size: 0.9rem;
}

a,
a:visited {
  color: var(--primary);
  text-decoration: none;
  font-weight: 400;
  font-size: 0.8rem;
  transition: 0.2s;
}

a:hover,
a:hover:visited {
  color: var(--secondary);
  background-color: var(--primary);
}

.worktable {
  position: relative;
  margin: 2rem 0 0 0;
  width: 50vw;
  height: 50vh;
}

.zoomedInfo {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
