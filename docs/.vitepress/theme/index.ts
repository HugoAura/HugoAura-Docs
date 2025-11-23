// https://vitepress.dev/guide/custom-theme
import { useRoute } from "vitepress";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { setup } from "@css-render/vue3-ssr";
import mediumZoom from "medium-zoom";
import DefaultThemeOverride from "./custom/DefaultThemeOverride.vue";
import "./style.css";
import CustomThemeSiteNavigator from "./custom/components/SiteNavigator.vue";
import AutoSwitchImage from "./custom/components/AutoSwitchImage.vue";
import DocProp from "../../components/DocProp.vue";
import UnderConstruction from "../../components/UnderConstruction.vue";
import { nextTick, onMounted, watch } from "vue";

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
    app.component("AutoDarkImage", AutoSwitchImage);
    app.component("DocProp", DocProp);
    app.component("UnderConstruction", UnderConstruction);
  },
  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom("img.zoomable");
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
} satisfies Theme;
