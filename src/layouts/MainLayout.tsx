import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import CustomCursor from "../assets/icons/cursor.svg";

const MainLayout = () => {
  const StyledMainLayoutCtn = styled.div`
    min-height: 100svh;
    min-width: 100svw;
    padding: ${({ theme }) => theme.spacing.XL};
  `;
  const StyledMainLayoutContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "url(" + CustomCursor + "), auto",
      }}
    >
      <StyledMainLayoutCtn>
        <StyledMainLayoutContent>
          <Header />
          <Outlet />
        </StyledMainLayoutContent>
      </StyledMainLayoutCtn>
    </div>
  );
};

export default MainLayout;
