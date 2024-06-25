import { IProject } from "./Data";
import { INavigationObject } from "./Constants";

export interface IGalleryProps {
  elements: IProject[];
}

export interface ITileProps {
  data: IProject;
}

export interface INavMenuProps {
  elements: INavigationObject[];
}
