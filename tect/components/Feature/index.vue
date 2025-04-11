<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="card animate__animated animate__fadeInLeft">
            <div class="card-span">
              <div class="card-content">
                <h4>
                  Chicken Tagine with Potatoes <span>Carrots and Apples</span>
                </h4>
                <p>
                  Savor the delightful blend of tender chicken, sweet apples,
                  and hearty vegetables in our exquisite tagine.
                </p>

                <v-btn color="primary" class="text-white">
                  <div class="text-white font-weight-black">
                    PROCESS TO ORDER
                  </div>
                  <v-icon class="ml-2" color="white">
                    mdi-chevron-right
                  </v-icon>
                </v-btn>
              </div>
              <div class="video">
                <video playsinline autoplay muted loop>
                  <source :src="video" type="video/mp4" alt="video" />
                </video>
              </div>
            </div>
          </div>
        </v-col>

        <v-col cols="12">
          <div class="card animate__animated animate__fadeInRight">
            <div class="card-span-2">
              <div class="card-image"></div>
              <div class="card-content">
                <h4>Best deals <span>Crispy Sandwiches</span></h4>
                <p>
                  Enjoy the large size of sandwiches. Complete your meal with
                  the perfect slice of sandwiches.
                </p>

                <v-btn color="primary" class="font-weight-black">
                  <div class="text-white">PROCESS TO ORDER</div>
                  <v-icon class="ml-2" color="white">
                    mdi-chevron-right
                  </v-icon>
                </v-btn>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import video from '@/assets/video/video1.mp4'
</script>

<style lang="scss" scoped>
.card {
  padding: 0 10rem 0 10rem;

  .card-span {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    background-color: #ffffff;
    height: 450px;
    border-radius: 10px;
    box-shadow: 0px 10px 10px 10px #ccc;

    .card-content {
      // width: 30%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 10rem;
      gap: 1rem;

      h4 {
        font-size: 2.5rem;
        font-weight: 700;
        margin: 0;
        text-align: left;
        span {
          color: #ffb30e;
        }
      }
      p {
        font-size: 18px;
        line-height: 20px;
        color: #616161;
        font-weight: 500;
        text-align: left;
      }
      .v-btn {
        margin-top: 10px;
        width: 100%;
      }
    }
    .video {
      height: 100%;

      video {
        height: 100%;
      }
    }
  }
  .card-span-2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 4rem;
    background-color: #ffffff;
    height: 450px;
    border-radius: 10px;
    box-shadow: 0px 10px 10px 10px #ccc;

    .card-image {
      background-image: url('@/assets/img/Image.png');
      background-size: cover;
      background-position: center;
      border-radius: 10px 0 0 10px;
      width: 70%;
    }
    .card-content {
      width: 30%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 4rem;
      gap: 2.5rem;

      h4 {
        font-size: 32px;
        font-weight: 700;
        margin: 0;
        text-align: left;
        span {
          color: #ffb30e;
        }
      }
      p {
        font-size: 16px;
        line-height: 20px;
        color: #616161;
        font-weight: 500;
        text-align: left;
      }
      .v-btn {
        margin-top: 10px;
        width: 100%;
      }
    }
  }
}

@media screen and (min-width: 1440px) and (max-width: 1920px) {
  .card {
    padding: 0;

    .card-span {
      height: 450px;

      .card-content {
        padding: 2rem;
        h4 {
          font-size: 24px;
        }
        p {
          font-size: 14px;
        }
        .v-btn {
          margin-top: 10px;
          width: 100%;
        }
      }
    }

    .video {
      height: 100%;
      video {
        height: 100%;
      }
    }
  }
}
@media screen and (max-width: 1440px) {
  .card {
    padding: 0;

    .card-span {
      height: 300px;

      .card-content {
        padding: 2rem;
        h4 {
          font-size: 24px;
        }
        p {
          font-size: 14px;
        }
        .v-btn {
          margin-top: 10px;
          width: 100%;
        }
      }
    }

    .video {
      height: 100%;
      video {
        height: 100%;
      }
    }
  }
  /* .card-span {
    flex-direction: column;
    height: 100%;
    .card-content {
      width: 100%;
      padding: 2rem;
      h4 {
        font-size: 24px;
      }
      p {
        font-size: 14px;
      }
      .v-btn {
        margin-top: 10px;
        width: 100%;
      }
    }
    .card-image {
      width: 100%;
      border-radius: 0 0 10px 10px;
    }
  }
  .card-span-2 {
    flex-direction: column;
    margin-top: 2rem;
    height: 100%;
    .card-image {
      width: 100%;
      border-radius: 10px 10px 0 0;
    }
    .card-content {
      width: 100%;
      padding: 2rem;
      h4 {
        font-size: 24px;
      }
      p {
        font-size: 14px;
      }
      .v-btn {
        margin-top: 10px;
        width: 100%;
      }
    }
  } */
}

