import { ReactNode } from "react";

interface ITag {
  name: string;
  icon: string;
}

export interface ITags {
  threejs: ITag;
  gsap: ITag;
}

export interface IProject {
  title: string;
  tags: ITag[];
  component: ReactNode;
}
