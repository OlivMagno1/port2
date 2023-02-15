import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

/*fontawesome*/
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faXmark,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import {
  faVuejs,
  faSquareJs,
  faHtml5,
  faCss3Alt,
  faJava,
} from "@fortawesome/free-brands-svg-icons";

library.add(faChevronRight);
library.add(faChevronLeft);
library.add(faXmark);
library.add(faVuejs);
library.add(faSquareJs);
library.add(faHtml5);
library.add(faCss3Alt);
library.add(faJava);
library.add(faCode);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
