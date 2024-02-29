<template>
  <div class="mt-2" style="background-color: #ffb30e">
    <v-container>
      <v-row>
        <v-col cols="7">
          <div class="content">
            <span class="text-white">Are you starving?</span>
            <p>Within a few clicks, find meals that are accessible near you</p>
            <v-card class="mt-4 pa-2" rounded="lg" width="80%">
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
        <v-col cols="5">
          <div class="image">
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
          <div class="card">
            <v-row>
              <v-col cols="3">
                <div class="item">
                  <v-img
                    class="shadow-icon"
                    src="../assets/img/Map Marker.png"
                  ></v-img>
                  <span>Select location</span>
                  <p>Choose your location and find the best food near you</p>
                </div>
              </v-col>
              <v-col cols="3">
                <div class="item">
                  <v-img
                    class="shadow-icon"
                    src="../assets/img/Menu.png"
                  ></v-img>
                  <span>Select order</span>
                  <p>Check over hundreds of menus to pick your favorite food</p>
                </div></v-col
              >
              <v-col cols="3">
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
              <v-col cols="3">
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
const tab = ref<string | null>(null);
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 1rem;
  padding: 5rem 10rem 0 10rem;
  span {
    font-size: 3.5rem;
    font-weight: 700;
  }
  p {
    font-size: 30px;
    line-height: 40px;
    color: #616161;
    font-weight: 700;
    text-align: left;
    max-width: 80%;
  }

  .tabItem {
    display: flex;
    gap: 1rem;
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
    span {
      font-size: 2.4rem;
      font-weight: 700;
      text-align: center;
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
    span {
      font-size: 2.4rem;
      font-weight: 700;
      text-align: center;
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

    span {
      font-size: 2.5rem;
      font-weight: 700;
      color: white;
      text-align: center;
    }
    .v-btn {
      margin-top: 2rem;
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
</style>
