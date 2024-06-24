import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";

const MainLayout = () => {
  const StyledMainLayoutContent = styled.div`
    min-height: 100vh;
    min-width: 100%;
  `;

  return (
    <div>
      <StyledMainLayoutContent>
        <Header />
        <Outlet />
      </StyledMainLayoutContent>
    </div>
  );
};

export default MainLayout;
