<script setup lang="ts">
import { defineProps } from "vue";
import { NAlert, NIcon } from "naive-ui";

type NAlertType =
  | "default"
  | "info"
  | "warning"
  | "error"
  | "success"
  | undefined;

defineProps({
  type: String,
  title: String,
  titleOnly: Boolean,
});
</script>

<template>
  <ClientOnly>
    <NAlert :class="`${titleOnly ? 'n-alert-hide-body' : ''}`" :title="title" :type="type as NAlertType">
      <template #icon>
        <NIcon>
          <slot name="icon"></slot>
        </NIcon>
      </template>
      <slot name="default"></slot>
    </NAlert>
  </ClientOnly>
</template>

<style lang="css">
.n-alert-hide-body .n-alert-body__content {
  display: none;
}
</style>
