<template>
  <div class="d-flex justify-content-center" v-if="loader">
    <div class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Spinner",
  props: {
      loader: {
          type: Boolean,
          default: false
      }
  }
};
</script>

<style>
</style>
