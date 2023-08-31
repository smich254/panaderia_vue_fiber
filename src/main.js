import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Asegúrate de que el router está siendo importado aquí

createApp(App).use(router).mount("#app"); // Asegúrate de que estás usando el router aquí
