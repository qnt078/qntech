<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="card">
            <div class="card-span">
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
          <div class="card">
            <div class="card-span-2">
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
      background-image: url("../assets/img/Image.png");
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
      background-image: url("../assets/img/Image.png");
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
</style>
