<script setup lang="ts">
import { ref } from "vue";
import Swal from "sweetalert2";

// definePageMeta({
//   layout: "blank",
// });
const { signIn } = useAuth();
const loginForm = ref({ email: "", password: "" });

const checkbox = ref(true);
const login = async () => {
  // handle login
  try {
    await signIn(loginForm.value, { callbackUrl: "/", external: true });
  } catch (err) {
    Swal.fire({
      toast: true,
      position: "top-end",
      title: "Login Failed",
      icon: "error",
      iconColor: "white",
      customClass: {
        popup: "colored-toast",
      },
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  }
};
</script>

<template>
  <v-row class="d-flex mb-3">
    <v-col cols="12">
      <v-label class="font-weight-bold mb-1">Username</v-label>
      <v-text-field
        v-model="loginForm.email"
        variant="outlined"
        hide-details
        color="primary"
      ></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-label class="font-weight-bold mb-1">Password</v-label>
      <v-text-field
        v-model="loginForm.password"
        variant="outlined"
        type="password"
        hide-details
        color="primary"
      ></v-text-field>
    </v-col>
    <v-col cols="12" class="pt-0">
      <div class="d-flex flex-wrap align-center ml-n2">
        <v-checkbox v-model="checkbox" color="primary" hide-details>
          <template v-slot:label class="text-body-1"> Remember me </template>
        </v-checkbox>
        <div class="ml-sm-auto">
          <NuxtLink
            to="/"
            class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium"
            >Forgot Password ?</NuxtLink
          >
        </div>
      </div>
    </v-col>
    <v-col cols="12" class="pt-0">
      <v-btn class="text-white" size="large" block flat @click="login"
        >Sign in</v-btn
      >
    </v-col>
  </v-row>
</template>
<style scoped></style>
