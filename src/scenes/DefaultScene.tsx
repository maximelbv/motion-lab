import { useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { useRef } from "react";
import { DirectionalLightHelper, DirectionalLight } from "three";
import { ReactNode } from "react";

interface DefaultSceneProps {
  children: ReactNode;
}

const DefaultScene: React.FC<DefaultSceneProps> = ({ children }) => {
  const directionalLightRef = useRef<DirectionalLight>(null!);

  useHelper(
    directionalLightRef as React.MutableRefObject<DirectionalLight>,
    DirectionalLightHelper,
    0.5,
    "#181818"
  );

  const { lightColor, lightIntensity } = useControls({
    lightColor: "white",
    lightIntensity: {
      value: 1,
      min: 0,
      max: 5,
    },
  });

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight
        position={[0, 0, 2]}
        ref={directionalLightRef}
        color={lightColor}
        intensity={lightIntensity}
      />
      {children}
    </>
  );
};

export default DefaultScene;
