<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <h1>Sign up</h1>
      <br />

      <label for="email">Email:</label>
      <input
        type="email"
        name="email"
        v-model="email"
        required
        class="bg-green-300 m-2 p-2 rounded-lg"
      />

      <label for="password">Password:</label>
      <input
        type="password"
        name="password"
        v-model="password"
        required
        class="bg-green-300 m-2 p-2 rounded-lg"
      />

      <button class="bg-gray-400 m-8 p-2 rounded-lg">Sign up</button>

      <div></div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useSignup from "../composables/useSignup";

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const { signup, error } = useSignup();
    const router = useRouter();

    const handleSubmit = async () => {
      console.log(email.value, password.value);
      await signup(email.value, password.value);

      if (!error.value) {
        router.push("/");
      }
    };

    return {
      email,
      password,
      handleSubmit,
    };
  },
};
</script>
