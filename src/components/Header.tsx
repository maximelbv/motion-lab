import { navigation } from "../constants/navigation";
import styled from "styled-components";
import NavMenu from "./NavMenu";

const StyledHeader = styled.div`
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.element_stroke};
  background: ${({ theme }) => theme.colors.element_bg};
  margin: ${({ theme }) => theme.spacing.XL};
  padding: ${({ theme }) => theme.spacing.XL};
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>Logo</div>
      <NavMenu elements={navigation} />
    </StyledHeader>
  );
};

export default Header;
