import styled from "styled-components";
import { Frame } from "../types/Data";

const StyledTile = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.M};
  border: 1px solid ${({ theme }) => theme.colors.element_stroke};
  border-radius: 10px;
`;

const PreviewCtn = styled.div`
  aspect-ratio: 1 / 1;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.element_bg};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export interface TileProps {
  data: Frame;
}

const Tile = ({ data }: TileProps) => {
  return (
    <StyledTile>
      <PreviewCtn>
        <ContentWrapper>{data.component}</ContentWrapper>
      </PreviewCtn>
    </StyledTile>
  );
};

export default Tile;
