<script setup lang="ts">

const props = defineProps({
  data: {
    type: String,
    required: true,
  },
});

</script>

<template>
  <div class="modal">
    <div class="modal-content">
      <span class="close" @click="$emit('close')">{{props.data}}</span>
      <slot name="tab1"></slot>
      <slot name="tab2"></slot>
    </div>
  </div>

</template>

<style scoped lang="scss">

</style>