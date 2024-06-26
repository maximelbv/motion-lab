import { Frame } from "../../types/Data";

interface MapFrameDataToRouteProps {
  frameData: Frame;
}

export const mapFrameDataToRoute = ({
  frameData,
}: MapFrameDataToRouteProps) => {
  if (frameData) {
    return {
      path: `/frames${frameData.link}`,
      element: frameData.frame,
    };
  } else {
    return null;
  }
};
