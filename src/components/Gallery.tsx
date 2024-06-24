import Tile from "./Tile";
import { IGalleryProps } from "../types/PropTypes";

const Gallery = ({ elements }: IGalleryProps) => {
  return (
    <>
      {elements.map((elem) => (
        <Tile data={elem} />
      ))}
    </>
  );
};

export default Gallery;
