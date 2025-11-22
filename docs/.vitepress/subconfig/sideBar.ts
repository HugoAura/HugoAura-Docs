import { DefaultTheme } from "vitepress";

const sidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "用户教程",
    items: [
      { text: "前言", link: "/userGuide/introduction" },
      {
        text: "安装",
        items: [
          { text: "选择安装方式", link: "/userGuide/installation/summary" },
          { text: "一键安装", link: "/userGuide/installation/autoInstall" },
          { text: "手动安装", link: "/userGuide/installation/manualInstall" }
        ],
        collapsed: true,
      },
    ],
    collapsed: false,
  },
];

export default sidebar;
