import styled from "styled-components";

const StyledExternalLinkArrow = styled.div`
  & svg {
    margin-bottom: 1px;
    & path {
      fill: ${({ theme }) => theme.colors.buttonText};
    }
  }
`;

const ExternalLinkArrow = () => {
  return (
    <StyledExternalLinkArrow>
      <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.6631 1.83667C12.6631 1.28438 12.2154 0.836669 11.6631 0.836669H2.66309C2.1108 0.836669 1.66309 1.28438 1.66309 1.83667C1.66309 2.38895 2.1108 2.83667 2.66309 2.83667H10.6631V10.8367C10.6631 11.389 11.1108 11.8367 11.6631 11.8367C12.2154 11.8367 12.6631 11.389 12.6631 10.8367V1.83667ZM2.37019 12.5438L12.3702 2.54378L10.956 1.12956L0.955979 11.1296L2.37019 12.5438Z" />
      </svg>
    </StyledExternalLinkArrow>
  );
};

export default ExternalLinkArrow;
