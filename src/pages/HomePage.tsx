import styled from "styled-components";
import Gallery from "../components/Gallery";
import { Tags } from "../constants/tags";
import { IGalleryTileData } from "../types/Data";

const StyledHomePage = styled.div`
  width: 100%;
  /* max-width: 1400px; */
`;

const HomePage = () => {
  const sampleData: IGalleryTileData[] = [
    {
      title: "SVG Hover effect",
      tags: [Tags.gsap],
      preview: null,
    },
    {
      title: "SVG Hover effect",
      tags: [Tags.threejs],
      preview: null,
    },
    {
      title: "SVG Hover effect",
      tags: [Tags.gsap],
      preview: null,
    },
    {
      title: "SVG Hover effect",
      tags: [Tags.threejs],
      preview: null,
    },
    {
      title: "SVG Hover effect",
      tags: [Tags.gsap],
      preview: null,
    },
    {
      title: "SVG Hover effect",
      tags: [Tags.threejs],
      preview: null,
    },
  ];
  return (
    <StyledHomePage>
      <Gallery elements={sampleData} />
    </StyledHomePage>
  );
};

export default HomePage;
