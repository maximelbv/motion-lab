import TestComponent from "../components/TestComponent";
import ThreeBoxPreview from "../components/frames/ThreeBox/ThreeBoxPreview";
import { Frame } from "../types/Data";
import { tags } from "./tags";

export const frames: Frame[] = [
  {
    title: "SVG stroke hover effect",
    tags: [tags.threejs],
    link: "/svg-stroke-hover-effect",
    preview: <ThreeBoxPreview />,
    frame: <TestComponent />,
  },
];
