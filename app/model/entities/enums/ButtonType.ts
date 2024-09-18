import { fillDefaultComponentBackground, hoverFillDefaultComponentBackground, fillYellowComponentBackground, hoverFillYellowComponentBackground, fillRedComponentBackground, hoverFillRedComponentBackground } from "@/app/ui/tailwindClasses";

export type ButtonType = "default" | "warning" | "danger"

export function checkTypeButton(type: "default" | "warning" | "danger") {
    if (type === "default") {
      return `${fillDefaultComponentBackground} ${hoverFillDefaultComponentBackground}`;
    }
  
    if (type === "warning") {
      return `${fillYellowComponentBackground} ${hoverFillYellowComponentBackground}`;
    }
  
    if (type === "danger") {
      return `${fillRedComponentBackground} ${hoverFillRedComponentBackground}`;
    }
  }