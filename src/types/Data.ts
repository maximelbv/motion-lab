interface ITag {
  name: string;
  icon: string;
}

export interface ITags {
  threejs: ITag;
  gsap: ITag;
}

export interface IGalleryTileData {
  title: string;
  tags: ITag[];
  preview: string | null;
}
