import styled from "styled-components";
import Gallery from "../components/Gallery";
import { frames } from "../constants/frames";

const StyledHomePage = styled.div`
  width: 100%;
`;

const HomePage = () => {
  return (
    <StyledHomePage>
      <Gallery elements={frames} />
    </StyledHomePage>
  );
};

export default HomePage;
