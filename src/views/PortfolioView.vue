<template>
  <div class="background">
    <div class="header">
      <h2>Magno Oliveira</h2>
      <h1>Projetos</h1>
    </div>
    <div class="menu-header">
      <router-link to="/">Home</router-link>
      <router-link to="/knowledge">Conhecimentos</router-link>
    </div>
    <div class="deck">
      <div
        class="close"
        v-show="selectedProject != -1"
        @click="selectedProject = -1"
      >
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </div>
      <div
        class="card"
        v-for="(slide, index) in portfolioData.slice(
          projectPage,
          projectPage + 7
        )"
        :key="index"
        :class="{ chosen: checkActual(index + projectPage) }"
        @click="changeProject(index)"
      >
        <img
          :src="
            require(`@/assets/images/${
              portfolioData[index + projectPage].folder
            }/thumb.jpg`)
          "
        />
        <div class="card_details">
          <h2>{{ slide.projectTitle }}</h2>
          <p>{{ slide.sinopsis }}</p>
        </div>
      </div>
      <div class="deck-navigation">
        <div
          class="navigation-button"
          :class="{ off: checkFirstPage() }"
          @click="prevPage"
        >
          <font-awesome-icon icon="fa-solid fa-chevron-left" />
        </div>
        <p>{{ projectPage / 7 + 1 }}</p>
        <div
          class="navigation-button"
          :class="{ off: checkLastPage() }"
          @click="nextPage"
        >
          <font-awesome-icon icon="fa-solid fa-chevron-right" />
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
      <div class="album" v-if="selectedProject >= 0">
        <img
          v-for="(image, imgIndex) in portfolioData[selectedProject].image"
          :key="imgIndex"
          :src="
            require(`@/assets/images/${portfolioData[selectedProject].folder}/${image}.jpg`)
          "
        />
      </div>
      <p v-if="selectedProject >= 0">
        {{ portfolioData[selectedProject].description }}
      </p>
      <div class="container tag" v-if="selectedProject >= 0">
        <p
          v-for="(tags, tagIndex) in portfolioData[selectedProject].tags"
          :key="tagIndex"
        >
          {{ tags }}
        </p>
      </div>
      <div class="container link" v-if="selectedProject >= 0">
        <a :href="portfolioData[selectedProject].address">link</a>
        <a :href="portfolioData[selectedProject].github">Github</a>
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
    const projectPage = ref(0);

    const changeProject = (index) => {
      selectedProject.value = -1;
      setTimeout(() => {
        selectedProject.value = index + projectPage.value;
      }, "1");
      return;
    };

    const checkActual = (index) => {
      if (selectedProject.value === index) return true;
      else return false;
    };

    const checkValid = () => {
      if (selectedProject.value >= 0) return true;
      else return false;
    };

    const checkFirstPage = () => {
      if (projectPage.value === 0) return true;
      else return false;
    };

    const checkLastPage = () => {
      if (projectPage.value + 7 > portfolioData.length) return true;
      else return false;
    };

    const nextPage = () => {
      if (projectPage.value + 7 < portfolioData.length)
        projectPage.value = projectPage.value + 7;
      return;
    };

    const prevPage = () => {
      if (projectPage.value != 0) projectPage.value = projectPage.value - 7;
      return;
    };

    const portfolioData = [
      {
        projectTitle: "Aplicativo",
        address: "https://admirable-baklava-67109e.netlify.app/",
        github: "https://github.com/OlivMagno1/loginsystem",
        folder: "aplicativo",
        image: ["placeholder1"],
        tags: ["Vue.js", "Javascript", "Stytch", "Funções Serverless"],
        sinopsis: "Sistema de Cadastro e Login com base em e-mail e senha",
        description:
          "Website desenvolvido em Vue3, apresentando uma interface simples para um usuário fazer login. Caso o usuário não possua uma conta registrada, pode se cadastrar pelo mesmo sistema. A interação é feita utilizando e-mail e senha. A aplicação foi desenvolvida em Vue3. A verificação de login ou cadastro é realizada pelo Stytch, implementado no sistema por meio de funções serverless do Netlify.",
      },
      {
        projectTitle: "Portfolio",
        address: "placeholder",
        github: "placeholder",
        folder: "portfolio",
        image: ["portfolio1", "portfolio2"],
        tags: ["Vue.js", "Javascript"],
        sinopsis: "Website de um portfolio",
        description:
          "Meu portfolio anterior. Utilizava a implementação de um carrossel para navegar entre os projetos, foi descontinuado pois dificulta a visualização com mais de 3 projetos no portfolio",
      },
      {
        projectTitle: "Movelaria",
        address: "https://elaborate-granita-5568c7.netlify.app",
        github: "https://github.com/OlivMagno1/arquimovelaria",
        folder: "movelaria",
        image: ["movelaria1"],
        tags: ["Vue.js", "Javascript"],
        sinopsis:
          "Website de apresentação para uma empresa de móveis planejados",
        description:
          "Design e implementação de uma página web para uma empresa de móveis planejados",
      },
      {
        projectTitle: "Café",
        address: "https://tranquil-clafoutis-236e51.netlify.app",
        github: "https://github.com/OlivMagno1/cafe",
        folder: "cafe",
        image: ["cafe1", "cafe2", "cafe3"],
        tags: ["Vue.js", "Responsivo"],
        sinopsis: "Exercício de cópia de interface por observação",
        description:
          "Exercício de cópia da interface visual do Lobe apenas por observação",
      },
      {
        projectTitle: "Plataforma",
        address: "https://clinquant-malasada-132d92.netlify.app",
        github: "https://github.com/OlivMagno1/plataforma",
        folder: "plataforma",
        image: ["plataforma1", "plataforma2", "plataforma3"],
        tags: ["Vue.js", "Responsivo"],
        sinopsis: "Exercício de cópia de interface por observação",
        description:
          "Exercício de cópia da interface visual do Ableton apenas por observação",
      },
    ];
    return {
      portfolioData,
      selectedProject,
      projectPage,
      changeProject,
      checkActual,
      checkValid,
      nextPage,
      prevPage,
      checkFirstPage,
      checkLastPage,
    };
  },
};
</script>

