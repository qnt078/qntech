<template>
  <v-container>
    <div class="main-cart">
      <div class="cart-items">
        <div v-if="cart.length > 0" class="">
          <v-row>
            <v-col cols="8">
              <div class="cart-left">
                <div class="title-1">Your cart</div>

                <div v-for="(item, index) in cart" :key="index">
                  <v-row>
                    <v-col cols="9" lg="9">
                      <div class="media-left">
                        <img
                          src="https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/discount-item-1.png"
                        />
                        <div class="media-body">
                          <div class="media-title mt-0">{{ item.title }}</div>
                          <div class="media-price">
                            <span>Price:</span> {{ vndong.format(item.price) }}
                          </div>
                          <div class="media-price">
                            <span>Quantity:</span>
                          </div>
                          <v-text-field
                            v-model="item.quantity"
                            class="media-quantity"
                            type="number"
                            variant="outlined"
                            dense
                            min="1"
                          >
                          </v-text-field>
                        </div>
                      </div>
                    </v-col>
                    <v-col lg="3">
                      <div class="media-right">
                        <div class="price">
                          {{ vndong.format(item.price) }}
                        </div>
                        <div class="button">
                          <v-btn color="black" variant="outlined">
                            <v-icon color="primary">mdi-heart</v-icon>
                          </v-btn>
                          <v-btn color="secondary">
                            <v-icon color="white">mdi-delete</v-icon>
                          </v-btn>
                        </div>
                      </div>
                    </v-col>
                    <v-col cols="12">
                      <div class="item-divider"></div>
                    </v-col>
                  </v-row>
                </div>
                <v-row>
                  <v-col cols="12">
                    <v-divider
                      :thickness="2"
                      class="border-opacity-100"
                    ></v-divider>
                    <div
                      class="under-button d-flex flex-row justify-space-between align-center mt-6"
                    >
                      <v-btn color="black" variant="outlined">
                        Remove All
                      </v-btn>
                      <v-btn color="black" variant="outlined">
                        Back to shop
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-col>
            <v-col cols="4">
              <div class="cart-right">
                <h1>Total price</h1>
                <v-divider
                  :thickness="2"
                  class="border-opacity-100"
                ></v-divider>
                <p>{{ totalPrice }}</p>

                <v-btn to="/" class="text-white">Checkout</v-btn>
              </div>
            </v-col>
          </v-row>
        </div>
        <div v-else>
          <div class="cart-empty">
            <v-row>
              <v-col cols="12">
                <h1>Your cart is empty</h1>
              </v-col>
              <v-col cols="12" class="px-10">
                <v-divider
                  :thickness="2"
                  class="border-opacity-100"
                ></v-divider>
              </v-col>
              <v-col cols="12" class="px-10">
                <p>Looks like you haven't added any items to your cart yet.</p>
              </v-col>
              <v-col cols="12">
                <v-btn to="/" class="text-white">Go to shop</v-btn>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
interface Item {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

const nuxtApp = useNuxtApp();
let cart = nuxtApp.$store.items as unknown as Item[] | [];
const vndong = nuxtApp.$vietnamdong as any;
const totalPrice = ref(0);

onMounted(() => {
  cart = nuxtApp.$store.items as unknown as Item[] | [];
  setTotalPrice();
});

const addQuantity = (item: Item) => {
  nuxtApp.$store.updateItem(item as any);
};
const setTotalPrice = () => {
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
  });
  totalPrice.value = total;
};
const removeItem = (id: any) => {
  cart.forEach((item, index) => {
    if (item.id === id) {
      cart.splice(index, 1);
    }
  });
  nuxtApp.$store.removeItem(id);
};

// change total price when quantity changes
watch(cart, setTotalPrice, { immediate: true });
</script>

<style lang="scss" scoped>
.main-cart {
  margin: 5rem auto;
  width: 1200px;
  .cart-items {
    .cart-left {
      .title-1 {
        color: #000;
        background-color: #f1f1f1;

        font-size: 23px;
        margin: 20px 0px 20px 0px;
        padding: 5px 20px 5px 20px;
        text-transform: uppercase;
        font-weight: 550;
        line-height: normal;
      }

      .media-left {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        width: 100%;
        img {
          width: 180px;
          height: 180px;
          object-fit: cover;
        }
        .media-body {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .media-title {
            color: #000;
            font-weight: 400;
            font-size: 22px;
            margin-bottom: 0px;
          }
          .media-price {
            font-size: 16px;
            color: #666060;
            line-height: 46px;

            span {
              font-size: 16px;
              color: #666060;
            }
          }
          .media-quantity {
            width: 150px;
            height: 10px;
          }
        }
      }
      .item-divider {
        background: url("https://ananas.vn/wp-content/themes/ananas/fe-assets/images/bg_divider.png")
          repeat-x 7px;
        height: 1px;
        margin: 20px 0px;
      }

      .media-right {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;

        .price {
          font-size: 22px;
          color: #d60202;
          font-weight: 500;
          margin-bottom: 0px;
          text-align: center;
        }
        .button {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          .v-btn {
            color: #000;
            font-size: 18px;
            height: 40px;
            padding-left: 40px;
            padding-right: 40px;
          }
        }
      }
      .under-button {
        .v-btn {
          color: #fff;

          height: 40px;
          padding-left: 60px;
          padding-right: 60px;
        }
      }
    }
  }

  .cart-empty {
    text-align: center;
    h1 {
      font-size: 2rem;
      text-transform: uppercase;
    }
    .v-divider {
      padding: 0 2rem;
    }
    .v-btn {
      color: #fff;
      font-size: 18px;
      height: 40px;
      padding-left: 40px;
      padding-right: 40px;
    }
  }
}
</style>
