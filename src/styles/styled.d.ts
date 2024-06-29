// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text: "#343434";
      subtext: "#7A7F93";
      element_bg: "#F4F5FB";
      element_bg_darker: "#e1e3eb";
      element_stroke: "#E7E7E7";
      link: "#0273DD";
      genericElementColor: "#242424";
    };
    fonts: {
      Jakarta: "Jakarta";
      Quincy: "Quincy";
      Dahila: "Dahila";
    };
    spacing: {
      M: "10px";
      ML: "14px";
      L: "16px";
      XL: "30px";
    };
    fontSize: {
      S: "14px";
      M: "18px";
      ML: "20px";
      L: "24px";
      XXXL: "38px";
    };
  }
}
