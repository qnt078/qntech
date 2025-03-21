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
              <NuxtLink to="/" class="logo" style="cursor: pointer">
                <img
                  class="inline-block"
                  src="https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/logo.svg"
                />
                <span class="text-gradient">foodwaNGon</span>
              </NuxtLink>
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
                <v-badge
                  location="top"
                  color="error"
                  :content="quantity"
                  offset-y="25"
                >
                  <v-icon
                    color="primary"
                    size="30"
                    class="mr-7"
                    @click="goToCart"
                    >mdi-cart-heart</v-icon
                  >
                </v-badge>

                <v-menu transition="fade-transition">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      v-if="isLogin"
                      color="primary"
                      variant="tonal"
                      v-bind="props"
                    >
                      <v-icon>mdi-account</v-icon>
                      {{ user?.name }}
                    </v-btn>
                    <v-btn
                      v-else
                      color="primary"
                      variant="tonal"
                      @click="login"
                    >
                      <v-icon>mdi-account</v-icon>
                      Login
                    </v-btn>
                  </template>
                  <v-list base-color="primary">
                    <v-list-item
                      prepend-icon="mdi-hamburger"
                      link
                      @click="
                        () => {
                          $router.push('/order')
                        }
                      "
                    >
                      <v-list-item-title v-text="'Order'"></v-list-item-title>
                    </v-list-item>
                    <v-list-item
                      prepend-icon="mdi-logout"
                      link
                      @click="logout()"
                    >
                      <v-list-item-title v-text="'Logout'"></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-app-bar>
    <v-bottom-navigation v-model="drawer" class="mobile-only w-100" app>
      <div class="bottom-naviga">
        <div class="icon d-flex flex-column align-center" @click="goToHome">
          <v-icon
            :color="selectedIcon === 'home' ? 'secondary' : 'primary'"
            @click="selectedIcon = 'home'"
            >mdi-home</v-icon
          >
          <span
            :style="
              selectedIcon === 'home' ? 'color: #f57c00' : 'color: #ffb30e'
            "
            >Home</span
          >
        </div>
        <div class="icon d-flex flex-column align-center">
          <v-icon
            :color="selectedIcon === 'noodles' ? 'secondary' : 'primary'"
            @click="selectedIcon = 'noodles'"
            >mdi-noodles</v-icon
          >
          <span
            :style="
              selectedIcon === 'noodles' ? 'color: #f57c00' : 'color: #ffb30e'
            "
            >Order</span
          >
        </div>
        <div class="icon d-flex flex-column align-center" @click="goToCart">
          <v-badge
            location="bottom end"
            color="error"
            :content="quantity"
            offset-y="5"
            offset-x="-9"
          >
            <v-icon :color="selectedIcon === 'cart' ? 'secondary' : 'primary'"
              >mdi-cart</v-icon
            >
          </v-badge>
          <span
            :style="
              selectedIcon === 'cart' ? 'color: #f57c00' : 'color: #ffb30e'
            "
            >Cart</span
          >
        </div>
        <div class="icon d-flex flex-column align-center">
          <v-icon
            :color="selectedIcon === 'account' ? 'secondary' : 'primary'"
            @click="selectedIcon = 'account'"
            size="small"
            >{{ isLogin ? 'mdi-login' : 'mdi-account' }}</v-icon
          >
          <span
            :style="
              selectedIcon === 'account' ? 'color: #f57c00' : 'color: #ffb30e'
            "
            >Account</span
          >
        </div>
      </div>
    </v-bottom-navigation>
    <div class="cart" @click="showCart">
      <div class="cart-icon">
        <v-badge
          location="top end"
          color="error"
          :content="quantity"
          offset-y="25"
        >
          <v-icon size="25">mdi-cart</v-icon>
        </v-badge>
      </div>
    </div>

    <div class="sidecart">
      <div class="yourcart">
        <h2>Your Cart</h2>
        <v-icon color="error" @click="closeCart">mdi-close-circle</v-icon>
      </div>
      <div class="cart-items">
        <div
          v-if="cart?.length > 0"
          class="items animate__animated animate__backInRight"
        >
          <div v-for="(item, index) in cart" :key="index" class="item">
            <v-img
              :src="item.image"
              rounded="lg"
              :aspect-ratio="1"
              :max-width="80"
              :max-height="80"
            >
              <div class="cancle">
                <v-icon @click="removeItem(item._id)">mdi-close-circle</v-icon>
              </div>
            </v-img>
            <div class="item-info">
              <h4>{{ item?.quantity }} x {{ item.name }}</h4>
              <div class="info">
                <p>
                  Price:

                  <span class="text-red">
                    {{ vndong.format(item.price) }}
                  </span>
                </p>
                <!-- <p>
                  Quantity :
                  <span>-</span>
                  {{ item?.quantity }}
                  <span>+</span>
                </p> -->
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="cart.length > 0"
          class="sub-total mt-2 d-flex flex-column justify-space-between align-center"
        >
          <div
            class="title w-100 d-flex flex-row justify-space-between align-center"
          >
            <p>Sub Total</p>
            <p>{{ vndong.format(totalPrice) }}</p>
          </div>
          <div class="button">
            <v-btn
              @click="goToCart"
              color="secondary"
              block
              class="rounded-lg text-white"
              >Go To Cart</v-btn
            >
            <!-- <v-btn color="primary" class="text-white rounded-lg"
              >Checkout</v-btn
            > -->
          </div>

          <p>
            By selecting 'Check Out' you are agreeing to our
            <span>Terms & Conditions</span>
          </p>
        </div>
        <div v-else class="empty animate__animated animate__bounceIn">
          <img src="../assets/img/preview.png" />
        </div>
      </div>
    </div>
    <v-main class="pb-0">
      <slot />
    </v-main>
    <footer>
      <component :is="footer"></component>
    </footer>
  </v-app>
