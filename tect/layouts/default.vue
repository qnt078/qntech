<template>
  <v-app>
    <div class="navbar">
      <v-container>
        <v-row>
          <v-col cols="4">
            <div class="logo">
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
              <v-btn class="text-white" color="primary">
                <v-icon>mdi-account</v-icon>
                Login
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script lang="ts">
export default {
  name: "DefaultLayout",
 
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
</style>
