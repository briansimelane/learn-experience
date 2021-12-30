<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <h1>Login</h1>
      <br />

      <label for="email">Email:</label>
      <input
        type="email"
        name="email"
        v-model="email"
        required
        class="bg-yellow-100 m-2 p-2 rounded-sm"
      />

      <label for="password">Password:</label>
      <input
        type="password"
        name="password"
        v-model="password"
        required
        class="bg-yellow-100 m-2 p-2 rounded-sm"
      />

      <button class="bg-blue-400 m-8 p-2 rounded-sm">Login</button>

      <div v-if="error">{{ error }}</div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useLogin from "../composables/useLogin";

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const { login, error } = useLogin();
    const router = useRouter();

    const handleSubmit = async () => {
      console.log('Login function: ', email.value, password.value);
      await login(email.value, password.value);

      if (!error.value) {
        router.push("/authenticated");
      }
    };

    return {
      email,
      password,
      handleSubmit, error
    };
  },
};
</script>
