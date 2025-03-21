<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <loading
          v-model:active="check"
          :can-cancel="true"
          color="#FFB30E"
          :is-full-page="fullPage"
        />
        <v-sheet
          v-show="!check"
          class="pa-12"
          color="grey-lighten-3"
          rounded="lg"
          elevation="12"
        >
          <div class="title text-center mb-4">
            <h2
              class="text-primary text-h4 mb-2 text-uppercase font-weight-bold"
            >
              Payment
            </h2>
          </div>
          <p class="text-blue text-h7 mb-2">
            Order ID:
            <span class="text-grey">
              {{ orderID }}
            </span>
          </p>
          <!-- <p class="text-blue text-h7 mb-2">
            Amount:

            <span class="text-grey"> ${{ amount / 100 }} </span>
          </p> -->

          <v-form id="payment-form" @submit.prevent="handleSubmit">
            <div id="payment-element">
              <!--Stripe.js injects the Payment Element-->
            </div>
            <v-btn
              type="submit"
              :disabled="isLoading"
              class="mt-4 text-white"
              block
            >
              <span id="button-text" v-if="!isLoading">Pay now</span>
              <span id="button-text" v-else>Loading...</span>
            </v-btn>
            <div id="payment-message" v-if="message">{{ message }}</div>
          </v-form>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import useStripe from '~/composables/useStripe'
import Loading from 'vue-loading-overlay'
const { getStripe } = useStripe()
const nuxtApp = useNuxtApp()
const api = nuxtApp.$api
const stripe = ref(null)
const elements = ref(null)
const isLoading = ref(false)
const fullPage = ref(false)
const check = ref(true)
const message = ref('')
const orderID = ref(useRoute().params.orderID)
const amount = ref(useRoute().params.price)
onMounted(async () => {
  stripe.value = await getStripe()
  console.log(orderID, amount)
  const clientSecret = await createPaymentIntent(amount.value)

  console.log(clientSecret)
  elements.value = stripe.value.elements({ clientSecret })
  const paymentElement = elements.value.create('payment')
  paymentElement.mount('#payment-element')
})

const createPaymentIntent = async (amount) => {
  try {
    const response = await api.post('/payment', {
      amount: amount,
      currency: 'usd',
    })
    console.log(response)
    check.value = false
    return response
  } catch (err) {
    console.log(err)
  }
}

const handleSubmit = async (e) => {
  try {
    isLoading.value = true

    const { error } = await stripe.value.confirmPayment({
      elements: elements.value,
      confirmParams: {
        return_url: `http://localhost:3000/success/${orderID.value}`,
      },
    })

    if (error) {
      message.value = error.message
    } else {
      message.value =
        'Success! Check your Stripe dashboard for payment details.'
    }
    isLoading.value = false
  } catch (err) {
    console.log(err)
  }
}
</script>
