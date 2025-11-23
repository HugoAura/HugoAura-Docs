<script setup>
import { defineProps } from "vue";

defineProps({
  light: String,
  dark: String,
  alt: String,
  zoom: Boolean,
});
</script>

<template>
  <div class="as-image-container">
    <img
      :src="light"
      :class="`light-only${zoom ? ' zoomable' : ''}`"
      :alt="alt"
    />
    <img
      :src="dark"
      :class="`dark-only${zoom ? ' zoomable' : ''}`"
      :alt="alt"
    />
  </div>
</template>

<style scoped>
html:not(.dark) img.dark-only {
  display: none !important;
}
html.dark img.light-only {
  display: none !important;
}

.as-image-container {
  display: inline-block;
}
</style>
