import TestComponent from "../components/TestComponent";
import ThreeBox from "../components/frames/ThreeBox/ThreeBox";
import ThreeBoxPreview from "../components/frames/ThreeBox/ThreeBoxPreview";
import ThreeCanvasLayout from "../layouts/ThreeCanvasLayout";
import { Frame } from "../types/Data";
import { tags } from "./tags";

export const frames: Frame[] = [
  {
    title: "Test",
    tags: [tags.threejs],
    link: "/test",
    preview: <ThreeBoxPreview />,
    frame: <TestComponent />,
  },
  {
    title: "My first R3F render",
    tags: [tags.threejs],
    link: "/my-first-r3f-render",
    preview: <ThreeBoxPreview />,
    frame: (
      <ThreeCanvasLayout>
        <ThreeBox />
      </ThreeCanvasLayout>
    ),
  },
];
