import styled from "styled-components";
import { ITileProps } from "../types/PropTypes";

const StyledTile = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.M};
  border: 1px solid ${({ theme }) => theme.colors.element_stroke};
  border-radius: 5px;
`;

const PreviewCtn = styled.div`
  aspect-ratio: 1 / 1;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.element_bg};
`;

const Tile = ({ data }: ITileProps) => {
  return (
    <StyledTile>
      <PreviewCtn>{data.component}</PreviewCtn>
    </StyledTile>
  );
};

export default Tile;
