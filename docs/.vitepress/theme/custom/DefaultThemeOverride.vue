<script setup>
import DefaultTheme from "vitepress/theme";
import Footer from "./components/Footer.vue";

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #layout-bottom> <Footer /> </template>
  </Layout>
</template>
