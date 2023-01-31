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
        v-for="(slide, index) in portfolioData"
        :key="index"
        :class="{ chosen: checkActual(index) }"
        @click="selectedProject = index"
      >
        <img
          v-if="!checkActual(index)"
          :src="require(`@/assets/images/${slide.image}.jpg`)"
        />
        <div v-if="!checkActual(index)" class="card_details">
          <h2>{{ slide.projectTitle }}</h2>
          <h3>{{ slide.sinopsis }}</h3>
        </div>
      </div>
    </div>
    <div class="focus" :class="{ valid: checkValid() }">
      <h2 id="placeholder-title" v-if="selectedProject < 0">
        Selecione um projeto para ver mais informações
      </h2>
      <h2 v-if="selectedProject >= 0">
        {{ portfolioData[selectedProject].projectTitle }}
      </h2>
      <img
        v-if="selectedProject >= 0"
        :src="
          require(`@/assets/images/${portfolioData[selectedProject].image}.jpg`)
        "
      />
      <p v-if="selectedProject >= 0">
        {{ portfolioData[selectedProject].description }}
      </p>
      <p v-if="selectedProject >= 0">
        {{ portfolioData[selectedProject].frontend }}
      </p>
      <p v-if="selectedProject >= 0">
        {{ portfolioData[selectedProject].backend }}
      </p>
      <a
        v-if="selectedProject >= 0"
        :href="portfolioData[selectedProject].address"
      >
        link
      </a>
      <a
        v-if="selectedProject >= 0"
        :href="portfolioData[selectedProject].github"
      >
        Github
      </a>
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

    const checkValid = () => {
      if (selectedProject.value >= 0) return true;
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
    return { portfolioData, selectedProject, checkActual, checkValid };
  },
};
</script>

<style scoped>
.header {
  position: absolute;
  top: 2.5rem;
  left: 5rem;
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
  top: 8.5rem;
  left: 5rem;
  height: 2rem;
  width: 23rem;
  z-index: 101;
}

.deck {
  background-color: var(--secondary);
  height: 41rem;
  margin: 13rem 0 0 5rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
}

.card {
  display: flex;
  flex-flow: row nowrap;
  background-color: var(--primary-light);
  color: var(--clear);
  position: relative;

  width: 30rem;
  height: 8rem;
  margin: 0.1rem;

  transition: 0.2s;
  cursor: pointer;
}

.card:hover:not(chosen) {
  background-color: var(--primary);
}

.chosen {
  background-color: var(--primary);
  height: 3rem;
}

.close {
  z-index: 100;
  position: absolute;
  left: 92.5rem;
  top: 14rem;
  cursor: pointer;
}

.card img {
  object-fit: contain;
  opacity: 0.7;
  height: 8rem;
  max-width: 100%;
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

.focus {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 35.4rem;
  top: 13.1rem;
  background-color: var(--secondary);

  width: 59rem;
  height: 35.8rem;
}

.valid {
  text-align: justify;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: var(--primary);
}

#placeholder-title {
  color: var(--primary-light);
}

.focus img {
  object-fit: contain;
  opacity: 0.7;
  width: 5rem;
  max-height: 100%;
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
