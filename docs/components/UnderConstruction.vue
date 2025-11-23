<script setup lang="ts">
import { Construction as IconConstruction } from "@vicons/carbon";
</script>

<template>
  <div class="under-construction-notify">
    <IconConstruction class="under-construction-icon" />
    <p class="under-construction-notify-title">此页面正在施工中</p>
    <p class="under-construction-notify-desc">
      <slot name="description"></slot>
    </p>
  </div>
</template>

<style lang="css" scoped>
.under-construction-notify {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.75;
  margin-top: 1rem;
}

.under-construction-notify .under-construction-icon {
  width: 3rem;
  height: 3rem;
  margin-bottom: 0.5rem;
}

.under-construction-notify .under-construction-notify-title {
  font-size: x-large;
  font-weight: 400;
}

.under-construction-notify .under-construction-notify-desc {
  opacity: 0.8;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  text-align: center;
}
</style>
