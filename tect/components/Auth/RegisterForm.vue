<script setup lang="ts">
import { ref } from "vue";
import Swal from "sweetalert2";
const { signUp } = useAuth();

const registerForm = ref({
  email: "",
  name: "",
  password: "",
  otp: Math.floor(100000 + Math.random() * 900000), //6 digit random number
});

const register = async () => {
  try {
    await signUp(registerForm.value, { callbackUrl: "/", external: true });
    await Swal.fire({
      toast: true,
      position: "top-end",
      title: "Registration Successful",
      icon: "success",
      iconColor: "white",
      customClass: {
        popup: "colored-toast",
      },
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  } catch (err : any) {
    console.log(err);
    Swal.fire({
      toast: true,
      position: "top-end",
      title: "Registration Failed",
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
      <v-label class="font-weight-bold mb-1">Name</v-label>
      <v-text-field
        v-model="registerForm.name"
        variant="outlined"
        hide-details
        color="primary"
      ></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-label class="font-weight-bold mb-1">Email Address</v-label>
      <v-text-field
        v-model="registerForm.email"
        variant="outlined"
        type="email"
        hide-details
        color="primary"
      ></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-label class="font-weight-bold mb-1">Password</v-label>
      <v-text-field
        v-model="registerForm.password"
        variant="outlined"
        type="password"
        hide-details
        color="primary"
      ></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-btn class="text-white" size="large" block flat @click="register"
        >Sign up</v-btn
      >
    </v-col>
  </v-row>
</template>
