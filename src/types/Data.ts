import { ReactNode } from "react";

interface Tag {
  name: string;
  icon: string;
}

export interface Tags {
  threejs: Tag;
  gsap: Tag;
}

export interface Frame {
  title: string;
  tags: Tag[];
  component: ReactNode;
}
