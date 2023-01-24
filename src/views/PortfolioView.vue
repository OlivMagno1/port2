<template>
  <h1>Projetos</h1>
  <p>
    Aqui estão todos os projetos que eu completo. Eles também podem ser
    acessados pelo github.
  </p>
  <div class="deck">
    <div v-for="(slide, index) in portfolioData" :key="index" class="card">
      <h2>{{ slide.projectTitle }}</h2>
      <h3>{{ slide.description }}</h3>
      <p>{{ slide.frontend }}</p>
      <p>{{ slide.backend }}</p>
      <a :href="slide.address" target="_blank">Abrir este projeto</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioView",
  setup() {
    const portfolioData = [
      {
        projectTitle: "Aplicativo",
        address: "https://elaborate-granita-5568c7.netlify.app",
        image: "moveis",
        frontend: ["Vue.js", "Javascript"],
        backend: ["Stytch", "Funções Serverless"],
        description:
          "Sistema de Cadastro e Login com base em e-mail e senha (padrão zxcvbn)",
      },
      {
        projectTitle: "Arquimovelaria",
        address: "https://elaborate-granita-5568c7.netlify.app",
        image: "moveis",
        frontend: ["Vue.js", "Javascript"],
        backend: "",
        description:
          "Design e implementação de uma página web para uma empresa de móveis planejados",
      },
      {
        projectTitle: "Café",
        address: "https://tranquil-clafoutis-236e51.netlify.app",
        image: "cafe",
        frontend: "Vue.js",
        backend: "",
        description:
          "Exercício de cópia da interface visual do Lobe apenas por observação",
      },
      {
        projectTitle: "Plataforma",
        address: "https://clinquant-malasada-132d92.netlify.app",
        image: "plataforma",
        tags: ["tag1", "tag2", "tag3"],
        description:
          "Exercício de cópia da interface visual do Ableton apenas por observação",
      },
    ];
    return { portfolioData };
  },
};
</script>

<style scoped>
.deck {
  width: 100vw;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
}

.card {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  text-align: justify;

  height: 18rem;
  width: 30rem;
  margin: 1rem;
  padding: 1rem;

  border: 1px solid black;
}
</style>
