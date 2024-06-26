import { Canvas } from "@react-three/fiber";
import { ReactNode } from "react";

interface ThreeCanvasLayoutProps {
  children: ReactNode;
}

const ThreeCanvasLayout: React.FC<ThreeCanvasLayoutProps> = ({ children }) => {
  return <Canvas style={{ height: "100svh" }}>{children}</Canvas>;
};

export default ThreeCanvasLayout;
