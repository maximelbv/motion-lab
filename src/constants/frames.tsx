import TestComponent from "../components/TestComponent";
import ThreeBox from "../components/frames/ThreeBox";
import ThreeCanvasLayout from "../layouts/ThreeCanvasLayout";
import { Frame } from "../types/Data";
import { tags } from "./tags";

export const frames: Frame[] = [
  {
    title: "Test",
    tags: [tags.threejs],
    component: <TestComponent />,
  },
  {
    title: "My first R3F render",
    tags: [tags.threejs],
    component: (
      <ThreeCanvasLayout>
        <ThreeBox />
      </ThreeCanvasLayout>
    ),
  },
];
