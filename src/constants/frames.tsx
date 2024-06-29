import SvgStrokeHoverEffect from "../components/frames/SvgStrokeHoverEffect/SvgStrokeHoverEffect";
import SvgStrokeHoverEffectPreview from "../components/frames/SvgStrokeHoverEffect/SvgStrokeHoverEffectPreview";
import { Frame } from "../types/Data";
import { tags } from "./tags";

export const frames: Frame[] = [
  {
    title: "SVG stroke hover effect",
    tags: [tags.threejs],
    link: "/svg-stroke-hover-effect",
    preview: <SvgStrokeHoverEffectPreview />,
    frame: <SvgStrokeHoverEffect />,
  },
];
