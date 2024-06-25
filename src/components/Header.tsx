import { navigation } from "../constants/navigation";
import styled from "styled-components";
import NavMenu from "./NavMenu";
import Logo from "./Logo";

const StyledHeader = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.element_stroke};
  background: ${({ theme }) => theme.colors.element_bg};
  padding: ${({ theme }) => theme.spacing.XL};
  margin-bottom: ${({ theme }) => theme.spacing.XL};
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <NavMenu elements={navigation} />
    </StyledHeader>
  );
};

export default Header;
