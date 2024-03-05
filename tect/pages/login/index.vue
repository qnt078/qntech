<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="loginForm.email" type="email" placeholder="Email" />
      <input
        v-model="loginForm.password"
        type="password"
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>

    <h2>Register</h2>
    <form @submit.prevent="register">
      <input v-model="registerForm.email" type="email" placeholder="Email" />
      <input
        v-model="registerForm.password"
        type="password"
        placeholder="Password"
      />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script setup>
const loginForm = ref({ email: "", password: "" });
const registerForm = ref({ email: "", password: "" });

const login = () => {
  // handle login
  console.log("Login", loginForm.value);
};

const register = () => {
  // handle register
  console.log("Register", registerForm.value);
};
</script>

<style scoped></style>
