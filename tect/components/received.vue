<template>
  <div @click="test"  style="cursor: pointer">
    {{ received }}
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  received: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["received-event"]);
const test = () => {
  emit("received-event", props.received);
};
</script>

<style lang="scss" scoped></style>
