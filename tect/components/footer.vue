<template>
  <footer class="new_footer_area bg_color">
    <div class="new_footer_top">
      <v-container>
        <v-row>
          <v-col cols="auto" lg="3" md="3" sm="12">
            <div
              class="f_widget about-widget pl_70 wow fadeInLeft"
              data-wow-delay="0.4s"
              style="
                visibility: visible;
                animation-delay: 0.4s;
                animation-name: fadeInLeft;
              "
            >
              <h3 class="f-title f_600 t_color f_size_18">Information</h3>
              <ul class="list-unstyled f_list">
                <li>
                  <v-img src="/favicon.ico" width="20%" alt="icon"> </v-img>
                </li>
                <li>
                  <a href="#">
                    <v-icon class="mt-1 mr-2">mdi-map-marker</v-icon>
                    <span> Dong Hoa District, Phu Yen Province </span>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <v-icon class="mt-1 mr-2">mdi-phone</v-icon>
                    <span> 0339955620 </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <v-icon class="mt-1 mr-2">mdi-mail</v-icon>
                    <span> ntquoc.work@gmail.com </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <v-icon class="mt-1 mr-2">mdi-clock-check</v-icon>
                    <span> Monday - Sunday </span>
                  </a>
                </li>
                <li>
                  <v-img src="../assets/img/logo_bct.jpg" width="40%"></v-img>
                </li>
              </ul>
            </div>
          </v-col>
          <v-col cols="auto" lg="3" md="3" sm="4">
            <div
              class="f_widget about-widget pl_70 wow fadeInLeft"
              data-wow-delay="0.6s"
              style="
                visibility: visible;
                animation-delay: 0.6s;
                animation-name: fadeInLeft;
              "
            >
              <h3 class="f-title f_600 t_color f_size_18">Help</h3>
              <ul class="list-unstyled f_list">
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Term &amp; conditions</a></li>
                <li><a href="#">Reporting</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Support Policy</a></li>
                <li><a href="#">Privacy</a></li>
              </ul>
            </div>
          </v-col>
          <v-col cols="auto" lg="3" md="3" sm="4">
            <div
              class="f_widget about-widget pl_70 wow fadeInLeft"
              data-wow-delay="0.4s"
              style="
                visibility: visible;
                animation-delay: 0.4s;
                animation-name: fadeInLeft;
              "
            >
              <h3 class="f-title f_600 t_color f_size_18">Payment</h3>
              <div class="payment">
                <v-img src="../assets/img/payment1.jpg" alt="payment"></v-img>
                <v-img src="../assets/img/payment2.jpg" alt="payment"></v-img>
                <v-img src="../assets/img/payment3.jpg" alt="payment"></v-img>
                <v-img src="../assets/img/payment4.jpg" alt="payment"></v-img>
                <v-img src="../assets/img/payment5.jpg" alt="payment"></v-img>
                <v-img src="../assets/img/payment6.jpg" alt="payment"></v-img>
              </div>
            </div>
          </v-col>

          <v-col cols="auto" lg="3" md="3" sm="4">
            <div
              class="f_widget social-widget pl_70 wow fadeInLeft"
              data-wow-delay="0.8s"
              style="
                visibility: visible;
                animation-delay: 0.8s;
                animation-name: fadeInLeft;
              "
            >
              <h3 class="f-title f_600 t_color f_size_18">Team Solutions</h3>
              <div class="f_social_icon">
                <v-icon> mdi-facebook </v-icon>
                <v-icon> mdi-twitter </v-icon>
                <v-icon> mdi-vimeo </v-icon>
                <v-icon> mdi-pinterest </v-icon>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <div class="footer_bg">
        <div class="footer_bg_one"></div>
        <div class="footer_bg_two"></div>
      </div>
    </div>
    <div class="footer_bottom">
      <v-container class="container">
        <v-row class="row align-items-center">
          <v-col cols="6" class="col-lg-6 col-sm-7">
            <p class="mb-0 f_400">© Inc.. 2024 All rights reserved.</p>
          </v-col>
          <v-col cols="6" class="col-lg-6 col-sm-5 text-right">
            <p>
              Made with <i class="icon_heart"></i> in
              <a href="http://cakecounter.com" target="_blank">Quoc Nguyen</a>
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
body {
  background: linear-gradient(
    180deg,
    rgba(255, 206, 103, 0.22) -42.47%,
    rgba(253, 237, 202, 0) 100%
  );
}

.new_footer_area {
  background: linear-gradient(
    180deg,
    rgba(255, 206, 103, 0.22) -42.47%,
    rgba(253, 237, 202, 0) 100%
  );
}

