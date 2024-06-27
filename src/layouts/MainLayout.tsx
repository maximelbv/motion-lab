import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import CustomCursor from "../assets/icons/cursor.svg";

const MainLayout = () => {
  const StyledMainLayoutCtn = styled.div`
    height: 100svh;
    width: 100svw;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const StyledOutletWrapper = styled.div`
    width: 100%;
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
        <Header />
        <StyledOutletWrapper>
          <Outlet />
        </StyledOutletWrapper>
      </StyledMainLayoutCtn>
    </div>
  );
};

export default MainLayout;
