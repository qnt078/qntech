<template>
  <div v-if="test" class="mt-4">
    <v-row class="pa-12">
      <v-col
        v-for="(item, index) in test"
        :key="index"

        lg="3"
        md="6"
        sm="6"
        xs="12"
      >
        <div class="card animate__animated animate__fadeInDown">
          <div class="img">
           
            <v-img :src="item?.image"
            lazy-src="@/assets/img/loading.gif"
              max-height="250" cover
            
            ></v-img>
            <p class="discount">{{ item.discount }}
           
            <v-icon>mdi-clock-fast</v-icon>
            </p>
          </div>
          <div class="description">
          <v-card-title class="title pl-0 text-h6 font-weight-bold">
            <div class="title">{{ item.title }}</div>
        
          </v-card-title>
          <v-card-text class="pl-0">
            <div class="des">
              <p>
                {{ item.description }}
              </p>
            </div>
          </v-card-text>
        </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>


import { ref, onMounted } from 'vue';

const test = ref([
  {
    title: "Noodles - Spicy Delight",
    description: "Savor the spice! Only 20 minutes remaining to grab this fiery deal.",
    image:
      "_nuxt/assets/img/mi5.jpg",
    discount: "Fast Delivery",
    originalPrice: 25000,
    salePrice: 18000,
    rating: 4.5,
    reviews: 120,
  },
  {
    title: "Beef Noodle Soup - Authentic Flavor",
    description: "Hurry! Only 30 seconds left to experience the rich, authentic taste of our beef noodle soup.",
    image:
      "_nuxt/assets/img/mi2.jpg",
    discount: "Flash Sale",
    originalPrice: 35000,
    salePrice: 25000,
    rating: 4.8,
    reviews: 250,
  },
  {
    title: "Special Sauce Noodles - Secret Recipe",
    description: "Don't miss out! 15 minutes remaining to discover the secret behind our special sauce.",
    image:
      "_nuxt/assets/img/mi3.jpg",
    discount: "Limited Time",
    originalPrice: 28000,
    salePrice: 20000,
    rating: 4.2,
    reviews: 85,
  },
  {
    title: "Gourmet Instant Noodles - Premium",
    description: "Indulge in premium quality! 6 days remaining to enjoy our gourmet instant noodles.",
    image:
      "_nuxt/assets/img/mi4.jpg",
    discount: "Weekly Special",
    originalPrice: 40000,
    salePrice: 32000,
    rating: 4.6,
    reviews: 180,
  },
]);


onMounted(() => {
  // You can add any initialization logic here if needed
  console.log('CardDiscount component mounted');
});
</script>

<style lang="scss" scoped>
.img {
  position: relative;
  

  border-radius: 10% 10% 0 0;
}
.v-img {
  border-radius: 10% 10% 0 0;
  transition: 0.5s;
}

.description {
  display: flex;
  flex-direction: column;

}
.title {
  margin-bottom: auto;
}
.discount {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #f44336;
  color: white;
  padding: 1rem 5px;
  border-radius: 0% 10% 0 0;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
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
    margin-bottom: auto;
  }
}


@media (min-width: 1440px) {
  .v-row {
    padding: 0 !important;
  }
 
  .title {
    font-size: 14px;
  
  }
  .des {
  
    font-size: 14px;
  }
  
}
@media (max-width: 768px) {
  .title {
    font-size: 14px;
  }
  .des {
    font-size: 12px;
  }

}
@media (max-width: 425px) {
  .v-row {
    padding: 0 !important;
  }
  .img {
    width: 100%;
  }

}
@media (max-width: 375px) {
 .title {
    font-size: 14px;
  }
  .des {
    font-size: 12px;
  }
 }

@media (max-width: 320px) {
  
}
</style>
