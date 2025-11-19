import { defineConfig } from "vitepress";
import { fileURLToPath, URL } from "node:url";
import importedSocialLinksData from "./subconfig/socialLink";
import importedSidebarArr from "./subconfig/sidebar";
import importedLocalSearchOptions from "./subconfig/searchOpt";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HugoAura Docs",
  description: "Next era of Seewo Hugo tricking",
  cleanUrls: true,
  // ▽ Begin of config for Vitepress Default Theme
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "用户教程", link: "/userGuide/introduction" },
      { text: "开发者文档", link: "/developerGuide/wip" }
    ],
    sidebar: importedSidebarArr,
    socialLinks: importedSocialLinksData,
    search: {
      provider: "local",
      options: importedLocalSearchOptions,
    },
  },
  // △ End of config for Vitepress Default Theme
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
  vite: {
    resolve: {
      alias: [
        {
          find: "@",
          replacement: fileURLToPath(new URL("./", import.meta.url)),
        },
      ],
    },
  },
});