@media screen and (max-width: 1280px) {
  .card {
    padding: 0;
    .card-span {
      .card-content {
        width: 60%;
      }

      .card-image {
        width: 40%;
      }
    }

    .card-span-2 {
      .card-content {
        width: 60%;
      }

      .card-image {
        width: 40%;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .card {
    padding: 0;
  }
  .card-span {
    flex-direction: column;
    height: 100%;
    .card-content {
      width: 100%;
      padding: 2rem;
      h4 {
        font-size: 24px;
      }
      p {
        font-size: 14px;
      }
      .v-btn {
        margin-top: 10px;
        width: 100%;
      }
    }
    .card-image {
      width: 100%;
      border-radius: 0 0 10px 10px;
    }
  }
  .card-span-2 {
    flex-direction: column;
    margin-top: 2rem;
    height: 100%;
    .card-image {
      width: 100%;
      border-radius: 10px 10px 0 0;
    }
    .card-content {
      width: 100%;
      padding: 2rem;
      h4 {
        font-size: 24px;
      }
      p {
        font-size: 14px;
      }
      .v-btn {
        margin-top: 10px;
        width: 100%;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .card {
    padding: 0;

    .card-span {
      height: 200px;

      .card-content {
        padding: 2rem;
        h4 {
          font-size: 16px;
        }
        p {
          font-size: 12px;
        }
        .v-btn {
          display: none;
          margin-top: 10px;
          width: 100%;
        }
      }
    }

    .video {
      height: 100%;
      video {
        height: 100%;
      }
    }
  }
}
@media screen and (max-width: 428px) {
  .card {
    padding: 0;
    height: auto;
    .card-span {
      display: none !important;
      flex-direction: column-reverse;

      .card-content {
        width: 100%;
        height: 60%;
        padding: 1rem;
        gap: 1rem;
        h4 {
          font-size: 16px;
        }
        p {
          font-size: 14px;
        }
      }
      .video {
        width: 100%;
        height: 100%;
        border-radius: 0 0 10px 10px;
      }
    }
    .card-span-2 {
      display: flex;
      flex-direction: column-reverse;
      margin-top: -8rem;

      .card-content {
        width: 100%;
        height: 60%;
        padding: 2rem;
        gap: 1rem;
        h4 {
          font-size: 24px;
        }
        p {
          font-size: 14px;
        }
      }
      .card-image {
        width: 100%;
        height: 40%;
        border-radius: 10px 10px 0 0;
      }
    }
  }
}

@media screen and (max-width: 375px) {
  .card {
    padding: 0;
    height: auto;
    .card-span {
      display: flex;
      flex-direction: column-reverse;

      .card-content {
        width: 100%;
        height: 60%;
        padding: 2rem;
        gap: 1rem;
        h4 {
          font-size: 24px;
        }
        p {
          font-size: 14px;
        }
      }
      .card-image {
        width: 100%;
        height: 40%;
        border-radius: 0 0 10px 10px;
      }
    }
    .card-span-2 {
      display: flex;
      flex-direction: column-reverse;
      margin-top: 2rem;

      .card-content {
        width: 100%;
        height: 60%;
        padding: 2rem;
        gap: 1rem;
        h4 {
          font-size: 24px;
        }
        p {
          font-size: 14px;
        }
      }
      .card-image {
        width: 100%;
        height: 40%;
        border-radius: 10px 10px 0 0;
      }
    }
  }
}

@media screen and (max-width: 320px) {
  .card {
    padding: 0;
    height: auto;
    .card-span {
      display: flex;
      flex-direction: column-reverse;

      .card-content {
        width: 100%;
        height: 60%;
        padding: 2rem;
        gap: 1rem;
        h4 {
          font-size: 16px;
        }
        p {
          font-size: 12px;
        }
      }
      .card-image {
        width: 100%;
        height: 40%;
        border-radius: 0 0 10px 10px;
      }
    }
    .card-span-2 {
      display: flex;
      flex-direction: column-reverse;
      margin-top: 2rem;

      .card-content {
        width: 100%;
        height: 60%;
        padding: 2rem;
        gap: 1rem;
        h4 {
          font-size: 16px;
        }
        p {
          font-size: 12px;
        }
      }
      .card-image {
        width: 100%;
        height: 40%;
        border-radius: 10px 10px 0 0;
      }
    }
  }
}
</style>
