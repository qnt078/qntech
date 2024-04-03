<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="card animate__animated animate__fadeInLeft">
            <div class="card-span ">
              <div class="card-content">
                <h4>Best deals <span>Crispy Sandwiches</span></h4>
                <p>
                  Enjoy the large size of sandwiches. Complete your meal with
                  the perfect slice of sandwiches.
                </p>

                <v-btn color="primary" class="text-white">
                  PROCESS TO ORDER
                  <v-icon class="ml-2"> mdi-chevron-right </v-icon>
                </v-btn>
              </div>
              <div class="card-image"></div>
            </div>
          </div>
        </v-col>

        <v-col cols="12">
          <div class="card animate__animated animate__fadeInRight">
            <div class="card-span-2 ">
              <div class="card-image"></div>
              <div class="card-content">
                <h4>Best deals <span>Crispy Sandwiches</span></h4>
                <p>
                  Enjoy the large size of sandwiches. Complete your meal with
                  the perfect slice of sandwiches.
                </p>

                <v-btn color="primary" class="text-white">
                  PROCESS TO ORDER
                  <v-icon class="ml-2"> mdi-chevron-right </v-icon>
                </v-btn>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts"></script>

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
    .card-image {
      background-image: url("_nuxt/assets/img/Image.png");
      background-size: cover;
      background-position: center;
      border-radius: 0 10px 10px 0;
      width: 70%;
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
      background-image: url("_nuxt/assets/img/Image.png");
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
  }
}
@media screen and (max-width: 1440px) {
  .card {
    padding: 0;
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

@media screen and (max-width: 425px) {
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
