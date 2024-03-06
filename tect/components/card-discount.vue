<template>
  <div v-if="test" class="mt-4">
    <v-row class="pa-12">
      <v-col
        v-for="(item, index) in test"
        :key="index"
        cols="auto"
        lg="3"
        md="6"
        sm="6"
        xs="12"
      >
        <div class="card animate__animated animate__fadeInDown">
          <div class="img">
            <v-img :src="item.image" width="100%"></v-img>
            <p class="discount">{{ item.discount }}
            <v-icon>mdi-clock-fast</v-icon>
            </p>
          </div>
          <v-card-title>
            <h4>{{ item.title }}</h4>
          </v-card-title>
          <v-card-text>
            <div class="des">
              <p>
                {{ item.description }}
              </p>
            </div>
          </v-card-text>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>


const test = [
  {
    title: "Flat Hill Slingback",
    description: "6 days Remaining",
    image:
      "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/discount-item-1.png",
    discount: "Fast",
  },
  {
    title: "Flat Hill Slingback",
    description: "6 days Remaining",
    image:
      "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/discount-item-1.png",
    discount: "Fast",
  },
  {
    title: "Flat Hill Slingback",
    description: "6 days Remaining",
    image:
      "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/discount-item-1.png",
    discount: "Fast",
  },
  {
    title: "Flat Hill Slingback",
    description: "6 days Remaining",
    image:
      "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/discount-item-1.png",
    discount: "Fast",
  },
];
</script>

<style lang="scss" scoped>
.img {
  position: relative;
  overflow: hidden;
  border-radius: 10%;
}
.v-img {
  border-radius: 10%;
}
.v-img:hover {
  transform: scale(1.1);
  transition: 0.5s;
}
.discount {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #f44336;
  color: white;
  padding: 30px 5px;
  border-radius: 10%;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
}
.discount:hover {
  padding: 40px 30px;
  font-size: 32px;
  border-radius: 0 10% 0 0;
  transition: 0.5s;
  background-color: #ffb30e;
}

.des {
  font-size: 16px;
  font-weight: 700;
  color: #f17228;
  text-align: left;
  width: fit-content;
  border: 2px solid;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(45deg, #634d07, #f44336);
  animation: gradient 2s linear infinite;
  border-radius: 10px;
  background-color: #fdeadf;

  p {
    padding: 10px;
  }
}

@media (max-width: 425px) {
  .v-row {
    padding: 0 !important;
  }
  .img {
    width: 163%;
  }
}
@media (max-width: 375px) {
  .v-row {
    padding: 0 !important;
  }
  .img {
    width: 153%;
  }
}
@media (max-width: 320px) {
  .v-row {
    padding: 0 !important;
  }
  .img {
    width: 125%;
  }
}
</style>
