// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import DefaultThemeOverride from "./custom/DefaultThemeOverride.vue";
import "./style.css";
import DocProp from "../../components/DocProp.vue";
import UnderConstruction from "../../components/UnderConstruction.vue";

export default {
  extends: DefaultTheme,
  Layout: DefaultThemeOverride,
  enhanceApp({ app, router, siteData }) {
    app.component("DocProp", DocProp);
    app.component("UnderConstruction", UnderConstruction);
  },
} satisfies Theme;