</template>

<script lang="ts" setup>
interface Item {
  _id?: number
  name?: string
  price?: number
  quantity?: number
  image?: string
}
interface User {
  _id: string
  email: string
  password: string
  isAdmin: boolean
  name: string
  createdAt: string
}

import footer from '~/components/footer.vue'
const router = useRouter()
const { getSession, signOut } = useAuth()
const drawer = ref(false)
const selectedIcon = ref('home')
const isLogin = ref(false)
const nuxtApp = useNuxtApp()
const quantity = ref(0)
const vndong = nuxtApp.$vietnamdong as any
const user = ref({} as unknown as User)
var cart = nuxtApp.$store.rawItems as unknown as Item[]

const totalPrice = ref(0)

// FUNCTIONS
const getSessionData = async () => {
  try {
    const session: any = await getSession()
    if (session) {
      isLogin.value = true
      user.value = session
    }
  } catch (err) {
    console.log(err)
  }
}
onBeforeMount(() => {
  getSessionData()
  quantity.value = nuxtApp.$store.totalQuantity
  cart = nuxtApp.$store.rawItems as unknown as Item[]
  setTotalPrice()
})

const login = () => {
  router.push('/login')
}
const logout = async () => {
  try {
    await signOut({ callbackUrl: '/' })
    isLogin.value = false
  } catch (err) {
    console.log(err)
  }
}

const goToHome = () => {
  router.push('/')
}
const goToCart = () => {
  selectedIcon.value = 'cart'
  router.push('/cart')
  const sidecart = document.querySelector('.sidecart')
  sidecart?.classList.add('close')
  sidecart?.classList.remove('open')
}

const showCart = () => {
  // Add class opem to sidecart
  const sidecart = document.querySelector('.sidecart')
  sidecart?.classList.add('open')
  sidecart?.classList.remove('close')
}

const closeCart = () => {
  const sidecart = document.querySelector('.sidecart')

  sidecart?.classList.add('close')
  sidecart?.classList.remove('open')
}

