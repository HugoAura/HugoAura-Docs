import { DefaultTheme } from "vitepress";

const localSearchOptions: DefaultTheme.LocalSearchOptions = {
  locales: {
    root: {
      translations: {
        button: {
          buttonText: "搜索",
          buttonAriaLabel: "search",
        },
        modal: {
          noResultsText: "未能找到结果",
          resetButtonTitle: "清除查询条件",
        },
      },
    },
  },
};

export default localSearchOptions;
