import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoCondensedTitle from "../assets/icons/logo/LogoCondensedTitle";

const Logo = () => {
  const StyledLogo = styled.div`
    & h1 {
      font-family: ${({ theme }) => theme.fonts.Dahila};
      font-size: ${({ theme }) => theme.fontSize.XXXL};
      color: #ff6600;
    }
    & span {
      font-size: ${({ theme }) => theme.fontSize.S};
    }
    & path {
      fill: ${({ theme }) => theme.colors.genericElementColor};
    }
  `;

  return (
    <StyledLogo>
      <Link to="/">
        <LogoCondensedTitle />
      </Link>
    </StyledLogo>
  );
};

export default Logo;
