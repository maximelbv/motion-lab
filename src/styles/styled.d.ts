// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text: "#545662";
      subtext: "#7A7F93";
      element_bg: "#F4F5FB";
      element_bg_darker: "#e1e3eb";
      element_stroke: "#E7E7E7";
      link: "#0273DD";
    };
    fonts: {
      Jakarta: "Jakarta";
      Quincy: "Quincy";
    };
    spacing: {
      M: "10px";
      L: "16px";
      XL: "20px";
    };
    fontSize: {
      L: "24px";
      XXXL: "38px";
    };
  }
}
