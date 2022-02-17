import styled from "styled-components";

const StyledCTAButton = styled.button`
  width: 245px;
  background: ${({ theme }) => theme.palette.primary.charcoal};
  color: ${({ theme }) => theme.palette.primary.white};
  margin: ${({ theme }) => theme.spacing[theme.view].layout_05} 0;
  padding: ${({ theme }) => theme.spacing[theme.view].layout_04};
  border: none;
  height: 56px;
  border-radius: 500px;

  text-transform: uppercase;
`;

export const Button = ({ children = "Send" }) => {
  return <StyledCTAButton>{children}</StyledCTAButton>;
};
