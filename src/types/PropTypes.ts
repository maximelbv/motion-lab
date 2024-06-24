import { IGalleryTileData } from "./Data";
import { INavigationObject } from "./Constants";

export interface IGalleryProps {
  elements: IGalleryTileData[];
}

export interface ITileProps {
  data: IGalleryTileData;
}

export interface INavMenuProps {
  elements: INavigationObject[];
}
