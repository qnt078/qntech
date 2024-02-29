<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <swiper
            :effect="'cards'"
            :grabCursor="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide>
              <div class="card">
                <img src="../assets/img/Image.png" alt="" />
                <div class="card-content">
                  <h4>
                    <span>Enjoy meals</span>
                  </h4>
                  <p>Food is made and delivered directly to your home.</p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>Slide 2</swiper-slide
            ><swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide
            ><swiper-slide>Slide 5</swiper-slide>
          </swiper>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

const modules = [EffectCards];
</script>

<style lang="scss" scoped>
.swiper {
  width: 440px;
  height: 620px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.swiper-slide:nth-child(1n) {
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  background-image: linear-gradient(to left, #f7ba2b 0%, #ea5358 100%);
  padding: 5px;
  .card {
    position: relative;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
    .card-content {
      position: absolute;
      bottom: 30%;
      width: 100%;
      h4 {
        font-size: 32px;
        font-weight: 700;
        margin: 0;
        text-align: left;
        span {
          color: #ffffff;
        }
      }
      p {
        font-size: 16px;
        line-height: 20px;
        color: #ffffff;
        font-weight: 500;
        text-align: left;
      }
      .v-btn {
        margin-top: 10px;
        width: 100%;
      }
    }
    
  }
  .card::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }
}
.swiper-slide:nth-child(2n) {
  background-color: rgb(0, 140, 255);
}

.swiper-slide:nth-child(3n) {
  background-color: rgb(10, 184, 111);
}

.swiper-slide:nth-child(4n) {
  background-color: rgb(211, 122, 7);
}

.swiper-slide:nth-child(5n) {
  background-color: rgb(118, 163, 12);
}
</style>
