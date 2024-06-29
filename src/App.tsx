import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import { frames } from "./constants/frames";
import { mapFrameDataToRoute } from "./helpers/mappers/frameMappers";
import MotionLabPage from "./pages/MotionLabPage";
import AboutPage from "./pages/AboutPage";
import MotionLabLayout from "./layouts/MotionLabLayout";

const frameRoutes = frames.map((frame) =>
  mapFrameDataToRoute({ frameData: frame })
) as RouteObject[];

frameRoutes.push({ path: "/lab", element: <MotionLabPage /> });

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/lab",
        element: <MotionLabLayout />,
        children: frameRoutes,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
