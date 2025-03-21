<template>
  <v-container>
    <v-row>
      <div class="best-seller">
        <div v-for="(item, index) in items" :key="index">
          <div class="pa-2">
            <div class="card">
              <div class="img">
                <v-img
                  class="rounded-xl"
                  :src="item.image"
                  lazy-src="@/assets/img/loading.gif"
                  width="100%"
                  max-height="250"
                  cover
                >
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
                  >Buy Now
                  <v-icon class="ml-2">mdi-cart-plus</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
interface Product {
  _id: number
  name: string
  description: string
  price: number
  image: string
}

const nuxtApp = useNuxtApp()
const cart = nuxtApp.$store
const vndong = nuxtApp.$vietnamdong as any
const api = nuxtApp.$api

const items = ref([] as Product[])
const model = ref(0)
const fetchProduct = async () => {
  try {
    const data = await api.get('/product')
    items.value = data.filter((item: any) => item.category === 'best-seller')
  } catch (err: any) {
    console.log(err)
  }
}

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

onMounted(fetchProduct)
</script>

<style lang="scss" scoped>
.best-seller {
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  gap: 20px;
}
.card {
  display: flex;
  flex-direction: column;

  height: 500px;

  width: 400px;
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
    font-size: 24px;
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
    margin-bottom: 20px;
    padding: 0px 20px;
    .v-btn {
      width: 100%;
    }
  }
}

@media screen and (max-width: 1440px) {
  .card {
    width: 350px;

    h4 {
      font-size: 18px;
    }
  }
}
@media screen and (max-width: 1024px) {
  .card {
    width: 400px;

    h4 {
      font-size: 18px;
    }
  }
}
@media screen and (max-width: 768px) {
  .card {
    width: 335px;

    h4 {
      font-size: 18px;
    }
  }
}
@media screen and (max-width: 428px) {
  .best-seller {
    display: grid;
    grid-template-columns: repeat(1, auto);
  }
  .card {
    width: auto;

    h4 {
      font-size: 18px;
    }
  }
}
</style>
