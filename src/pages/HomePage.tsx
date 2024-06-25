import styled from "styled-components";
import Gallery from "../components/Gallery";
import { projects } from "../constants/projects";

const StyledHomePage = styled.div`
  width: 100%;
`;

const HomePage = () => {
  return (
    <StyledHomePage>
      <Gallery elements={projects} />
    </StyledHomePage>
  );
};

export default HomePage;
