<template>
  <v-container>
    <div class="main-cart">
      <div class="cart-items">
        <div class="">
          <v-row>
            <v-col cols="auto" lg="8" md="8" sm="12">
              <div class="cart-left">
                <div class="title-1">Your order</div>

                <div v-for="(item, index) in cart" :key="index">
                  <v-row>
                    <v-col cols="auto" lg="9" md="9" sm="9" xs="12">
                      <div class="media-left">
                        <img :src="item.image" />
                        <div class="media-body">
                          <div class="media-title mt-0">{{ item.name }}</div>
                          <div class="media-price">
                            <span>Price:</span> {{ vndong.format(item.price) }}
                          </div>
                          <div class="media-price">
                            <span>Quantity:</span>
                          </div>
                          <v-text-field
                            v-model="item.qty"
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
                    <v-col cols="auto" lg="3" md="3" sm="3" xs="12">
                      <div class="media-right">
                        <div class="price">
                          {{ vndong.format(item.price) }}
                        </div>
                        <div class="button">
                          <v-btn color="black" variant="outlined">
                            <v-icon color="primary">mdi-heart</v-icon>
                          </v-btn>
                        </div>
                      </div>
                    </v-col>
                    <v-col v-if="index !== cart.length - 1" cols="12">
                      <div class="item-divider"></div>
                    </v-col>
                  </v-row>
                </div>
                <v-row>
                  <v-col cols="12">
                    <v-divider
                      :thickness="2"
                      class="mt-4 border-opacity-100"
                    ></v-divider>
                    <div
                      class="under-button d-flex flex-row justify-space-between align-center mt-6"
                    >
                      <v-btn to="/" color="black" variant="outlined">
                        Back to shop
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-col>
            <v-col cols="auto" lg="4" md="4" sm="12">
              <div class="cart-right">
                <ul class="list-group">
                  <li class="list-group-item title">Order</li>
                  <li class="list-group-item divider"></li>
                  <li class="list-group-item title-1">Discount</li>
                  <li class="list-group-item">
                    <div class="input-group">
                      <input type="text" class="form-control" />
                      <div class="input-group-btn">
                        <v-btn>Apply</v-btn>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item divider-1"></li>
                  <li class="list-group-item text-1">
                    <span class="title-3"> Your order </span>
                    <span class="title-3-1">
                      {{ vndong.format(order?.totalPrice) }}
                    </span>
                  </li>
                  <li class="list-group-item text-2">
                    <span class="title-3"> Discount </span>
                    <span class="title-3-1">
                      {{ vndong.format(0) }}
                    </span>
                  </li>
                  <li class="list-group-item divider-1"></li>

                  <li class="list-group-item text-3">
                    <span class="title-5"> Total </span>
                    <span class="title-5-1">
                      {{ vndong.format(order?.totalPrice) }}
                    </span>
                  </li>
                  <!-- <li class="list-group-item">
                    <v-btn color="secondary" class="text-white w-100">Checkout</v-btn>
                  </li> -->
                </ul>
              </div>
              <div class="cart-right">
                <ul class="list-group">
                  <li class="list-group-item title">Information</li>
                  <li class="list-group-item divider"></li>

                  <li class="list-group-item">
                    <div class="input-group-1">
                      <input
                        v-model="Information.name"
                        type="text"
                        placeholder="Name"
                        class="form-control"
                      />
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="input-group-1">
                      <input
                        v-model="Information.phone"
                        type="text"
                        placeholder="Phone"
                        class="form-control"
                      />
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="input-group-1">
                      <input
                        v-model="Information.address"
                        type="text"
                        placeholder="Address"
                        class="form-control"
                      />
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="input-group-1">
                      <input
                        v-model="Information.note"
                        type="text"
                        placeholder="Note"
                        class="form-control"
                      />
                    </div>
                  </li>
                  <li class="list-group-item">
                    <v-btn
                      color="secondary"
                      class="text-white w-100"
                      :to="`/payment/${order?._id}/${(order?.totalPrice as number) * 100}`"
                    >
                      Checkout
                    </v-btn>
                  </li>
                </ul>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
    <div>
      <loading
        v-model:active="isLoading"
        :can-cancel="true"
        color="#FFB30E"
        :is-full-page="fullPage"
      />
    </div>
  </v-container>
