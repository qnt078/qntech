<template>
  <div>
    <v-data-table
    v-model:page="page"
      :headers="headers"
      :items="items"
      item-key="name"
      items-per-page="10"
      class="elevation-1"
      hover
    >
      <template #item.createdAt="{ item }">
        {{
          new Date(item.createdAt).toLocaleDateString(
            "en-US",
            {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }
          )
        }}
      </template>

      <template #item.orderItems="{ item }">
        <v-chip
          v-for="(orderItem, index) in item.orderItems as any"
          :key="index"
          color="primary"
          size="small"
          class="mx-1 my-1"
          draggable
        >
          {{ orderItem.name }}
        </v-chip>
      </template>

      <template #item.totalPrice="{ item }">
        {{ vndong.format(item.totalPrice) }}
      </template>

      <template #item.shippingAddress="{ item }">
        <p>
          {{ item.shippingAddress.name }}, {{ item.shippingAddress.phone }},
          {{ item.shippingAddress.address }}
        </p>
      </template>

      <template #item.isPaid="{ item }">
        <v-chip
          :color="item.isPaid ? 'success' : 'error'"
          text-color="white"
          class="mr-2"
        >
          {{ item.isPaid ? "Paid" : "Not Paid" }}
        
        </v-chip>
      </template>

      <template #item.isDelivered="{ item }">
        <v-chip
          :color="item.isDelivered ? 'success' : 'error'"
          text-color="white"
          class="mr-2"
        >
          {{ item.isDelivered ? "Delivered" : "Not Delivered" }}
        </v-chip>
      </template>

      <template #item.actions="{ item }">
        <div
          class="d-flex flex-row align-center justify-center"
          style="gap: 5px"
        >
        <nuxt-link :to="`/order/${item._id}`">
          <v-chip  color="primary" size="small">
            <v-icon>mdi-eye</v-icon>
          </v-chip>
        </nuxt-link>
         

          <v-chip
            v-if="!item.isDelivered"
            color="red"
            size="small"
            @click="deleteItem(item._id)"
          >
            <v-icon>mdi-delete</v-icon>
          </v-chip>
        </div>
      </template>
      <template #bottom>
      <div class="text-center pt-2">
        <v-pagination
          v-model="page"
          :length="pageCount"
        ></v-pagination>
      </div>
    </template>
    </v-data-table>
  </div>
</template>

<script setup lang="ts">
interface Order {
  _id: string;
  createdAt: string;
  orderItems: string;
  paymentMethod: string;
  shippingAddress: string | any;
  totalPrice: number;
  isPaid: boolean;
  isDelivered: boolean;
}
import { ref } from "vue";
const nuxtApp = useNuxtApp();
const vndong = nuxtApp.$vietnamdong as any;
const props = defineProps({
  items: Array<Order>,
});
const page = ref(1);

const headers: any = [
  {
    title: "Date",
    align: "start",
    key: "createdAt",
  },
  { title: "Order Items", align: "center", key: "orderItems"},
  { title: "Total Price", align: "center", key: "totalPrice" },
  { title: "Shipping Address", align: "center", key: "shippingAddress" },
  { title: "Payment Method", align: "center", key: "paymentMethod" },
  { title: "Paid", align: "center", key: "isPaid" },
  { title: "Delivered", align: "center", key: "isDelivered" },
  { title: "Actions", align: "center", key: "actions" },
];

const pageCount = () => {
  return Math.ceil((props.items?.length ?? 0) / 10);

};

const deleteItem = (id: string) => {
  // remove item from the list prop items
  const index = props.items?.findIndex((item) => item._id === id) ?? -1;
  props.items?.splice(index, 1);

  
};
</script>

<style scoped></style>
