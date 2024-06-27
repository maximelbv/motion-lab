import styled from "styled-components";

const StyledExternalLinkArrow = styled.div`
  & svg {
    & path {
      fill: ${({ theme }) => theme.colors.text};
    }
  }
`;

const ExternalLinkArrow = () => {
  return (
    <StyledExternalLinkArrow>
      <svg
        width="11"
        height="12"
        viewBox="0 0 11 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 1.5C11 0.947715 10.5523 0.5 10 0.5H1C0.447716 0.5 2.84554e-07 0.947715 2.84554e-07 1.5C2.84554e-07 2.05228 0.447716 2.5 1 2.5H9V10.5C9 11.0523 9.44772 11.5 10 11.5C10.5523 11.5 11 11.0523 11 10.5V1.5ZM1.70711 11.2071L10.7071 2.20711L9.29289 0.792893L0.292893 9.79289L1.70711 11.2071Z"
          fill="#545662"
        />
      </svg>
    </StyledExternalLinkArrow>
  );
};

export default ExternalLinkArrow;
