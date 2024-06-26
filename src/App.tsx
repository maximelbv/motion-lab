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

const frameRoutes = frames.map((frame) =>
  mapFrameDataToRoute({ frameData: frame })
) as RouteObject[];

frameRoutes.push({ path: "/", element: <HomePage /> });

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: frameRoutes,
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
