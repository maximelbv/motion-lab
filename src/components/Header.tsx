import styled from "styled-components";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import { navigation } from "../constants/navigation";

const StyledHeader = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.XL};
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
