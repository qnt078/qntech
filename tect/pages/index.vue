<template>
  <div class="main" style="background-color: #ffb30e">
    <v-container>
      <v-row>
        <v-col cols="auto" lg="7" md="7" sm="12">
          <div class="content animate__animated animate__bounceInLeft">
            <span class="text-white">Are you starving?</span>
            <p>Within a few clicks, find meals that are accessible near you</p>
            <v-card class="mt-4 pa-2" rounded="lg">
              <v-tabs v-model="tab">
                <v-tab value="one">
                  <v-icon class="mr-2">mdi-hand-cycle</v-icon>
                  Delivery
                </v-tab>
                <v-tab value="two">
                  <v-icon class="mr-2">mdi-bag-personal</v-icon>
                  Pickup
                </v-tab>
              </v-tabs>

              <v-card-text class="">
                <v-window v-model="tab">
                  <v-window-item value="one">
                    <div class="tabItem">
                      <v-text-field
                        placeholder="Enter your location"
                        density="compact"
                        variant="outlined"
                        color="secondary"
                      >
                        <template #prepend-inner>
                          <v-icon color="secondary">mdi-map-marker</v-icon>
                        </template>
                      </v-text-field>
                      <v-btn color="secondary" class="text-white"
                        >Find Food</v-btn
                      >
                    </div>
                  </v-window-item>

                  <v-window-item value="two">
                    <div class="tabItem">
                      <v-text-field
                        placeholder="Enter your location"
                        density="compact"
                        variant="outlined"
                        color="secondary"
                      >
                        <template #prepend-inner>
                          <v-icon color="secondary">mdi-map-marker</v-icon>
                        </template>
                      </v-text-field>
                      <v-btn color="secondary" class="text-white"
                        >Find Food</v-btn
                      >
                    </div>
                  </v-window-item>
                </v-window>
              </v-card-text>
            </v-card>
          </div>
        </v-col>
        <v-col cols="auto" lg="5" md="5" sm="12">
          <div class="image animate__animated animate__bounceInRight">
            <img
              src="https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/hero-header.png"
              alt="noodles"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <div class="discount">
    <v-container>
      <v-row>
        <v-col cols="12">
          <component :is="CardDiscount"></component>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div class="mota bg-gradient">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="content">
            <span class="text-gradient">How does it work</span>
          </div>
          <div class="card animate__animated animate__fadeInDown">
            <v-row>
              <v-col cols="auto" lg="3" md="6" sm="6" xs="12">
                <div class="item">
                  <v-img
                    class="shadow-icon"
                    src="../assets/img/Map Marker.png"
                  ></v-img>
                  <span>Select location</span>
                  <p>Choose your location and find the best food near you</p>
                </div>
              </v-col>
              <v-col cols="auto" lg="3" md="6" sm="6" xs="12">
                <div class="item">
                  <v-img
                    class="shadow-icon"
                    src="../assets/img/Menu.png"
                  ></v-img>
                  <span>Select order</span>
                  <p>Check over hundreds of menus to pick your favorite food</p>
                </div></v-col
              >
              <v-col cols="auto" lg="3" md="6" sm="6" xs="12">
                <div class="item">
                  <v-img
                    class="shadow-icon"
                    src="../assets/img/Invoice.png"
                  ></v-img>
                  <span>Pay advanced</span>
                  <p>
                    It's quick, safe, and simple. Select several methods of
                    payment
                  </p>
                </div></v-col
              >
              <v-col cols="auto" lg="3" md="6" sm="6" xs="12">
                <div class="item">
                  <v-img
                    class="shadow-icon"
                    src="../assets/img/Donut.png"
                  ></v-img>
                  <span>Enjoy meals</span>
                  <p>Food is made and delivered directly to your home.</p>
                </div></v-col
              >
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <div class="slide">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="content">
            <span class="text-gradient">Popular items</span>
          </div>
        </v-col>
        <v-col cols="12">
          <component :is="Slide"></component>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <div class="feature">
    <v-container>
      <v-row>
        <!-- <v-col cols="12">
          <div class="content">
            <span class="text-gradient">Features</span>
          </div>
        </v-col> -->
        <v-col cols="12">
          <component :is="Feature"></component>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <div class="review bg-gradient">
    <v-row>
      <v-col cols="12">
        <div class="content">
          <span class="text-gradient">Reviews</span>
        </div>
      </v-col>
      <v-col cols="12">
        <div class="carousel">
          <component :is="Review"></component>
        </div>
      </v-col>
    </v-row>
  </div>

  <div class="poster">
    <div class="content">
      <span>Are you ready to order with the best deals?</span>
      <v-btn color="secondary" class="text-white"
        >Order Now
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
  </div>

  <footer>
    <component :is="footer"></component>
  </footer>
</template>
<script lang="ts" setup>

import CardDiscount from "~/components/card-discount.vue";
import Slide from "~/components/slide.vue";
import Feature from "~/components/feature.vue";
import Review from "~/components/review2.vue";
import footer from "~/components/footer.vue";