const setTotalPrice = () => {
  let total = 0
  cart.forEach((item: any) => {
    total += item.price * item.quantity
  })
  totalPrice.value = total
}
const removeItem = (_id: any) => {
  cart.forEach((item, index) => {
    if (item._id === _id) {
      cart.splice(index, 1)
    }
  })
  nuxtApp.$store.removeItem(_id)
}
// WATCHERS
watchEffect(() => {})
watch(
  () => nuxtApp.$store.totalQuantity,
  (newTotalQuantity: any) => {
    quantity.value = newTotalQuantity
  }
)

watch(
  () => nuxtApp.$store.rawItems,
  (newCart: any) => {
    const ring = document.querySelector('.cart')
    ring?.classList.add('ring')
    setTimeout(() => {
      ring?.classList.remove('ring')
    }, 500)
    cart = newCart as unknown as Item[]
    setTotalPrice()
  }
)
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

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
    margin-right: 0px;
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
    font-size: 1.8rem;
  }
}
.mobile-nav {
  display: none;
}

.cart {
  position: fixed;
  top: 40%;
  right: 2%;
  z-index: 1000;
  .cart-icon {
    width: 60px;
    height: 60px;
    background-color: #ffb30e;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    .v-icon {
      color: white;
      font-size: 2rem;
    }
  }
}
.cart.ring {
  animation: ring 0.5s ease-in-out;
}

@keyframes ring {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.sidecart {
  position: fixed;
  top: 0;
  right: 0;
  width: 350px;
  height: 100%;
  padding: 75px 0;
  background-color: #fff8e9;
  z-index: 1000;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  transform: translateX(100%);
  transition: transform 0.5s ease-in-out;
  .yourcart {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    h2 {
      font-size: 1.5rem;
      font-family: 'Open Sans', sans-serif;
      font-weight: 500;
      margin: 0;
    }
    .v-icon {
      font-size: 2rem;
      cursor: pointer;
    }
  }
  .cart-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 0 20px;
    .items {
      width: 100%;

      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: #ffb30e #faf5ea;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      .item {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 90%;
        gap: 1rem;
        padding: 10px 0;
        border-bottom: 1px solid #000000;
        .v-img {
          position: relative;
          // width: 100px;
          // height: 100px;
          object-fit: cover;
          border-radius: 10px;
          overflow: hidden;

          .cancle {
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;

            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            transform: scale(0); /* scale to 0 to hide it */
            transition: transform 0.3s ease-in-out; /* animate the transform property */

            .v-icon {
              color: white;
              font-size: 3rem;
            }
          }

          &:hover .cancle {
            transform: scale(1); /* expand to full size on hover */
          }
        }
        // img {
        //   // width: 80px;
        //   // height: 100px;
        //   object-fit: cover;
        //   border-radius: 10px;
        // }
        .item-info {
          display: flex;
          flex-direction: column;
          max-width: 50%;
          // justify-content: space-around;
          height: 100%;
          padding: 10px 0;
          gap: 1rem;

          h4 {
            margin-top: 10px;
            font-size: 14.5px;
            text-align: start;
            font-weight: 600;
            line-height: normal;
            // margin: 0;
            text-wrap: wrap;
          }

          .info {
            p {
              font-size: 15px;
              text-align: start;
              font-weight: 600;
            }
          }
        }
      }
    }
    .sub-total {
      gap: 1rem;
      padding: 20px;
      background-color: #fff5e2;
      border-radius: 10px;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
      .title {
        p:first-child {
          font-size: 22px;
          font-family: 'Open Sans', sans-serif;
          font-weight: 600;
          color: red;
          margin: 0;
        }
        p:last-child {
          font-size: 20px;
          font-family: 'Open Sans', sans-serif;
          font-weight: 600;
          color: #000;
          margin: 0;
        }
      }
      p {
        font-size: 12px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 500;
        text-align: center;
        margin: 0;
        span {
          color: #ffb30e;
          font-weight: 700;
          cursor: pointer;
        }
      }
    }
    .empty {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }
}
.sidecart.open {
  transform: translateX(0);
}

.sidecart.close {
  transform: translateX(100%);
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
@media screen and (max-width: 425px) {
  .cart {
    display: none;
  }
}
</style>
