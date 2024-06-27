import styled from "styled-components";
import { Frame } from "../types/Data";
import { Link } from "react-router-dom";

const StyledTile = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.M};
  border-radius: 10px;
  & a {
    text-decoration: none;
    color: inherit;
  }
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
      <Link to={`/frames${data.link}`}>
        <PreviewCtn>
          <ContentWrapper>{data.preview}</ContentWrapper>
        </PreviewCtn>
      </Link>
    </StyledTile>
  );
};

export default Tile;
