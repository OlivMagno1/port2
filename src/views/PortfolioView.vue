<template>
  <div class="background-port bg">
    <div
      class="image-zoom-container"
      v-show="imageZoom >= 0"
      @click="changeZoom(-1)"
    >
      <img
        class="image-zoom"
        v-if="imageZoom >= 0"
        :src="
          require(`@/assets/images/${portfolioData[selectedProject].folder}/${portfolioData[selectedProject].image[imageZoom]}.jpg`)
        "
      />
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
          @click="changeZoom(imgIndex)"
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
    const imageZoom = ref(-1);

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
      if (projectPage.value + 8 > portfolioData.length) return true;
      else return false;
    };

    const changeZoom = (n) => {
      imageZoom.value = n;
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
          "API simples para um sistema de cadastro/login. Usuários novos devem fazer o cadastro antes de utilizar o sistema. A interação é feita utilizando e-mail e senha. A aplicação foi desenvolvida em Vue3. A verificação de login ou cadastro é realizada pelo Stytch, implementado no sistema por meio de funções serverless do Netlify.",
      },
      {
        projectTitle: "Portfolio",
        address: "https://jazzy-swan-6d4e74.netlify.app",
        github: "https://github.com/OlivMagno1/folio",
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
        tags: ["Design", "Vue.js", "Javascript"],
        sinopsis: "Página em brochura para uma empresa de móveis planejados",
        description:
          "Design minimalista de uma página de apresentação em brochura para uma empresa de móveis planejados. Apresenta além da introdução, os trabalhos já concluídos da empresa e as informações de contato. A página é responsiva, portanto funciona bem para usuários em desktop e mobile.",
      },
      {
        projectTitle: "Café",
        address: "https://tranquil-clafoutis-236e51.netlify.app",
        github: "https://github.com/OlivMagno1/cafe",
        folder: "cafe",
        image: ["cafe1", "cafe2", "cafe3"],
        tags: ["Vue.js", "Interface", "Responsivo"],
        sinopsis: "Exercício de cópia de interface por observação",
        description:
          "Exercício de Reprodução da interface do website do Lobe (https://www.lobe.ai) apenas por observação. O foco deste exercício é apresentar a maior semelhança possível entre o design original e a reprodução, inclusive no comportamento responsivo da página",
      },
      {
        projectTitle: "Plataforma",
        address: "https://clinquant-malasada-132d92.netlify.app",
        github: "https://github.com/OlivMagno1/plataforma",
        folder: "plataforma",
        image: ["plataforma1", "plataforma2", "plataforma3"],
        tags: ["Vue.js", "Interface", "Responsivo"],
        sinopsis: "Exercício de cópia de interface por observação",
        description:
          "Exercício de Reprodução da interface do website do Ableton (https://www.ableton.com/en/about/) apenas por observação. O foco deste exercício é apresentar a maior semelhança possível entre o design original e a reprodução, inclusive no comportamento responsivo da página",
      },
    ];
    return {
      portfolioData,
      selectedProject,
      projectPage,
      imageZoom,
      changeProject,
      checkActual,
      checkValid,
      nextPage,
      prevPage,
      changeZoom,
      checkFirstPage,
      checkLastPage,
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 999px) {
  .deck {
    width: clamp(18rem, 4.118rem + 69.4vw, 47.5rem);
    flex-flow: row wrap;
    align-content: flex-start;
  }

  .close {
    top: clamp(0.5rem, 1.25vw, 1rem);
    left: clamp(17rem, 3.118rem + 69.4vw, 46.5rem);
  }

  .card {
    width: clamp(5.6rem, 1.176rem + 22.1vw, 15rem);
    height: clamp(5.6rem, 1.176rem + 22.1vw, 15rem);
    margin: 0.2rem;
  }

  .card h2 {
    font-family: "Unbounded";
    font-size: 0.7rem;
    background-color: var(--accent);
    width: clamp(5.6rem, 1.176rem + 22.1vw, 15rem);
    color: var(--primary);
  }

  .card img {
    height: clamp(5.6rem, 1.176rem + 22.1vw, 15rem);
  }

  .card_details {
    position: absolute;
    bottom: 0;
  }

  .card_details p {
    display: none;
  }

  .deck-navigation {
    top: clamp(18rem, 4.118rem + 69.4vw, 47.5rem);
    height: clamp(2rem, 1.059rem + 4.7vw, 4rem);
    width: clamp(18rem, 4.118rem + 69.4vw, 47.5rem);
  }

  .focus:not(.valid) {
    display: none;
  }

  .focus {
    width: clamp(18rem, 4.118rem + 69.4vw, 47.5rem);
  }

  .focus h2 {
    font-size: 1rem;
    color: var(--clear);
    margin: 0.5rem;
  }

  .focus .album {
    padding: 0.2rem;
    height: 7rem;
  }

  .focus .album img {
    height: 10rem;
  }

  .focus p {
    margin: 0.5rem;
    color: var(--accent);
    font-size: 0.8rem;
  }

  .focus .container {
    width: 18rem;
  }

  h3 {
    font-weight: 400;
    font-size: 0.9rem;
  }

  .image-zoom-container {
    position: fixed;
  }

  .image-zoom {
    width: clamp(18rem, 4.118rem + 69.4vw, 47.5rem);
    margin: 3rem 1rem;
  }
}
@media screen and (min-width: 1000px) {
  .deck {
    height: clamp(27rem, 11.783rem + 24.3vw, 41rem);
    top: clamp(6rem, -1.609rem + 12.2vw, 13rem);
    left: clamp(1rem, -3.348rem + 7vw, 5rem);
    flex-flow: column nowrap;
  }

  .close {
    top: clamp(0.5rem, 1.25vw, 1rem);
    left: clamp(57.5rem, 46.63rem + 17.4vw, 67.5rem);
    cursor: pointer;
    transition: 0.2s;
  }

  .close:hover {
    transform: scale(1.5);
  }

  .card {
    display: flex;
    flex-flow: row nowrap;

    width: clamp(20rem, 9.13rem + 17.4vw, 30rem);
    height: clamp(3.2rem, 1.243rem + 3.1vw, 5rem);
    margin: clamp(0.05rem, 0.125vw, 0.1rem);
  }

  .card:hover:not(chosen) {
    background-color: var(--primary);
  }

  .chosen {
    opacity: 0.3;
  }

  .card img {
    height: clamp(3.2rem, 1.243rem + 3.1vw, 5rem);
  }

  .card_details {
    display: flex;
    margin: 0 1rem;
  }

  .card_details p {
    font-size: clamp(0.6rem, 0.383rem + 0.3vw, 0.8rem);
  }

  .deck-navigation {
    bottom: 0;
    height: clamp(3.2rem, 1.243rem + 3.1vw, 5rem);
    width: clamp(20rem, 9.13rem + 17.4vw, 30rem);
    margin: 0.1rem;
  }

  .navigation-button:hover {
    background-color: var(--primary-light);
  }

  .focus {
    left: clamp(21.2rem, 5.44rem + 25.2vw, 35.7rem);
    top: clamp(6rem, -1.609rem + 12.2vw, 13rem);

    align-items: center;
    justify-content: center;

    width: 39rem;
    height: clamp(27rem, 11.783rem + 24.3vw, 41rem);
    margin: clamp(0.05rem, 0.125vw, 0.1rem);
  }

  .focus h2 {
    font-size: 3rem;
    margin: 1rem 0 0 1rem;
  }

  .focus .album {
    margin: 1rem 0 0 1rem;
    padding: 0.5rem;
    height: clamp(10rem, 4.565rem + 8.7vw, 15rem);
  }

  .focus .album img {
    height: 15rem;
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
    font-size: clamp(0.8rem, 0.583rem + 0.3vw, 1rem);
  }

  .focus .container {
    width: 39rem;
  }

  .link {
    position: absolute;
    bottom: 0.5rem;
    left: 0.5rem;
  }

  .focus .container a:hover {
    opacity: 0.3;
  }

  h2:not(.header h2) {
    font-family: "Unbounded";
    font-size: clamp(1rem, 0.13rem + 1.4vw, 1.8rem);
    color: var(--accent);
  }

  h3 {
    font-weight: 400;
    font-size: 0.9rem;
  }

  .image-zoom-container {
    position: absolute;
    opacity: 0.4;
  }

  .image-zoom-container:hover {
    opacity: 1;
  }

  .image-zoom {
    width: clamp(20rem, 3.696rem + 26.1vw, 35rem);
    margin: 2.5rem;
  }
}

.deck {
  position: relative;
  background-color: var(--secondary);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

.close {
  z-index: 100;
  position: absolute;
}

.card {
  background-color: var(--primary-light);
  color: var(--clear);
  position: relative;
  transition: 0.2s;
  cursor: pointer;
}

.card img {
  object-fit: contain;
  opacity: 0.7;
  max-width: 100%;
}
.card_details {
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: space-evenly;
  text-align: justify;
}

.deck-navigation {
  position: absolute;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
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

.off {
  cursor: default;
  opacity: 0;
}

.focus {
  position: absolute;

  display: flex;
  flex-flow: column nowrap;
}

.focus .album {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
}

.focus .album img {
  margin: 0.5rem;
  width: auto;
}

.focus .container {
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

.valid {
  text-align: justify;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: var(--primary);
}

#placeholder-title {
  color: var(--accent);
  cursor: default;
}

.focus img {
  object-fit: contain;
  opacity: 0.7;
  width: 5rem;
  max-height: 100%;
}

.image-zoom-container {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1500;
  backdrop-filter: blur(5px);
  transition: 0.2s;
}

.image-zoom {
  height: auto;
  transition: 0.2s;
}
</style>
