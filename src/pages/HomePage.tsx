import Gallery from "../components/Gallery";
import { Tags } from "../constants/tags";
import { IGalleryTileData } from "../types/Data";

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
    <>
      <Gallery elements={sampleData} />
    </>
  );
};

export default HomePage;
