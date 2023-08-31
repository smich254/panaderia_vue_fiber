import { createRouter, createWebHistory } from "vue-router";
import Login from "@/components/Login.vue";
import AdminLogin from "@/components/AdminLogin.vue";

// Define las rutas
const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/admin-login",
    name: "AdminLogin",
    component: AdminLogin,
  },
  // ...otros caminos
];

// Crea el enrutador
const router = createRouter({
  history: createWebHistory(import.meta.env.VUE_APP_BASE_URL || "/"),
  routes,
});

export default router;
