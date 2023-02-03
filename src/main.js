import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

/*fontawesome*/
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faVuejs, faSquareJs } from "@fortawesome/free-brands-svg-icons";
library.add(faChevronRight);
library.add(faChevronLeft);
library.add(faVuejs);
library.add(faSquareJs);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
