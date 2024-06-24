import { Link } from "react-router-dom";
import styled from "styled-components";
import { INavMenuProps } from "../types/PropTypes";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.M};
`;

const NavMenu = ({ elements }: INavMenuProps) => {
  return (
    <StyledNav>
      {elements.map((menu) => (
        <Link key={menu.route} to={menu.route}>
          {menu.name}
        </Link>
      ))}
    </StyledNav>
  );
};

export default NavMenu;
