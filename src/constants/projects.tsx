import TestComponent from "../components/TestComponent";
import { IProject } from "../types/Data";
import { tags } from "./tags";

export const projects: IProject[] = [
  {
    title: "Test",
    tags: [tags.threejs],
    component: <TestComponent />,
  },
];
