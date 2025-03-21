<template>
  <div class="carousel">
    <v-carousel hide-delimiters>
      <div v-for="(item, index) in items" :key="index">
        <v-carousel-item>
          <div class="item">
            <div class="image">
              <img :src="item.image" alt="" />
            </div>
            <div class="review">
              <h3>👋 {{ item.name }}</h3>
              <p>
                {{ item.review }}
              </p>
            </div>
          </div>
        </v-carousel-item>
      </div>
    </v-carousel>
  </div>
</template>

<script setup lang="ts">
interface Review {
  image: string
  name: string
  review: string
}

import image from '@/assets/img/avatar.jpg'
import image1 from '@/assets/img/avatar1.jpg'
import image2 from '@/assets/img/avatar2.jpg'
const items: Review[] = [
  {
    image: image,
    name: 'Jane Smith',
    review: 'This is a great product! I highly recommend it.',
  },
  {
    image: image1,
    name: 'Alice',
    review:
      'I love the quality and the fast delivery. Will definitely buy again!',
  },
  {
    image: image2,
    name: 'Anna',
    review:
      'Excellent service and amazing product. Very satisfied with my purchase.',
  },
]
</script>

<style lang="scss" scoped>
.carousel {
  width: 100%;
  height: 100%;
}
.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  .image {
    width: 500px;
    height: 500px;
    border-radius: 67% 33% 61% 39% / 47% 30% 70% 53%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .review {
    font-size: 16px;
    font-weight: 500;
    text-align: center;

    h3 {
      font-size: 52px;
      font-weight: 700;
      text-align: left;
      margin: 0;
    }
    p {
      margin: 0;
      font-size: 16px;
      font-weight: 500;
      text-align: left;
      width: 800px;
    }
  }
}

@media screen and (max-width: 1024px) {
  .item {
    .image {
      width: 400px;
      height: 400px;
    }
    .review {
      font-size: 16px;
      font-weight: 500;
      text-align: center;

      h3 {
        font-size: 40px;
      }
      p {
        width: 400px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .item {
    .image {
      width: 400px;
      height: 400px;
    }
    .review {
      font-size: 16px;
      font-weight: 500;
      text-align: center;

      h3 {
        font-size: 40px;
      }
      p {
        font-size: large;
        width: 400px;
      }
    }
  }
}
@media screen and (max-width: 428px) {
  .item {
    display: flex;
    flex-direction: column;
    height: 100%;
    .image {
      width: 300px;
      height: 300px;
    }
    .review {
      font-size: 16px;
      font-weight: 500;
      text-align: center;
      padding: 1rem;

      h3 {
        font-size: 26px;
        text-align: center;
      }
      p {
        font-size: 16px;
        text-align: center;
        width: auto;
      }
    }
  }
}
</style>