.new_footer_top {
  padding: 120px 0px 270px;
  position: relative;
  overflow-x: hidden;
}
.new_footer_area .footer_bottom {
  padding-top: 5px;
}
.footer_bottom {
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  color: #7f88a6;
  /* padding: 27px 0px; */
}
.new_footer_top .company_widget p {
  font-size: 16px;
  font-weight: 300;
  line-height: 28px;
  color: #6a7695;
  margin-bottom: 20px;
}
.new_footer_top .company_widget .f_subscribe_two .btn_get {
  border-width: 1px;
  margin-top: 20px;
}
.btn_get_two:hover {
  background: transparent;
  color: #ffb30e;
}
.btn_get:hover {
  color: #fff;
  background: #ffb30e;
  border-color: #ffb30e;
  -webkit-box-shadow: none;
  box-shadow: none;
}
a:hover,
a:focus,
.btn:hover,
.btn:focus,
button:hover,
button:focus {
  text-decoration: none;
  outline: none;
}

.new_footer_top .f_widget.about-widget .f_list li a:hover {
  color: #ffb30e;
}
.new_footer_top .f_widget.about-widget .f_list li {
  margin-bottom: 11px;
}
.f_widget.about-widget .f_list li:last-child {
  margin-bottom: 0px;
}
.f_widget.about-widget .f_list li {
  margin-bottom: 15px;
}
.f_widget.about-widget .f_list {
  margin-bottom: 0px;
}
.new_footer_top .f_social_icon a {
  width: 44px;
  height: 44px;
  line-height: 43px;
  background: transparent;
  border: 1px solid #e2e2eb;
  font-size: 24px;
}
.f_social_icon a {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  font-size: 14px;
  line-height: 45px;
  color: #858da8;
  display: inline-block;
  background: #ebeef5;
  text-align: center;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.ti-facebook:before {
  content: '\e741';
}
.ti-twitter-alt:before {
  content: '\e74b';
}
.ti-vimeo-alt:before {
  content: '\e74a';
}
.ti-pinterest:before {
  content: '\e731';
}

.btn_get_two {
  -webkit-box-shadow: none;
  box-shadow: none;
  background: #ffb30e;
  border-color: #ffb30e;
  color: #fff;
}

.btn_get_two:hover {
  background: transparent;
  color: #ffb30e;
}

.new_footer_top .f_social_icon a:hover {
  background: #ffb30e;
  border-color: #ffb30e;
  color: white;
}
.new_footer_top .f_social_icon a + a {
  margin-left: 4px;
}
.new_footer_top .f-title {
  margin-bottom: 30px;
  color: #263b5e;
}
.f_600 {
  font-weight: 600;
}
.f_size_18 {
  font-size: 18px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  color: #4b505e;
}
.new_footer_top .f_widget.about-widget .f_list li a {
  color: #6a7695;
}

.new_footer_top .footer_bg {
  position: absolute;
  bottom: 0;
  background: url('../assets/img/foot.png') no-repeat scroll center 0;
  width: 100%;
  height: 266px;
}

.new_footer_top .footer_bg .footer_bg_one {
  background: url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEia0PYPxwT5ifToyP3SNZeQWfJEWrUENYA5IXM6sN5vLwAKvaJS1pQVu8mOFFUa_ET4JuHNTFAxKURFerJYHDUWXLXl1vDofYXuij45JZelYOjEFoCOn7E6Vxu0fwV7ACPzArcno1rYuVxGB7JY6G7__e4_KZW4lTYIaHSLVaVLzklZBLZnQw047oq5-Q/s16000/volks.gif')
    no-repeat center center;
  width: 330px;
  height: 105px;
  background-size: 100%;
  position: absolute;
  bottom: 0;
  left: 30%;
  -webkit-animation: myfirst 22s linear infinite;
  animation: myfirst 22s linear infinite;
}

.new_footer_top .footer_bg .footer_bg_two {
  background: url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyLGwEUVwPK6Vi8xXMymsc-ZXVwLWyXhogZxbcXQYSY55REw_0D4VTQnsVzCrL7nsyjd0P7RVOI5NKJbQ75koZIalD8mqbMquP20fL3DxsWngKkOLOzoOf9sMuxlbyfkIBTsDw5WFUj-YJiI50yzgVjF8cZPHhEjkOP_PRTQXDHEq8AyWpBiJdN9SfQA/s16000/cyclist.gif')
    no-repeat center center;
  width: 88px;
  height: 100px;
  background-size: 100%;
  bottom: 0;
  left: 38%;
  position: absolute;
  -webkit-animation: myfirst 30s linear infinite;
  animation: myfirst 30s linear infinite;
}
.payment {
  display: grid;
  grid-template-columns: repeat(3, 3rem);
  gap: 5px;

  .v-img {
    width: 50px;
  }
}

@-moz-keyframes myfirst {
  0% {
    left: -25%;
  }
  100% {
    left: 100%;
  }
}

@-webkit-keyframes myfirst {
  0% {
    left: -25%;
  }
  100% {
    left: 100%;
  }
}

@keyframes myfirst {
  0% {
    left: -25%;
  }
  100% {
    left: 100%;
  }
}
</style>
