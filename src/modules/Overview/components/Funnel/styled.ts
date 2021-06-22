import styled from "styled-components";

export const FunnelBlockData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 2em;
`;

export const FunnelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledFunnelContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FunnelStageConversionData = styled.div`
  display: flex;
  justify-self: center;
  background-color: ${({ theme }) => theme.palette.background.mainWhite};
  color: ${({ theme }) => theme.palette.fonts.mainDarkBlue};
  padding: 0.75rem 2rem;
  margin: -1rem 0;
  z-index: 2;
`;

export const Test = styled.div<{ size: "l" | "m" | "s" }>`
  display: flex;
  align-items: center;
  width: 100%;
  /* width: ${({ size }) => {
    switch (size) {
      case "l":
        return "100%";
      case "m":
        return "80%";
      case "s":
        return "60%";
    }
  }}; */
  width: 100%;
  & > div {
    width: ${({ size }) => {
      switch (size) {
        case "l":
          return "20%";
        case "m":
          return "40%";
        case "s":
          return "60%";
      }
    }};
  }
`;
export const StyledFunnel = styled.span<{ size: "l" | "m" | "s" }>`
  display: flex;
  justify-content: center;
  width: ${({ size }) => {
    switch (size) {
      case "l":
        return "80%";
      case "m":
        return "60%";
      case "s":
        return "40%";
    }
  }};
  border-radius: 10px;
  border: 1px solid
    ${({ theme, size }) =>
      size === "s" ? 0 : theme.palette.borders.funnelBorder};
  height: 100px;
  background: ${({ theme, size }) =>
    size === "s"
      ? theme.palette.background.funnelResult
      : theme.palette.background.funnel};
  transform: perspective(20vw) rotateX(335deg);
`;
