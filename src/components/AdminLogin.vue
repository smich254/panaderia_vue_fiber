<template>
  <div>
    <h1>Login Admin</h1>
    <form @submit.prevent="adminLogin">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" @input="validateEmail" />
        <p v-if="emailError">{{ emailError }}</p>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
        <p v-if="!password">Password is required.</p>
      </div>
      <div>
        <label for="adminCode">Admin Code:</label>
        <input type="text" id="adminCode" v-model="adminCode" />
        <p v-if="!adminCode">Admin code is required.</p>
      </div>
      <button type="submit" :disabled="!isValid">Login as Admin</button>
    </form>
  </div>
</template>

<script>
// Importa la función de login del administrador desde el servicio de API
import { adminLogin as adminLoginApi } from "@/services/api";

export default {
  data() {
    return {
      email: "",
      password: "",
      adminCode: "",
      emailError: "",
    };
  },
  computed: {
    isValid() {
      return this.email && !this.emailError && this.password && this.adminCode;
    },
  },
  methods: {
    validateEmail() {
      const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      this.emailError = re.test(this.email) ? "" : "Invalid email";
    },
    async adminLogin() {
      if (this.isValid) {
        try {
          const data = await adminLoginApi(
            this.email,
            this.password,
            this.adminCode
          );
          console.log("Admin login successful:", data);
          // Aquí podrías redirigir al admin o hacer algo más
        } catch (error) {
          console.error("An error occurred while logging in:", error);
          // Manejar el error, por ejemplo, mostrando un mensaje al usuario
        }
      }
    },
  },
};
</script>

<style scoped>
/* tus estilos aquí */
</style>
