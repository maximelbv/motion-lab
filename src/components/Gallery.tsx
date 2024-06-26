import Tile from "./Tile";
import styled from "styled-components";
import { device } from "../styles/Breakpoints";
import { Frame } from "../types/Data";

export const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  gap: ${({ theme }) => theme.spacing.M};
  @media (${device.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (${device.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (${device.sm}) {
    grid-template-columns: 1fr;
  }
`;

export interface GalleryProps {
  elements: Frame[];
}

const Gallery = ({ elements }: GalleryProps) => {
  return (
    <StyledGallery>
      {elements.map((elem) => (
        <Tile key={elem.title} data={elem} />
      ))}
    </StyledGallery>
  );
};

export default Gallery;
