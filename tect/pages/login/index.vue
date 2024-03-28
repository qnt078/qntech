<template>
<div class="authentication">
        <v-container fluid class="pa-3">
            <v-row class="h-100vh d-flex justify-center align-center">
                <v-col cols="12" lg="4" xl="3" class="d-flex align-center">
                    <v-card rounded="md" elevation="10" class="px-sm-1 px-0 withbg mx-auto" max-width="500">
                        <v-card-item class="pa-sm-8">
                            <div class="d-flex justify-center py-4">
                                <LayoutLogo />
                            </div>
                 
                            <AuthLoginForm />
                            <h6 class="text-body-2 text-muted  d-flex justify-center align-center mt-3">
                                Don't have an account?
                                <NuxtLink to="/register"
                                    class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium pl-2">
                                    Create an account</NuxtLink>
                            </h6>
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
import Swal from "sweetalert2";

// definePageMeta({
//   layout: "blank",
// });
const {signIn} = useAuth();
const loginForm = ref({ email: "", password: "" });
const registerForm = ref({ email: "", password: "" });

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

const register = async () => {
  try {
    await test.signOut({ callbackUrl: "/" });
  } catch (err) {
    console.log(err);
  }
};
</script>

<style>
.colored-toast.swal2-icon-error {
  background-color: #f27474 !important;
}
.colored-toast.swal2-icon-success {
  background-color: #a5dc86 !important;
}

.colored-toast .swal2-title {
  color: white;
}

.colored-toast .swal2-close {
  color: white;
}

.colored-toast .swal2-html-container {
  color: white;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 1.5rem;
    font-weight: 700;
    margin-left: 10px;
  }
}
</style>
