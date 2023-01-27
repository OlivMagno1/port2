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
      <div v-for="(slide, index) in portfolioData" :key="index" class="card">
        <img :src="require(`@/assets/images/${slide.image}.jpg`)" />
        <div class="card_details">
          <h2>{{ slide.projectTitle }}</h2>
          <h3>{{ slide.description }}</h3>
          <p class="front">{{ slide.frontend }}</p>
          <p class="back">{{ slide.backend }}</p>
          <div class="links">
            <a class="link" :href="slide.address" target="_blank">
              Abrir este projeto
            </a>
            <a class="link" :href="slide.github" target="_blank">Github</a>
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
    return { portfolioData };
  },
};
</script>

<style scoped>
.background {
  height: 100vh;
}

.header {
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
}

.header h1 {
  font-size: 5rem;
  margin-left: 8rem;
}

.header p {
  font-size: 0.8rem;
  font-style: italic;
  opacity: 0.5;
  margin-bottom: 1rem;
}

.deck {
  width: calc(100vw-3rem);
  margin: 2rem 0 0 8rem;
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
  height: 15rem;
  margin: 0 4rem 4rem 0;

  border: solid;
  background-color: var(--background-alt);
  border-width: 0px;
  border-radius: 0.5rem;
  color: var(--font-alt);
}

.card img {
  object-fit: contain;
  opacity: 0.7;
  width: 10rem;
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
  font-size: 0.8rem;
}

.card_details .links {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: space-between;
  justify-content: space-evenly;
  text-align: justify;
}

h2 {
  font-size: 1.4rem;
}

h3 {
  font-weight: 100;
  font-size: 0.9rem;
}

a {
  color: var(--font-alt);
  text-decoration: none;
  font-weight: 400;
  font-size: 0.8rem;
  transition: 0.2s;
}

a:hover {
  color: var(--font-hover);
}

a:visited {
  color: var(--font-visited);
}
</style>
