import { type GlobalThemeOverrides } from "naive-ui";

const PRIMARY_HEX = "#00A1FF";
const PRIMARY_DEEP = "#0186d3ff";

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: PRIMARY_HEX,
  },
  Button: {
    rippleColor: PRIMARY_HEX,
    textColorHover: PRIMARY_HEX,
    textColorPressed: PRIMARY_DEEP,
    textColorFocus: PRIMARY_HEX,
    borderHover: `1px solid ${PRIMARY_HEX}`,
    borderPressed: `1px solid ${PRIMARY_DEEP}`,
    borderFocus: `1px solid ${PRIMARY_HEX}`,
  },
};

export default themeOverrides;
