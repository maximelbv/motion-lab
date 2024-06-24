import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorPage = () => {
  const StyledErrorWrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const StyledError = styled.div`
    display: grid;
    gap: ${({ theme }) => theme.spacing.M};
    align-items: center;
    justify-content: center;
    text-align: center;
    & h1 {
      font-size: ${({ theme }) => theme.fontSize.XXXL};
    }
  `;

  return (
    <StyledErrorWrapper>
      <StyledError>
        <h1>404</h1>
        <span>Not found</span>
        <Link to="/">Return Home</Link>
      </StyledError>
    </StyledErrorWrapper>
  );
};

export default ErrorPage;
