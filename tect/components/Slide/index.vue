<template>
  <div class="">
    <div class="desktop">
      <v-sheet class="">
        <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
          <v-slide-group-item
            v-for="(item, index) in store.listPopular"
            :key="index"
            v-slot="{ isSelected, toggle }"
          >
            <div class="popular-card ma-4">
              <div class="card" @click="toggle">
                <div class="img">
                  <v-img
                    class="rounded-xl"
                    :src="item.image"
                    lazy-src="@/assets/img/loading.jpg"
                    alt="Product Slide"
                    width="100%"
                    max-height="300"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        align="center"
                        class="fill-height ma-0"
                        justify="center"
                      >
                        <v-progress-circular
                          color="grey-lighten-5"
                          indeterminate
                        ></v-progress-circular>
                      </v-row> </template
                  ></v-img>
                </div>
                <div class="information">
                  <v-card-title class="mt-4">
                    <h4>{{ item.name }}</h4>
                  </v-card-title>
                  <v-card-text>
                    <div class="des">
                      <p>{{ item.description }}</p>
                    </div>
                    <div class="price">
                      <p>{{ vndong.format(item.price) }}</p>
                    </div>
                  </v-card-text>
                </div>
                <div class="button">
                  <v-btn
                    class="text-white"
                    rounded="lg"
                    @click="addToCart(item)"
                  >
                    Order
                    <v-icon class="ml-2">mdi-cart-plus</v-icon>
                  </v-btn>
                </div>
              </div>
            </div>
          </v-slide-group-item>
          <template #next>
            <div class="next-icon">
              <v-icon color="white">mdi-chevron-right</v-icon>
            </div>
          </template>
          <template #prev>
            <div class="prev-icon">
              <v-icon color="white">mdi-chevron-left</v-icon>
            </div>
          </template>
        </v-slide-group>
      </v-sheet>
    </div>
    <div class="mobile">
      <div v-for="(item, index) in store.listPopular" :key="index">
        <div class="pa-2">
          <div class="card">
            <div class="img">
              <v-img
                class="rounded-xl"
                :src="item.image"
                width="100%"
                max-height="150"
                cover
              >
                <template v-slot:placeholder>
                  <v-row
                    align="center"
                    class="fill-height ma-0"
                    justify="center"
                  >
                    <v-progress-circular
                      color="grey-lighten-5"
                      indeterminate
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </div>
            <div class="information">
              <v-card-title class="">
                <h4>{{ item.name }}</h4>
              </v-card-title>
              <v-card-text>
                <div class="des">
                  <p>{{ item.description }}</p>
                </div>
                <div class="price">
                  <p>{{ vndong.format(item.price) }}</p>
                </div>
              </v-card-text>
            </div>
            <div class="button">
              <v-btn class="text-white" rounded="lg" @click="addToCart(item)"
                >Order
                <v-icon class="ml-2">mdi-cart-plus</v-icon>
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useListProductStore } from '@/store'

const nuxtApp = useNuxtApp()

const cart = nuxtApp.$store
const vndong = nuxtApp.$vietnamdong as any
const model = ref(0)
const store = useListProductStore()
store.fetchListProduct()

const addToCart = (item: any) => {
  const items: any = {
    _id: item._id,
    name: item.name,
    price: item.price,
    quantity: 1,
    image: item.image,
  }
  cart.addItem(items)
}
</script>

<style lang="scss" scoped>
.desktop {
  @media screen and (max-width: 428px) {
    display: none;
  }
}
.mobile {
  display: none;
}
.popular-card {
  display: grid;
  grid-template-columns: repeat(5, auto);
  .card {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 300px;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    transition: 0.5s;
    &:hover {
      box-shadow: 0 0 10px #ffb30e;
      transition: 0.5s;
    }
    .information {
      display: flex;
      flex-direction: column;
    }
    h4 {
      font-size: 18px;
      font-weight: 700;
      margin: 0;
      text-align: left;
    }
    .des {
      color: #ffb30e;
      font-size: 14px;
      font-weight: 600;
      margin: 0;
      text-align: left;
    }
    .price {
      margin-top: 10px;
      p {
        font-size: 1.7rem;
        font-weight: 600;
        margin: 0;
        text-align: left;
      }
    }
    .button {
      margin-top: auto;
      padding: 10px 20px;
      .v-btn {
        width: 100%;
      }
    }
  }
}

.next-icon {
  width: 40px;
  height: 40px;
  background-color: #ffb30e;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-left: 20px;
  .v-icon {
    color: white;
    font-size: 3rem;
  }
}
.next-icon:hover {
  margin-bottom: 10px;
  transition: 0.5s;
}
.prev-icon {
  width: 40px;
  height: 40px;
  background-color: #ffb30e;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
  .v-icon {
    color: white;
    font-size: 3rem;
  }
}
.prev-icon:hover {
  margin-bottom: 10px;
  transition: 0.5s;
}

@media screen and (max-width: 428px) {
  .mobile {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .card {
      display: flex;
      flex-direction: column;

      .information {
        display: flex;
        flex-direction: column;
      }

      .button {
        margin-top: auto;
      }

      width: 150px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 25px;
      h4 {
        font-size: 14px;
        font-weight: 600;
        text-wrap: wrap;
      }
      .des {
        display: none;
        font-size: 12px;
      }
      .price {
        p {
          font-size: 18px;
          font-weight: 500;
        }
      }
      .button {
        padding: 0 20px 10px;
        .v-btn {
          width: 100%;
          font-size: 10px;
        }
      }
    }
  }
  .desktop {
    .popular-card {
      display: grid;
      grid-template-columns: repeat(1, auto);
      margin: 0;
      .card {
        width: 350px;
      }
    }
  }
  .v-slide-group > .v-slide-group__next,
  .v-slide-group > .v-slide-group__prev {
    display: none;
  }
}

@media screen and (max-width: 375px) {
  .mobile {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .card {
      width: 132px;
      h4 {
        font-size: 12px;
      }
      .des {
        font-size: 12px;
      }
      .price {
        p {
          font-size: 14px;
        }
      }
      .button {
        padding: 0 20px 10px;
        .v-btn {
          width: 100%;
          font-size: 8px;
        }
      }
    }
  }

  .desktop {
    .popular-card {
      display: grid;
      grid-template-columns: repeat(1, auto);
      margin: 0;
      .card {
        width: 290px;
      }
    }
  }
}

@media screen and (max-width: 320px) {
  .mobile {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .card {
      width: 112px;
      h4 {
        font-size: 10px;
      }
      .des {
        font-size: 8px;
      }
      .price {
        p {
          font-size: 14px;
        }
      }
      .button {
        padding: 0 20px 10px;
        .v-btn {
          width: 100%;
          font-size: 6px;
        }
      }
    }
  }

  .desktop {
    .popular-card {
      display: grid;
      grid-template-columns: repeat(1, auto);
      margin: 0;

      .card {
        width: 230px;
      }
    }
  }
}
</style>
