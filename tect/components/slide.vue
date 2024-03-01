<template>
  <v-sheet class="mx-auto">
    <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
      <v-slide-group-item
        v-for="n in 10"
        :key="n"
        v-slot="{ isSelected, toggle }"
      >
        <div class="popular-card ma-4">
          <div class="card" @click="toggle">
            <div class="img">
              <v-img
                class="rounded-xl"
                src="https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/discount-item-1.png"
                width="100%"
              ></v-img>
            </div>
            <v-card-title class="mt-4">
              <h4>Flat Hill Slingback</h4>
            </v-card-title>
            <v-card-text>
              <div class="des">
                <p>6 days Remaining</p>
              </div>
              <div class="price">
                <p>3.88$</p>
              </div>
            </v-card-text>

            <v-btn color="primary" class="text-white"
              >Buy Now
              <v-icon class="ml-2">mdi-cart-plus</v-icon>
            </v-btn>
          </div>
        </div>
      </v-slide-group-item>
      <template #next>
        <div class="next-icon">
          <v-icon>mdi-chevron-right</v-icon>
        </div>
      </template>
      <template #prev>
        <div class="prev-icon">
          <v-icon>mdi-chevron-left</v-icon>
        </div>
      </template>
    </v-slide-group>
  </v-sheet>
</template>

<script setup>
const model = ref(null);
</script>

<style lang="scss">
.popular-card {
  display: grid;
  grid-template-columns: repeat(5, auto);
  .card {
    width: 300px;
    cursor: pointer;

    h4 {
      font-size: 16px;
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
        font-size: 16px;
        font-weight: 600;
        margin: 0;
        text-align: left;
      }
    }
    .v-btn {
      margin-top: 10px;
      width: 100%;
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

@media screen and (max-width: 425px) {
  .popular-card {
    display: grid;
    grid-template-columns: repeat(1, auto);
    margin: 0;
    .card {
      width: 350px;
    }
  }
}

@media screen and (max-width: 375px) {
  .popular-card {
    display: grid;
    grid-template-columns: repeat(1, auto);
    margin: 0;
    .card {
      width: 290px;
    }
  }
}

@media screen and (max-width: 320px) {
  .popular-card {
    display: grid;
    grid-template-columns: repeat(1, auto);
    margin: 0;

    .card {
      width: 230px;
    }
  }

}
</style>
