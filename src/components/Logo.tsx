import styled from "styled-components";

const Logo = () => {
  const StyledLogo = styled.div`
    & h1 {
      font-size: ${({ theme }) => theme.fontSize.ML};
    }
    & span {
      font-size: ${({ theme }) => theme.fontSize.S};
    }
  `;

  return (
    <StyledLogo>
      <h1>Motion Lab</h1>
      <span>Maxime Lefebvre</span>
    </StyledLogo>
  );
};

export default Logo;
