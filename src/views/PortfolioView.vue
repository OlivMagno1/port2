<template>
  <h1>Projetos</h1>
  <p>
    Aqui estão todos os projetos que eu completo. Eles também podem ser
    acessados pelo github.
  </p>
  <div class="deck">
    <div v-for="(slide, index) in portfolioData" :key="index" class="card">
      <img src="../assets/images/placeholder.jpg" />
      <div class="card_details">
        <h2>{{ slide.projectTitle }}</h2>
        <h3>{{ slide.description }}</h3>
        <p class="front">{{ slide.frontend }}</p>
        <p class="back">{{ slide.backend }}</p>
        <div class="links">
          <a class="link" :href="slide.address" target="_blank">
            Abrir este projeto
          </a>
          <a class="link" :href="slide.address" target="_blank">Github</a>
        </div>
      </div>
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
  justify-content: space-evenly;
}

.card {
  display: flex;
  flex-flow: row nowrap;

  width: 30rem;
  height: 15rem;
  margin: 2rem;

  border: solid;
  border-color: var(--terciary);
  border-width: 0px 1px 1px 0px;
  border-radius: 0 0 1rem 0;
}

.card img {
  object-fit: contain;
  width: 10rem;
  max-height: 100%;
}

.card_details {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: space-evenly;
  text-align: justify;
}

.card_details .links {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: space-between;
  justify-content: space-evenly;
  text-align: justify;
}
</style>
