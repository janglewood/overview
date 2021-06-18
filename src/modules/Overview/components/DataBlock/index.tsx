// Lib
import { FC } from "react";

// Components
import { StyledDataBlock } from "./styled";

const DataBlock: FC = ({ children }: any) => {
  return <StyledDataBlock>{children}</StyledDataBlock>;
};

export default DataBlock;
