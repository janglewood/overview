import styled from "styled-components";

export const StyledDataBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.secondary};
`;
