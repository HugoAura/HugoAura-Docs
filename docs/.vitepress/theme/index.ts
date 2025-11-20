// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { setup } from "@css-render/vue3-ssr";
import DefaultThemeOverride from "./custom/DefaultThemeOverride.vue";
import "./style.css";
import CustomThemeSiteNavigator from "./custom/components/SiteNavigator.vue";
import DocProp from "../../components/DocProp.vue";
import UnderConstruction from "../../components/UnderConstruction.vue";

export default {
  extends: DefaultTheme,
  Layout: DefaultThemeOverride,
  enhanceApp({ app, router, siteData }) {
    // @ts-expect-error
    if (import.meta.env.SSR) {
      const { collect } = setup(app);
      app.provide("css-render-collect", collect);
    }

    app.component("CustomThemeSiteNavigator", CustomThemeSiteNavigator);
    app.component("DocProp", DocProp);
    app.component("UnderConstruction", UnderConstruction);
  },
} satisfies Theme;
