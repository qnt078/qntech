<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-side-icon
        class="mobile-nav"
        style="cursor: pointer; width: 100%"
      >
        <div>
          <div class="logo" style="cursor: pointer" @click="goToHome()">
            <img
              class="inline-block"
              src="https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/logo.svg"
            />
            <span class="text-gradient">foodwaNGon</span>
          </div>
        </div>
      </v-toolbar-side-icon>
      <div class="navbar">
        <v-container>
          <v-row>
            <v-col cols="4">
              <div class="logo" style="cursor: pointer" @click="goToHome()">
                <img
                  class="inline-block"
                  src="https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/logo.svg"
                />
                <span class="text-gradient">foodwaNGon</span>
              </div>
            </v-col>
            <v-col cols="4">
              <div class="location">
                <p class="font-weight-bold">Deliver to:</p>
                <v-icon color="warning">mdi-map-marker</v-icon>
                <span> Mirpur 1 Bus Stand, Dhaka </span>
              </div>
            </v-col>
            <v-col cols="4">
              <div class="account">
                <v-icon color="primary">mdi-cart-heart</v-icon>
                <v-btn color="primary" variant="tonal" @click="login()">
                  <v-icon>mdi-account</v-icon>
                  Login
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-app-bar>
    <v-bottom-navigation v-model="drawer" class="mobile-only w-100" app>
      <div class="bottom-naviga">
        <v-icon
          :color="selectedIcon === 'home' ? 'secondary' : 'primary'"
          @click="selectedIcon = 'home'"
          >mdi-home</v-icon
        >
        <v-icon
          :color="selectedIcon === 'heart' ? 'secondary' : 'primary'"
          @click="selectedIcon = 'heart'"
          >mdi-heart</v-icon
        >
        <v-icon
          :color="selectedIcon === 'cart' ? 'secondary' : 'primary'"
          @click="selectedIcon = 'cart'"
          >mdi-cart</v-icon
        >
        <v-icon
          :color="selectedIcon === 'account' ? 'secondary' : 'primary'"
          @click="selectedIcon = 'account'"
          >mdi-account</v-icon
        >
      </div>
    </v-bottom-navigation>

    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script lang="ts">
export default {
  name: "DefaultLayout",
  data() {
    return {
      drawer: false,
      selectedIcon: "home",
    };
  },

  methods: {
    login() {
      this.$router.push("/login");
    },
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 65px;
  /* box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1); */
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
.location {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1%;
  p {
    text-align: center;
    line-height: 24px;
    font-weight: 500;
    font-size: 14px;
    margin-right: 10px;
  }
  .v-icon {
    margin-right: 10px;
  }
  span {
    text-align: center;
    line-height: 24px;
    font-weight: 500;
    font-size: 14px;
  }
}
.account {
  display: flex;
  align-items: center;
  justify-content: center;

  .v-icon {
    margin-right: 10px;
  }
}

.mobile-only {
  display: none;
}

.bottom-naviga {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  z-index: 1000;

  .v-icon {
    font-size: 2rem;
  }
}
.mobile-nav {
  display: none;
}
@media (max-width: 1024px) {
  .location {
    visibility: hidden;
  }
}
@media (max-width: 600px) {
  .navbar {
    display: none;
  }
  .mobile-nav {
    display: block;
  }
  .mobile-only {
    display: inline;
    width: 100%;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 0 10px 0 rgb(226, 213, 28);
  }
}
</style>
