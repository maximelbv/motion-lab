import styled from "styled-components";
import Gallery from "../components/Gallery";
import { frames } from "../constants/frames";

const StyledMotionLabPage = styled.div`
  width: 100%;
`;

const MotionLabPage = () => {
  return (
    <StyledMotionLabPage>
      <Gallery elements={frames} />
    </StyledMotionLabPage>
  );
};

export default MotionLabPage;