<style scoped>
.deck {
  position: relative;
  background-color: var(--secondary);
  max-height: 41rem;
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
  height: 5rem;
  margin: 0.1rem;

  transition: 0.2s;
  cursor: pointer;
}

.card:hover:not(chosen) {
  background-color: var(--primary);
}

.chosen {
  opacity: 0.3;
}

.close {
  z-index: 100;
  position: absolute;
  top: 1rem;
  left: 68.8rem;
  cursor: pointer;
  transition: 0.2s;
}

.close:hover {
  transform: scale(1.5);
}

.card img {
  object-fit: contain;
  opacity: 0.7;
  height: 5rem;
  max-width: 100%;
}

.card_details {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: space-evenly;
  text-align: justify;
  margin: 0 1rem;
}

.card_details p {
  font-size: 0.8rem;
}

.deck-navigation {
  position: absolute;
  bottom: 0;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 3.6rem;
  width: 30rem;
  margin: 0.1rem;
}

.deck-navigation p {
  cursor: default;
  background-color: var(--primary-light);
  padding: 0.5rem 1.25rem;
  margin: 0 0.75rem;
}

.navigation-button {
  cursor: pointer;
  transition: 0.2s;
  padding: 0.5rem 1.25rem;
}

.navigation-button:hover {
  background-color: var(--primary-light);
}

.off {
  cursor: default;
  opacity: 0;
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

  width: 39.8rem;
  height: 41rem;
}

.focus h2 {
  font-size: 3rem;
  margin: 1rem 0 0 1rem;
}

.focus .album {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  margin: 1rem 0 0 1rem;
  padding: 0.5rem;
  height: 15rem;
}

.focus .album img {
  margin: 0.5rem;
  height: 15rem;
  width: auto;
  opacity: 0.6;
  cursor: pointer;
  transition: 0.2s;
}

.focus .album img:hover {
  opacity: 1;
}

.focus p {
  margin: 1rem;
  color: var(--clear);
  font-size: 1rem;
}

.focus .container {
  width: 39.8rem;
  margin: 0.5rem;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.tag {
  justify-content: flex-end;
}

.link {
  justify-content: flex-start;
  position: absolute;
  bottom: 0.5rem;
  left: 0.5rem;
}

.focus .container p {
  opacity: 0.3;
  color: var(--clear);
  margin-left: 1rem;
}

.focus .container a {
  color: var(--accent);
  text-decoration: none;
  font-weight: 400;
  margin-right: 1rem;
  transition: 0.2s;
}

.focus .container a:hover {
  opacity: 0.3;
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

h2:not(.header h2) {
  font-family: "Unbounded";
  font-size: 1.4rem;
  color: var(--accent);
}

h3 {
  font-weight: 400;
  font-size: 0.9rem;
}
</style>