</template>

<script setup lang="ts">
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

interface Order {
  _id: string
  createdAt: string
  updatedAt: string
  shippingAddress: {
    name: string
    phone: string
    address: string
  }
  isPaid: boolean
  isDelivered: boolean
  totalPrice: number
  orderItems: {
    _id: string
    product: {
      _id: string | number
      title: string | any
      image: string | any
      price: number | any
    }
    quantity: number
  }[]
}

const router = useRouter()

const id = ref(useRoute().params.id as string)

const nuxtApp = useNuxtApp()
const api = nuxtApp.$api
const vndong = nuxtApp.$vietnamdong as any
const order = ref<Order | null>(null)
const cart = ref([] as any)
const Information = ref([] as any)

const isLoading = ref(false)
const fullPage = ref(true)

const fetchProduct = async () => {
  try {
    const response = await api.get(`/order/${id.value}`)
    order.value = response.data
    cart.value = response.data.orderItems
    Information.value = response.data.shippingAddress
    console.log(order.value)
  } catch (err: any) {
    order.value = null
  }
}

onBeforeMount(() => {
  isLoading.value = true
  fetchProduct()
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})
</script>

<style lang="scss" scoped>
.main-cart {
  margin: 5rem auto;
  max-width: 1200px;
  .cart-items {
    .cart-left {
      .title-1 {
        color: #000;
        background: linear-gradient(
          180deg,
          rgba(255, 206, 103, 0.22) -42.47%,
          rgba(253, 237, 202, 0) 100%
        );
        border-radius: 10px;
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
          border-radius: 10px;
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
              color: #000;
            }
          }
          .media-quantity {
            width: 150px;
            height: 10px;
          }
        }
      }
      .item-divider {
        background: url('https://ananas.vn/wp-content/themes/ananas/fe-assets/images/bg_divider.png')
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
          text-align: right;
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

    .cart-right {
      margin-top: 20px;
      background: linear-gradient(
        180deg,
        rgba(255, 206, 103, 0.22) -42.47%,
        rgba(253, 237, 202, 0) 100%
      );
      .list-group {
        padding-bottom: 20px;
        padding-top: 5px;
        border-radius: 10px;

        &-item {
          position: relative;
          display: block;
          padding: 10px 20px;
          margin-bottom: -1px;
          background-color: transparent;
          border: none;
          clear: both;
          overflow: hidden;
        }
        .title {
          font-size: 20px;
          font-weight: 500;
          color: #000;

          border-radius: 10px;

          text-transform: uppercase;
          font-weight: 550;
          line-height: normal;
        }
        .divider {
          border-bottom: #000 2px solid;
          margin: 0px 20px;
          padding: 0px;
        }

        .input-group {
          position: relative;
          display: table;
          border-collapse: separate;
          .form-control {
            display: block;
            width: 100%;
            height: 40px;
            padding: 6px 12px;
            line-height: 1.42857143;
            background-color: #fff;
            background-image: none;
            border: 1px solid #ccc;
            border-radius: 0px;
            color: #000;
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            font-size: 16px;
            transition:
              border-color ease-in-out 0.15s,
              box-shadow ease-in-out 0.15s;
            text-transform: uppercase;
          }
          textarea:focus,
          input:focus {
            outline: none;
          }

          .input-group-btn {
            position: relative;
            display: table-cell;
            width: 1%;
            vertical-align: middle;
            .v-btn {
              border-radius: 0px;
              color: #ffffff !important;
              font-size: 18px;
              height: 40px;
              box-shadow: none;
            }
          }
        }
        .input-group-1 {
          position: relative;

          .form-control {
            display: block;
            width: 100%;
            height: 40px;
            padding: 6px 12px;
            line-height: 1.42857143;
            background-color: #fff;
            background-image: none;
            border: 1px solid #ccc;
            border-radius: 0px;
            color: #000;
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            font-size: 16px;
            transition:
              border-color ease-in-out 0.15s,
              box-shadow ease-in-out 0.15s;
            text-transform: uppercase;
          }
          textarea:focus,
          input:focus {
            outline: none;
          }

          .input-group-btn {
            position: relative;
            display: table-cell;
            width: 1%;
            vertical-align: middle;
            .v-btn {
              border-radius: 0px;
              color: #ffffff !important;
              font-size: 18px;
              height: 40px;
              box-shadow: none;
            }
          }
        }
        .title-1 {
          font-size: 18px;
          font-weight: 500;
          color: #000;

          margin: 20px 0px 0px 0px;
          border-radius: 10px;
          text-transform: uppercase;
          font-weight: 550;
          line-height: normal;
        }

        .divider-1 {
          background: url('https://ananas.vn/wp-content/themes/ananas/fe-assets/images/bg_divider.png')
            repeat-x 7px;
          height: 2px;
          margin: 5px 20px;
        }

        .text-1 {
          padding-top: 20px;
          padding-bottom: 5px;
          .title-3 {
            float: left;
            font-size: 16px;

            color: #808080;

            font-weight: 550;
            line-height: normal;
          }
          .title-3-1 {
            font-size: 20px;
            font-weight: 500;
            color: #d60202;
            text-transform: uppercase;
            font-weight: 550;
            line-height: normal;
            text-align: right;
            float: right;
          }
        }
        .text-2 {
          padding-top: 0px;
          padding-bottom: 20px;
          .title-3 {
            float: left;
            font-size: 16px;

            color: #808080;

            font-weight: 550;
            line-height: normal;
          }
          .title-3-1 {
            font-size: 16px;
            font-weight: 500;
            color: #808080;
            text-transform: uppercase;

            line-height: normal;
            text-align: right;
            float: right;
          }
        }
        .text-3 {
          padding-top: 20px;
          padding-bottom: 20px;
          .title-5 {
            float: left;
            font-size: 18px;

            color: #000;

            line-height: normal;
          }
          .title-5-1 {
            font-size: 23px;
            font-weight: 500;
            color: #000000;
            text-transform: uppercase;

            line-height: normal;
            text-align: right;
            float: right;
          }
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

@media screen and (max-width: 430px) {
  .main-cart {
    .cart-items {
      .cart-left {
        .media-left {
          img {
            width: 170px;
            height: 170px;
          }
          .media-body {
            .media-title {
              font-size: 16px;
            }
            .media-price {
              font-size: 14px;
            }
          }
        }
        .under-button {
          .v-btn {
            padding: 0 30px;
          }
        }
        .media-right {
          .price {
            display: none;
          }
          .button {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 165%;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 375px) {
  .main-cart {
    .cart-items {
      .cart-left {
        .media-left {
          img {
            width: 170px;
            height: 170px;
          }
          .media-body {
            .media-title {
              font-size: 16px;
            }
            .media-price {
              font-size: 14px;
            }
          }
        }
        .under-button {
          .v-btn {
            padding: 0 20px;
          }
        }
        .media-right {
          .price {
            display: none;
          }
          .button {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 155%;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 320px) {
  .main-cart {
    .cart-items {
      .cart-left {
        .media-left {
          img {
            width: 150px;
            height: 150px;
          }
          .media-body {
            .media-title {
              font-size: 16px;
            }
            .media-price {
              font-size: 14px;
            }
          }
        }
        .under-button {
          .v-btn {
            padding: 0;
          }
        }
        .media-right {
          .price {
            display: none;
          }
          .button {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 150%;
          }
        }
      }
    }
  }
}
</style>
