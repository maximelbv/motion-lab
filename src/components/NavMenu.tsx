import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavigationObject } from "../types/Constants";
import ExternalLinkArrow from "./ExternalLinkArrow";

interface NavMenuProps {
  elements: NavigationObject[];
}

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.M};
  & a {
    display: flex;
    border-radius: 50px;
    gap: 10px;
    background: ${({ theme }) => theme.colors.element_bg};
    color: inherit;
    padding: ${({ theme }) => theme.spacing.ML} 25px;
    font-size: 20px;
    font-family: ${({ theme }) => theme.fonts.Dahila};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.buttonText};
    border: 1px solid ${({ theme }) => theme.colors.element_stroke};
  }
`;

const NavMenu = ({ elements }: NavMenuProps) => {
  return (
    <StyledNav>
      {elements.map((menu) => (
        <Link
          key={menu.route}
          to={menu.route}
          target={menu.isExternal ? "_blank" : ""}
        >
          <span style={{ lineHeight: "1" }}>{menu.name}</span>
          {menu.isExternal && <ExternalLinkArrow />}
        </Link>
      ))}
    </StyledNav>
  );
};

export default NavMenu;
