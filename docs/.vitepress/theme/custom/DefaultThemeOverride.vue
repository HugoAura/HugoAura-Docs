<script setup>
import DefaultTheme from "vitepress/theme";
import Footer from "./components/Footer.vue";
import naiveUIThemeOverrides from "./naive-ui/naiveUIThemeOverrides";
import { useRoute, useData } from "vitepress";
import { NConfigProvider } from "naive-ui";
import { darkTheme, lightTheme } from "naive-ui";
import { defineComponent, h, inject } from "vue";

const { Layout } = DefaultTheme;
const { isDark } = useData();

const CssRenderStyle = defineComponent({
  setup() {
    const collect = inject("css-render-collect");
    return {
      style: collect(),
    };
  },
  render() {
    return h("css-render-style", {
      innerHTML: this.style,
    });
  },
});

const VitepressPath = defineComponent({
  setup() {
    const route = useRoute();
    return () => {
      return h("vitepress-path", null, [route.path]);
    };
  },
});

const NaiveUIProvider = defineComponent({
  render() {
    return h(
      NConfigProvider,
      {
        abstract: true,
        inlineThemeDisabled: true,
        theme: isDark.value ? darkTheme : lightTheme,
        themeOverrides: naiveUIThemeOverrides,
      },
      {
        default: () => [
          h(Layout, null, () => {
            return {
              default: this.$slots.default?.(),
              "layout-bottom": h(Footer),
            };
          }),
          import.meta.env.SSR ? [h(CssRenderStyle), h(VitepressPath)] : null,
        ],
      }
    );
  },
});
</script>

<template>
  <NaiveUIProvider />
</template>
