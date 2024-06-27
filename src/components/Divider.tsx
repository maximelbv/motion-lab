import styled from "styled-components";

const Divider = () => {
  const StyledDivider = styled.div`
    height: 1px;
    background: ${({ theme }) => theme.colors.element_bg_darker};
    margin: 5px;
  `;

  return <StyledDivider></StyledDivider>;
};

export default Divider;
