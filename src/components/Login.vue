<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
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
      <button type="submit" :disabled="!isValid">Login</button>
    </form>
  </div>
</template>

<script>
// Importa la función de login del usuario desde el servicio de API
import { userLogin } from "@/services/api";

export default {
  data() {
    return {
      email: "",
      password: "",
      emailError: "",
    };
  },
  computed: {
    isValid() {
      return this.email && !this.emailError && this.password;
    },
  },
  methods: {
    validateEmail() {
      const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      this.emailError = re.test(this.email) ? "" : "Invalid email";
    },
    async login() {
      if (this.isValid) {
        try {
          const data = await userLogin(this.email, this.password);
          console.log("Login successful:", data);
          // Aquí podrías redirigir al usuario o hacer algo más
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
