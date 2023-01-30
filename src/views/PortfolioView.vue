<template>
  <div class="background">
    <div class="header">
      <h1>Projetos</h1>
      <p>
        Aqui estão todos os projetos que eu completo. Eles também podem ser
        acessados pelo github.
      </p>
    </div>
    <div class="subheader">
      <router-link to="/">Home</router-link>
      <router-link to="/knowledge">Conhecimentos</router-link>
    </div>
    <div class="deck">
      <div
        class="close"
        v-show="selectedProject != -1"
        @click="selectedProject = -1"
      >
        x
      </div>
      <div
        class="card"
        :class="{
          expanded: checkActual(index),
          short: !checkActual(index),
        }"
        v-for="(slide, index) in portfolioData"
        :key="index"
        @click="selectedProject = index"
      >
        <img :src="require(`@/assets/images/${slide.image}.jpg`)" />
        <div class="card_details">
          <h2>{{ slide.projectTitle }}</h2>
          <h3 v-if="selectedProject != index">{{ slide.sinopsis }}</h3>
          <p v-if="selectedProject === index">
            {{ slide.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "PortfolioView",
  setup() {
    const selectedProject = ref(-1);

    const checkActual = (index) => {
      if (selectedProject.value === index) return true;
      else return false;
    };

    const portfolioData = [
      {
        projectTitle: "Aplicativo",
        address: "https://admirable-baklava-67109e.netlify.app/",
        github: "https://github.com/OlivMagno1/loginsystem",
        image: "placeholder",
        frontend: ["Vue.js", "Javascript"],
        backend: ["Stytch", "Funções Serverless"],
        sinopsis: "Sistema de Cadastro e Login com base em e-mail e senha",
        description:
          "Website desenvolvido em Vue3, apresentando uma interface simples para um usuário fazer login. Caso o usuário não possua uma conta registrada, pode se cadastrar pelo mesmo sistema. A interação é feita utilizando e-mail e senha. A aplicação foi desenvolvida em Vue3. A verificação de login ou cadastro é realizada pelo Stytch, implementado no sistema por meio de funções serverless do Netlify.",
      },
      {
        projectTitle: "Portfolio",
        address: "placeholder",
        github: "placeholder",
        image: "folio",
        frontend: ["Vue.js", "Javascript"],
        backend: "",
        sinopsis: "Website de um portfolio",
        description:
          "Meu portfolio anterior. Utilizava a implementação de um carrossel para navegar entre os projetos, foi descontinuado pois dificulta a visualização com mais de 3 projetos no portfolio",
      },
      {
        projectTitle: "Movelaria",
        address: "https://elaborate-granita-5568c7.netlify.app",
        github: "https://github.com/OlivMagno1/arquimovelaria",
        image: "moveis",
        frontend: ["Vue.js", "Javascript"],
        backend: "",
        sinopsis:
          "Website de apresentação para uma empresa de móveis planejados",
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
        sinopsis: "Exercício de cópia de interface por observação",
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
        sinopsis: "Exercício de cópia de interface por observação",
        description:
          "Exercício de cópia da interface visual do Ableton apenas por observação",
      },
    ];
    return { portfolioData, selectedProject, checkActual };
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
  color: var(--clear);
}

.subheader {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  position: absolute;
  top: 6rem;
  left: 0;
  height: 2rem;
  width: 23rem;
  z-index: 101;
}

.deck {
  background-color: var(--secondary);
  width: 80rem;
  height: 41rem;
  margin: 8rem 0 0 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
}

.card {
  display: flex;
  flex-flow: row nowrap;

  margin: 0.1rem;
  background-color: var(--primary);
  color: var(--clear);
  transition: 0.2s;
}

.short {
  cursor: pointer;
  position: relative;
  width: 30rem;
  height: 8rem;
}

.expanded {
  position: absolute;
  left: 30.2rem;
  width: 60rem;
  height: 40rem;
}

.close {
  z-index: 100;
  position: absolute;
  left: 87.5rem;
  top: 9rem;
  cursor: pointer;
}

.short:hover {
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

.short_card_details {
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
</style>
