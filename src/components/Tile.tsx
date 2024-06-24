import { ITileProps } from "../types/PropTypes";

const Tile = ({ data }: ITileProps) => {
  return <div>{data.title}</div>;
};

export default Tile;