onMounted(() => {
  useHead({
    title: "foodWaNGon",
  });
});
const tab = ref<string | null>(null);
</script>
<style lang="scss" scoped>
.main {
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 1rem;

    span {
      font-size: 3.5rem;
      font-weight: 700;
      text-align: center;
    }
    p {
      font-size: 30px;
      line-height: 40px;
      color: #616161;
      font-weight: 700;
      text-align: center;
      width: 80%;
      margin: 0 auto;
    }

    .tabItem {
      display: flex;
      gap: 1rem;
    }
    .v-card {
      width: 50%;
      margin: 0 auto;
    }
  }
}
.image {
  img {
    width: 80%;
    animation: spinAround 20s linear infinite;
  }
}
.discount {
  padding: 0;
}
.mota {
  padding: 0;

  .content {
    margin-bottom: 2rem;
    text-align: center;
    span {
      font-size: 2.4rem;
      font-weight: 700;
    }
  }
  .card {
    display: flex;
    gap: 1rem;
    padding: 1rem 10rem 0 10rem;

    .item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .v-img {
        width: 200px;
        height: 200px;

        border-radius: 50%;
      }
      span {
        font-size: 20px;
        font-weight: 700;
        line-height: normal;

        text-align: center;
      }

      p {
        font-size: 16px;
        text-align: center;
        width: fit-content;
      }
    }
  }
}
.slide,
.feature,
.review {
  padding: 0;

  .content {
    margin-bottom: 2rem;
    text-align: center;
    span {
      font-size: 2.4rem;
      font-weight: 700;
      /* text-align: center; */
    }
  }
}
.feature {
  background-color: #fffefe;
}
.review {
  height: 100vh;

  .carousel {
    width: 100%;
    height: 100%;
  }
}

.poster {
  background-image: url("../assets/img/cta-two-bg.png");
  background-size: cover;
  background-position: center;
  padding: 10rem;

  position: relative;

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 5rem;

    span {
      font-size: 2.5rem;
      font-weight: 700;
      color: white;
      text-align: center;
    }
    .v-btn {
      width: 50%;
    }
  }
}
@keyframes spinAround {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@media screen and (max-width: 1920px) {
  .main .content {
    padding: 7rem 0 0 0;
  }
  .main .image {
    width: 650px;
  }
}
@media screen and (max-width: 1440px) {
  .main .content {
    padding: 5rem 0 0 0;
    span {
      font-size: 3rem;
    }
    p {
      font-size: 24px;
      line-height: 30px;
      max-width: 100%;
    }
  }
  .main .image {
    width: 650px;
  }
  .main .content .v-card {
    width: 80%;
  }
}
@media screen and (max-width: 1280px) {
  .main .content {
    padding: 2rem 0 0 0;
    span {
      font-size: 2.5rem;
    }
    p {
      font-size: 20px;
      line-height: 30px;
      max-width: 100%;
    }
  }
  .main .image {
    width: 500px;
  }
  .main .content .v-card {
    width: 80%;
  }
}
@media screen and (max-width: 1024px) {
  .main .content {
    padding: 2rem 0 0 0;
    span {
      font-size: 2.5rem;
    }
    p {
      font-size: 20px;
      line-height: 30px;
      max-width: 100%;
    }
  }
  .main .image {
    width: 500px;
  }
  .main .content .v-card {
    width: 80%;
  }
}
@media screen and (max-width: 768px) {
  .main .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 0 0 0;
    span {
      font-size: 3.5rem;
    }
    p {
      font-size: 28px;
      line-height: 40px;
      text-align: center;
    }
    .v-card {
      display: none;
    }
  }
  .main .image {
    width: 100%;
    display: flex;
    justify-content: center;
    img {
      width: 50%;
    }
  }

  .poster {
    background-position: left;
    .content {
      padding: 0;
    }
  }
}

@media screen and (max-width: 425px) {
  .main .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2rem 0 0 0;
    span {
      font-size: 2.5rem;
    }
    p {
      font-size: 20px;
      line-height: 40px;
      text-align: center;
    }
    .v-card {
      display: none;
    }
  }
  .main .image {
    width: 100%;
    display: flex;
    justify-content: center;
    img {
      width: 50%;
    }
  }
  .mota {
    .card {
      padding: 1rem 5rem 0 5rem;
    }
  }
  .poster {
    background-position: right;
    .content {
      padding: 0;
      span {
        font-size: 28px;
      
      }
      .v-btn {
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 375px) {
  .main .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2rem 0 0 0;
    span {
      font-size: 1.8rem;
    }
    p {
      font-size: 20px;
      line-height: 40px;
      text-align: center;
    }
    .v-card {
      display: none;
    }
  }
  .main .image {
    width: 100%;
    display: flex;
    justify-content: center;
    img {
      width: 50%;
    }
  }
  .poster {
    background-position: right;
    .content {
      padding: 0;
      span {
        font-size: 24px;
      
      }
      .v-btn {
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 320px) {
  .mota {
    .content {
      span {
        font-size: 2.5rem;
      }
    }
    .card {
      padding: 0;
    }
  }
  .poster {
    background-position: right;
    .content {
      padding: 0;
      span {
        font-size: 20px;
      
      }
      .v-btn {
        width: 100%;
      }
    }
  }
}
</style>